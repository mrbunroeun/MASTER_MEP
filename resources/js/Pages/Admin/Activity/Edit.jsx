import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import RichTextEditor from "@/Components/RichTextEditor";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export default function Edit({ activity }) {
    const [fileError, setFileError] = useState("");
    const [removedGallery, setRemovedGallery] = useState([]);

    const { data, setData, post, processing, errors } = useForm({
        title: activity.title || "",
        category: activity.category || "",
        activity_date: activity.activity_date || "",
        excerpt: activity.excerpt || "",
        content: activity.content || "",
        image: null,
        gallery_images: [],
        remove_gallery: [],
        is_active: activity.is_active,
        _method: "put",
    });

    const existingGallery = (activity.gallery_images || []).filter(
        (img) => !removedGallery.includes(img)
    );

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFileError("");
        if (!file) return;

        if (file.size > MAX_FILE_SIZE) {
            setFileError(`"${file.name}" is ${(file.size / 1024 / 1024).toFixed(1)}MB — max allowed is 10MB.`);
            e.target.value = "";
            return;
        }
        setData("image", file);
    };

    const handleGalleryChange = (e) => {
        const files = Array.from(e.target.files);
        setFileError("");

        const oversized = files.filter((f) => f.size > MAX_FILE_SIZE);
        if (oversized.length > 0) {
            setFileError(
                `${oversized.map((f) => f.name).join(", ")} exceed${oversized.length === 1 ? "s" : ""} the 10MB limit.`
            );
            e.target.value = "";
            return;
        }
        setData("gallery_images", files);
    };

    const removeExistingImage = (path) => {
        const updated = [...removedGallery, path];
        setRemovedGallery(updated);
        setData("remove_gallery", updated);
    };

    const submit = (e) => {
        e.preventDefault();
        if (fileError) return;
        post(route("admin.activity.update", activity.id), { forceFormData: true });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Activity" />

            <div className="p-6 max-w-2xl">
                <h1 className="text-2xl font-bold text-[#1A3A5C] mb-6">Edit Activity</h1>

                {fileError && (
                    <div className="mb-4 px-4 py-3 rounded-lg bg-red-50 text-red-600 text-sm">
                        {fileError}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-5 bg-white p-6 rounded-xl shadow-sm">
                    <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full border rounded-lg p-2"
                        />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Category</label>
                        <input
                            type="text"
                            value={data.category}
                            onChange={(e) => setData("category", e.target.value)}
                            className="w-full border rounded-lg p-2"
                        />
                        {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Date</label>
                        <input
                            type="date"
                            value={data.activity_date}
                            onChange={(e) => setData("activity_date", e.target.value)}
                            className="w-full border rounded-lg p-2"
                        />
                        {errors.activity_date && <p className="text-red-500 text-xs mt-1">{errors.activity_date}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Excerpt</label>
                        <textarea
                            value={data.excerpt}
                            onChange={(e) => setData("excerpt", e.target.value)}
                            rows={4}
                            className="w-full border rounded-lg p-2"
                        />
                        {errors.excerpt && <p className="text-red-500 text-xs mt-1">{errors.excerpt}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Full Content</label>
                        <RichTextEditor
                            value={data.content}
                            onChange={(html) => setData("content", html)}
                            placeholder="Write the full article here — use Heading for section titles"
                        />
                        {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content}</p>}
                    </div>

                    {activity.image && (
                        <div>
                            <label className="block text-sm font-medium mb-1">Current Image</label>
                            <img
                                src={`/storage/${activity.image}`}
                                alt={activity.title}
                                className="w-32 h-24 object-cover rounded"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium mb-1">Replace Image <span className="text-gray-400 font-normal">(max 10MB)</span></label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full border rounded-lg p-2"
                        />
                        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                    </div>

                    {existingGallery.length > 0 && (
                        <div>
                            <label className="block text-sm font-medium mb-1">Current Gallery</label>
                            <div className="grid grid-cols-4 gap-3">
                                {existingGallery.map((img) => (
                                    <div key={img} className="relative group">
                                        <img
                                            src={`/storage/${img}`}
                                            alt="Gallery"
                                            className="w-full aspect-square object-cover rounded border"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeExistingImage(img)}
                                            className="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium mb-1">Add Gallery Images <span className="text-gray-400 font-normal">(max 10MB each — hold Ctrl to select multiple)</span></label>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleGalleryChange}
                            className="w-full border rounded-lg p-2"
                        />
                        {errors["gallery_images.0"] && (
                            <p className="text-red-500 text-xs mt-1">{errors["gallery_images.0"]}</p>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={data.is_active}
                            onChange={(e) => setData("is_active", e.target.checked)}
                            id="is_active"
                        />
                        <label htmlFor="is_active" className="text-sm">Active (visible on public site)</label>
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="px-6 py-2 bg-[#1A3A5C] text-white rounded-lg font-medium hover:bg-[#275587] disabled:opacity-50"
                    >
                        Update Activity
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}