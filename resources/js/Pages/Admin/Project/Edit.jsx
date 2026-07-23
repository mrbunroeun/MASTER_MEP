import { Head, useForm, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ArrowLeft, Save } from "lucide-react";
import ProjectGalleryEditor from "@/Components/Admin/ProjectGalleryEditor";

const CATEGORIES = [
    "Commercial Buildings",
    "Hospitals",
    "Banks",
    "Restaurants & Cafés",
    "Resort",
    "Condo/Villa",
    "Others",
];

export default function Edit({ auth, project, services = [] }) {
    const { data, setData, post, processing, errors, progress } = useForm({
        _method: "put",
        title: project.title ?? "",
        description: project.description ?? "",
        scope: project.scope ?? "",
        image: null,
        service_id: project.service_id ? String(project.service_id) : "",
        category: project.category ?? "Commercial Buildings",
        location: project.location ?? "",
        timeline: project.timeline ?? "",
        order: project.order ?? 0,
        is_active: project.is_active ?? true,
        // seed gallery slots from the project's own saved gallery (per-project, not per-category)
        gallery: Array.from({ length: 5 }, (_, i) => (project.gallery && project.gallery[i]) || null),
    });

    const handleGalleryChange = (index, value) => {
        const updated = [...data.gallery];
        updated[index] = value;
        setData("gallery", updated);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.project.update", project.id), { forceFormData: true });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Project" />
            <div className="max-w-2xl mx-auto px-4 py-10">

                <div className="flex items-center gap-3 mb-8">
                    <Link href={route("admin.project.index")}
                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition">
                        <ArrowLeft className="w-4 h-4 text-gray-600" />
                    </Link>
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Edit Project</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl shadow p-8">

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                        <input type="text" value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]" />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>

                    {/* Service */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                        <select value={data.service_id}
                            onChange={(e) => setData("service_id", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C] bg-white">
                            <option value="">— No service / Unassigned —</option>
                            {services.map((s) => (
                                <option key={s.id} value={s.id}>{s.title} ({s.type})</option>
                            ))}
                        </select>
                        {errors.service_id && <p className="text-red-500 text-xs mt-1">{errors.service_id}</p>}
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                        <select value={data.category}
                            onChange={(e) => setData("category", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C] bg-white">
                            {CATEGORIES.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                        {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
                    </div>

                    {/* Project Gallery — belongs to THIS project, not shared by category */}
                    <ProjectGalleryEditor
    gallery={data.gallery}
    onChange={handleGalleryChange}
    errors={errors}
/>
{errors.gallery && <p className="text-red-500 text-xs -mt-3">{errors.gallery}</p>}

                    {/* Scope */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Scope of Work
                            <span className="text-gray-400 font-normal ml-1">(one item per line)</span>
                        </label>
                        <textarea rows={4} value={data.scope}
                            onChange={(e) => setData("scope", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C] resize-none"
                            placeholder={"Electrical System\nPlumbing System\nAir Conditioning System"} />
                        {errors.scope && <p className="text-red-500 text-xs mt-1">{errors.scope}</p>}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea rows={3} value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C] resize-none"
                            placeholder="Short project description (optional)" />
                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                    </div>

                    {/* Location + Timeline */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input type="text" value={data.location}
                                onChange={(e) => setData("location", e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                                placeholder="Phnom Penh" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
                            <input type="text" value={data.timeline}
                                onChange={(e) => setData("timeline", e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                                placeholder="2025" />
                        </div>
                    </div>

                    {/* Current Image */}
                    {project.image && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Current Image</label>
                            <img src={`/storage/${project.image}`} alt={project.title}
                                className="w-full sm:w-60 h-36 object-cover rounded-lg border border-gray-200" />
                        </div>
                    )}

                    {/* Replace Image + Order */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {project.image ? "Replace Image" : "Image"}
                            </label>
                            <input type="file" accept="image/*"
                                onChange={(e) => setData("image", e.target.files[0])}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm" />
                            {progress && (
                                <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                                    <div className="bg-[#1A3A5C] h-1.5 rounded-full transition-all"
                                        style={{ width: `${progress.percentage}%` }} />
                                </div>
                            )}
                            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
                            <input type="number" value={data.order}
                                onChange={(e) => setData("order", parseInt(e.target.value) || 0)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                                min={0} />
                        </div>
                    </div>

                    {/* Active */}
                    <div className="flex items-center gap-2 pt-1">
                        <input type="checkbox" id="is_active" checked={data.is_active}
                            onChange={(e) => setData("is_active", e.target.checked)}
                            className="w-4 h-4 accent-[#1A3A5C]" />
                        <label htmlFor="is_active" className="text-sm text-gray-700">Active (visible on website)</label>
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                        <button type="submit" disabled={processing}
                            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A] disabled:opacity-60 transition">
                            <Save className="w-4 h-4" />
                            {processing ? "Updating..." : "Update Project"}
                        </button>
                    </div>

                </form>
            </div>
        </AuthenticatedLayout>
    );
}