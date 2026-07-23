import { Head, useForm, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ArrowLeft, Save } from "lucide-react";

export default function Edit({ auth, card, services = [] }) {
    const { data, setData, post, processing, errors, progress } = useForm({
        _method: "put",
        title: card.title ?? "",
        description: card.description ?? "",
        location: card.location ?? "",
        timeline: card.timeline ?? "",
        link: card.link ?? "",
        image: null,
        sort_order: card.sort_order ?? 0,
        is_active: card.is_active ?? true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.feature-project-card.update", card.id), { forceFormData: true });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Feature Project Card" />
            <div className="max-w-2xl mx-auto px-4 py-10">

                <div className="flex items-center gap-3 mb-8">
                    <Link href={route("admin.feature-project-card.index")}
                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition">
                        <ArrowLeft className="w-4 h-4 text-gray-600" />
                    </Link>
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Edit Feature Project Card</h1>
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

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea rows={4} value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C] resize-none"
                            placeholder={"One item per line — e.g.\nFresh Air System\nExhaust Ventilation\nDucting Installation"} />
                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                    </div>

                    {/* Location + Timeline */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input type="text" value={data.location ?? ""}
                                onChange={(e) => setData("location", e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                                placeholder="e.g. Phnom Penh" />
                            {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
                            <input type="text" value={data.timeline ?? ""}
                                onChange={(e) => setData("timeline", e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                                placeholder="e.g. 2025" />
                            {errors.timeline && <p className="text-red-500 text-xs mt-1">{errors.timeline}</p>}
                        </div>
                    </div>

                    {/* Link */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Link / URL
                            <span className="text-gray-400 font-normal ml-1">(optional)</span>
                        </label>
                        <select value={data.link ?? ""}
                            onChange={(e) => setData("link", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]">
                            <option value="">— None —</option>
                            {services.map((s) => (
                                <option key={s.id} value={s.url}>{s.title}</option>
                            ))}
                        </select>
                        {errors.link && <p className="text-red-500 text-xs mt-1">{errors.link}</p>}
                    </div>

                    {/* Current Image */}
                    {card.image && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Current Image</label>
                            <img src={`/storage/${card.image}`} alt={card.title}
                                className="w-full sm:w-60 h-36 object-cover rounded-lg border border-gray-200" />
                        </div>
                    )}

                    {/* Replace Image + Sort Order */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {card.image ? "Replace Image" : "Image"}
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
                            <label className="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
                            <input type="number" value={data.sort_order}
                                onChange={(e) => setData("sort_order", parseInt(e.target.value) || 0)}
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
                            {processing ? "Updating..." : "Update Card"}
                        </button>
                    </div>

                </form>
            </div>
        </AuthenticatedLayout>
    );
}
