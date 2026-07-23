import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

function CategorySlot({ category, images, onSaved }) {
    const { data, setData, post, processing, errors } = useForm({
        images: [null, null, null, null, null],
    });

    const [previews, setPreviews] = useState(images.map((img) => img || null));
    const [removed, setRemoved] = useState([false, false, false, false, false]);

    const handleFileChange = (index, file) => {
        const newImages = [...data.images];
        newImages[index] = file;
        setData("images", newImages);

        const newPreviews = [...previews];
        newPreviews[index] = file ? URL.createObjectURL(file) : previews[index];
        setPreviews(newPreviews);

        const newRemoved = [...removed];
        newRemoved[index] = false;
        setRemoved(newRemoved);
    };

    const handleRemove = (index) => {
        const newImages = [...data.images];
        newImages[index] = "REMOVE";
        setData("images", newImages);

        const newPreviews = [...previews];
        newPreviews[index] = null;
        setPreviews(newPreviews);

        const newRemoved = [...removed];
        newRemoved[index] = true;
        setRemoved(newRemoved);
    };

    const handleSave = (e) => {
        e.preventDefault();
        post(route("admin.category-gallery.update", category), {
            forceFormData: true,
            data: { ...data, _method: "put" },
            onSuccess: () => onSaved?.(),
            preserveScroll: true,
        });
    };

    return (
        <div className="bg-white rounded-xl shadow p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-4">
                {previews.map((preview, i) => (
                    <div key={i} className="relative">
                        <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 overflow-hidden flex items-center justify-center bg-gray-50">
                            {preview && !removed[i] ? (
                                <img
                                    src={preview}
                                    alt={`Slot ${i + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-xs text-gray-400">
                                    Slot {i + 1}
                                </span>
                            )}
                        </div>

                        <div className="mt-2 flex flex-col gap-1">
                            <label className="text-xs text-center bg-blue-50 hover:bg-blue-100 text-blue-700 rounded py-1 cursor-pointer">
                                {preview && !removed[i] ? "Replace" : "Upload"}
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) =>
                                        handleFileChange(i, e.target.files[0])
                                    }
                                />
                            </label>

                            {preview && !removed[i] && (
                                <button
                                    type="button"
                                    onClick={() => handleRemove(i)}
                                    className="text-xs text-center bg-red-50 hover:bg-red-100 text-red-700 rounded py-1"
                                >
                                    Remove
                                </button>
                            )}
                        </div>

                        {errors[`images.${i}`] && (
                            <p className="text-xs text-red-600 mt-1">
                                {errors[`images.${i}`]}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            <button
                onClick={handleSave}
                disabled={processing}
                className="px-4 py-2 bg-blue-900 text-white text-sm font-medium rounded-lg hover:bg-blue-800 disabled:opacity-50"
            >
                {processing ? "Saving..." : "Save Gallery"}
            </button>
        </div>
    );
}

export default function Index({ galleries = [] }) {
    const [flash, setFlash] = useState(null);

    return (
        <AuthenticatedLayout>
            <Head title="Category Galleries" />

            <div className="py-8 px-4 sm:px-6 max-w-5xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Category Galleries
                </h1>
                <p className="text-sm text-gray-500 mb-6">
                    Upload up to 5 images per category. These images are shared
                    across every project card in that category on the public
                    Projects page.
                </p>

                {flash && (
                    <div className="mb-4 px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm">
                        {flash}
                    </div>
                )}

                {galleries.map((g) => (
                    <CategorySlot
                        key={g.category}
                        category={g.category}
                        images={g.images}
                        onSaved={() =>
                            setFlash(`"${g.category}" gallery updated.`)
                        }
                    />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
