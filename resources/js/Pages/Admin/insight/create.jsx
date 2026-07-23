import { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BackToDashboard from "@/Components/BackToDashboard";
import ImageCropModal from "@/Components/ImageCropModal";

function ImagePreview({ image, className = "w-32 h-24 object-cover rounded-lg" }) {
    if (!(image instanceof File)) return null;
    return <img src={URL.createObjectURL(image)} alt="" className={className} />;
}

const inputClass =
    "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]/20 focus:border-[#1A3A5C] transition";
const labelClass = "block text-sm font-medium text-gray-600 mb-1";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        category: "",
        published_date: "",
        introduction: "",
        cta_text: "",
        layout: "default",
        highlight_title: "",
        highlight_body: "",
        sections_title: "",
        sections: [{ title: "", body: "", image: null }],
        image: null,
    });

    const [cropState, setCropState] = useState(null);
    const [fileInputKey, setFileInputKey] = useState(0);

    const updateSection = (index, field, value) => {
        const updated = [...data.sections];
        updated[index][field] = value;
        setData("sections", updated);
    };

    const addSection = () => {
        setData("sections", [...data.sections, { title: "", body: "", image: null }]);
    };

    const removeSection = (index) => {
        setData("sections", data.sections.filter((_, i) => i !== index));
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
        if (cropState.target === "hero") {
            setData("image", croppedFile);
        } else {
            updateSection(cropState.target, "image", croppedFile);
        }
        closeCrop();
    };

    const submit = (e) => {
        e.preventDefault();

        const fd = new FormData();
        fd.append("title", data.title);
        fd.append("category", data.category || "");
        fd.append("published_date", data.published_date || "");
        fd.append("introduction", data.introduction || "");
        fd.append("cta_text", data.cta_text || "");
        fd.append("layout", data.layout);
        fd.append("highlight_title", data.highlight_title || "");
        fd.append("highlight_body", data.highlight_body || "");
        fd.append("sections_title", data.sections_title || "");
        if (data.image instanceof File) fd.append("image", data.image);

        data.sections.forEach((s, i) => {
            fd.append(`sections[${i}][title]`, s.title || "");
            fd.append(`sections[${i}][body]`, s.body || "");
            if (s.image instanceof File) fd.append(`sections[${i}][image]`, s.image);
        });

        post("/admin/insights", {
            data: fd,
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Add Insight" />

            <div className="max-w-4xl mx-auto px-4 py-10">
                <BackToDashboard />

                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Add Insight</h1>
                    <p className="text-sm text-gray-500 mt-1">Create a new article for the Insights page.</p>
                </div>

                <form onSubmit={submit} className="space-y-8">
                    {/* Basic Info */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
                        <h2 className="font-semibold text-gray-700">Basic Info</h2>

                        <div>
                            <label className={labelClass}>Title</label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => setData("title", e.target.value)}
                                className={inputClass}
                            />
                            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className={labelClass}>Category</label>
                                <select
                                    value={data.category}
                                    onChange={(e) => setData("category", e.target.value)}
                                    className={inputClass}
                                >
                                    <option value="">— Select category —</option>
                                    <option value="HVAC">HVAC</option>
                                    <option value="MEP Design">MEP Design</option>
                                    <option value="Maintenance">Maintenance</option>
                                    <option value="Plumbing">Plumbing</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelClass}>Published Date</label>
                                <input
                                    type="date"
                                    value={data.published_date}
                                    onChange={(e) => setData("published_date", e.target.value)}
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div>
                            <label className={labelClass}>Layout</label>
                            <select
                                value={data.layout}
                                onChange={(e) => setData("layout", e.target.value)}
                                className={inputClass}
                            >
                                <option value="default">Default</option>
                                <option value="dark">Dark (with highlight box)</option>
                            </select>
                        </div>

                        <div>
                            <label className={labelClass}>Cover Image</label>
                            <div className="mb-2">
                                <ImagePreview image={data.image} className="w-48 aspect-video object-cover rounded-lg" />
                            </div>
                            <input
                                key={`hero-image-${fileInputKey}`}
                                type="file"
                                accept="image/*"
                                onChange={(e) => openCropFor(e.target.files[0], "hero", undefined)}
                                className="text-sm"
                            />
                            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                        </div>

                        <div>
                            <label className={labelClass}>Introduction</label>
                            <textarea
                                rows={4}
                                value={data.introduction}
                                onChange={(e) => setData("introduction", e.target.value)}
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label className={labelClass}>CTA Text</label>
                            <input
                                type="text"
                                value={data.cta_text}
                                onChange={(e) => setData("cta_text", e.target.value)}
                                className={inputClass}
                            />
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="font-semibold text-gray-700">Content Sections</h2>
                            <button
                                type="button"
                                onClick={addSection}
                                className="text-sm text-[#1A3A5C] font-medium hover:underline"
                            >
                                + Add Section
                            </button>
                        </div>

                        <div>
                            <label className={labelClass}>Sections Heading (optional)</label>
                            <input
                                type="text"
                                value={data.sections_title}
                                onChange={(e) => setData("sections_title", e.target.value)}
                                placeholder="Important Factors to Consider"
                                className={inputClass}
                            />
                        </div>

                        <div className="space-y-4">
                            {data.sections.map((section, i) => (
                                <div key={i} className="border border-gray-200 rounded-lg p-4 space-y-3 relative">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-semibold text-[#1A3A5C] bg-[#1A3A5C]/5 px-2 py-0.5 rounded-full">
                                            Section {i + 1}
                                        </span>
                                        {data.sections.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeSection(i)}
                                                className="text-xs text-red-500 hover:underline"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>

                                    <div>
                                        <label className={labelClass}>Title</label>
                                        <input
                                            type="text"
                                            placeholder="Section title"
                                            value={section.title}
                                            onChange={(e) => updateSection(i, "title", e.target.value)}
                                            className={inputClass}
                                        />
                                    </div>

                                    <div>
                                        <label className={labelClass}>Body</label>
                                        <textarea
                                            rows={3}
                                            placeholder="Section body — start a line with '- ' for a bullet point"
                                            value={section.body}
                                            onChange={(e) => updateSection(i, "body", e.target.value)}
                                            className={inputClass}
                                        />
                                    </div>

                                    <div>
                                        <label className={labelClass}>Image</label>
                                        <div className="flex justify-center mb-2">
                                            <ImagePreview image={section.image} className="w-48 aspect-[4/3] object-cover rounded-lg" />
                                        </div>
                                        <div className="flex justify-center">
                                            <input
                                                key={`section-image-${i}-${fileInputKey}`}
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => openCropFor(e.target.files[0], i, 4 / 3)}
                                                className="text-sm"
                                            />
                                        </div>
                                        {errors[`sections.${i}.image`] && (
                                            <p className="text-red-500 text-xs mt-1 text-center">{errors[`sections.${i}.image`]}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Highlight Box */}
                    {/* <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
                        <h2 className="font-semibold text-gray-700">Highlight Box (optional)</h2>
                        <p className="text-xs text-gray-500 -mt-2">
                            Only displayed on the site when Layout above is set to "Dark".
                        </p>
                        <div>
                            <label className={labelClass}>Highlight Title</label>
                            <input
                                type="text"
                                value={data.highlight_title}
                                onChange={(e) => setData("highlight_title", e.target.value)}
                                className={inputClass}
                            />
                        </div>
                        <div>
                            <label className={labelClass}>Highlight Body</label>
                            <textarea
                                rows={3}
                                value={data.highlight_body}
                                onChange={(e) => setData("highlight_body", e.target.value)}
                                className={inputClass}
                            />
                        </div>
                    </div> */}

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full sm:w-auto justify-center px-6 py-2.5 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A] transition disabled:opacity-50"
                        >
                            {processing ? "Saving..." : "Save"}
                        </button>
                        <Link
                            href="/admin/insights"
                            className="w-full sm:w-auto text-center px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
                        >
                            Cancel
                        </Link>
                    </div>
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