import { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BackToDashboard from "@/Components/BackToDashboard";
import ImageCropModal from "@/Components/ImageCropModal";

const TYPE_OPTIONS = [
    { value: "mechanical",  label: "Mechanical / HVAC" },
    { value: "electrical",  label: "Electrical & ELV" },
    { value: "plumbing",    label: "Plumbing" },
    { value: "maintenance", label: "Maintenance (AMS)" },
    { value: "solasystem",  label: "Solar System" },
];

// Matches the h-[320px] display box on the public Services page (~16:9)
const IMAGE_ASPECT = 16 / 9;
// Item cards on the public Services page are rendered at aspect-[4/3]
const ITEM_ASPECT = 4 / 3;

export default function Create() {
    const { data, setData, transform, post, processing, errors } = useForm({
        type: "mechanical",
        tagline: "",
        title: "",
        description: "",
        button_text: "",
        order: 0,
        is_active: true,
        items: [{ title: "", points: "" }], // no file in here anymore
    });

    const [heroImage, setHeroImage] = useState(null);
    const [itemImages, setItemImages] = useState([null]); // index-aligned with data.items
    const [showMore, setShowMore] = useState(false);

    const [cropState, setCropState] = useState(null); // { target: "hero" | itemIndex, src, fileName }
    const [fileInputKey, setFileInputKey] = useState(0);

    const updateItem = (i, field, value) =>
        setData("items", data.items.map((it, idx) => (idx === i ? { ...it, [field]: value } : it)));

    const setItemImage = (i, file) =>
        setItemImages((prev) => prev.map((f, idx) => (idx === i ? file : f)));

    const addItem = () => {
        setData("items", [...data.items, { title: "", points: "" }]);
        setItemImages((prev) => [...prev, null]);
    };

    const removeItem = (i) => {
        setData("items", data.items.filter((_, idx) => idx !== i));
        setItemImages((prev) => prev.filter((_, idx) => idx !== i));
    };

    const openCropFor = (file, target, aspect) => {
        if (!file) return;
        const src = URL.createObjectURL(file);
        setCropState({ target, src, aspect, fileName: file.name });
    };

    const closeCrop = () => {
        if (cropState?.src) URL.revokeObjectURL(cropState.src);
        setCropState(null);
        setFileInputKey((k) => k + 1);
    };

    const handleCropSave = (croppedFile) => {
        setItemImage(cropState.target, croppedFile);
        closeCrop();
    };

    transform((formData) => {
        const fd = new FormData();
        fd.append("type", formData.type);
        fd.append("tagline", formData.tagline || "");
        fd.append("title", formData.title);
        fd.append("description", formData.description || "");
        fd.append("button_text", formData.button_text || "");
        fd.append("order", formData.order || 0);
        fd.append("is_active", formData.is_active ? "1" : "0");
        if (heroImage instanceof File) fd.append("image", heroImage);

        formData.items.forEach((item, i) => {
            fd.append(`items[${i}][title]`, item.title || "");
            fd.append(`items[${i}][points]`, item.points || "");
            if (itemImages[i] instanceof File) fd.append(`items[${i}][image]`, itemImages[i]);
        });

        return fd;
    });

    const submit = (e) => {
        e.preventDefault();
        post("/admin/service", {
            forceFormData: true,
            onError: (errors) => {
                console.log("VALIDATION ERRORS:", errors);
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Add Service" />
            <div className="max-w-3xl mx-auto px-4 py-10">
                <BackToDashboard />
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Add Service</h1>
                    <Link href="/admin/service" className="text-sm text-gray-600 hover:text-[#1A3A5C]">← Back to list</Link>
                </div>

                <form onSubmit={submit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
                        <select value={data.type} onChange={(e) => setData("type", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm bg-white">
                            {TYPE_OPTIONS.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </select>
                        <p className="text-xs text-gray-400 mt-1">
                            Link: <span className="font-mono text-[#1A3A5C]">/services/{data.type}</span>
                        </p>
                        {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                        <input type="text" value={data.title} onChange={(e) => setData("title", e.target.value)}
                            placeholder="e.g. Plumbing System"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm" />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>

                    <div>
                        <button
                            type="button"
                            onClick={() => setShowMore((prev) => !prev)}
                            className="text-sm font-medium text-[#1A3A5C] hover:underline"
                        >
                            {showMore ? "− Hide more options" : "+ Show more options"}
                        </button>
                    </div>

                    {showMore && (
                        <div className="space-y-5 border border-gray-200 rounded-lg p-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
                                <input type="text" value={data.tagline} onChange={(e) => setData("tagline", e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm" />
                                {errors.tagline && <p className="text-red-500 text-xs mt-1">{errors.tagline}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea rows={3} value={data.description} onChange={(e) => setData("description", e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm" />
                                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                                <input type="text" value={data.button_text} onChange={(e) => setData("button_text", e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm" />
                            </div>
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Hero Image</label>
                        {heroImage instanceof File && (
                            <img
                                src={URL.createObjectURL(heroImage)}
                                alt="Hero preview"
                                className="w-48 aspect-video object-cover rounded-lg mb-2 border border-gray-200"
                            />
                        )}
                        <input
                            key={`hero-image-${fileInputKey}`}
                            type="file"
                            accept="image/*"
                            onChange={(e) => setHeroImage(e.target.files[0])}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm"
                        />
                        <p className="text-xs text-gray-400 mt-1">16:9 recommended to match the Services section display.</p>
                        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-medium">Service Items (grid cards)</label>
                            <button type="button" onClick={addItem} className="text-xs px-3 py-1 bg-[#1A3A5C] text-white rounded-lg">
                                + Add Item
                            </button>
                        </div>
                        <div className="space-y-4">
                            {data.items.map((item, i) => (
                                <div key={i} className="border border-gray-200 rounded-lg p-4 space-y-2 relative">
                                    {data.items.length > 1 && (
                                        <button type="button" onClick={() => removeItem(i)}
                                            className="absolute top-2 right-2 text-xs text-red-500">Remove</button>
                                    )}
                                    <input type="text" placeholder="Item title (e.g. Water Supply System)"
                                        value={item.title} onChange={(e) => updateItem(i, "title", e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                                    <textarea rows={3} placeholder="Points — one per line"
                                        value={item.points} onChange={(e) => updateItem(i, "points", e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                                    <div>
                                        <label className="block text-xs font-medium mb-1">Item Image</label>
                                        {itemImages[i] instanceof File && (
                                            <img
                                                src={URL.createObjectURL(itemImages[i])}
                                                alt="Item preview"
                                                className="w-32 aspect-video object-cover rounded-lg mb-1 border border-gray-200"
                                            />
                                        )}
                                        <input
                                            key={`item-image-${i}-${fileInputKey}`}
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => openCropFor(e.target.files[0], i, ITEM_ASPECT)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                            <input type="number" value={data.order} onChange={(e) => setData("order", e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm" />
                        </div>
                        <div className="flex items-center mt-6">
                            <input type="checkbox" id="is_active" checked={data.is_active}
                                onChange={(e) => setData("is_active", e.target.checked)} className="w-4 h-4 mr-2" />
                            <label htmlFor="is_active" className="text-sm font-medium text-gray-700">Active</label>
                        </div>
                    </div>

                    <button type="submit" disabled={processing}
                        className="px-6 py-2.5 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A] disabled:opacity-60">
                        {processing ? "Saving..." : "Create Service"}
                    </button>
                </form>
            </div>

            {cropState && (
                <ImageCropModal
                    imageSrc={cropState.src}
                    aspect={cropState.aspect}
                    fileName={cropState.fileName}
                    onCancel={closeCrop}
                    onSave={handleCropSave}
                />
            )}
        </AuthenticatedLayout>
    );
}