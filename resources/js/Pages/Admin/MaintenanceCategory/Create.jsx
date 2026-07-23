import { Head, useForm, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BackToDashboard from "@/Components/BackToDashboard";
import { ArrowLeft, Save } from "lucide-react";

export default function Create() {
    const { data, setData, post, processing, errors, progress } = useForm({
        title: "",
        image: null,
        points: "",
        sort_order: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/maintenance-categories", { forceFormData: true });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Add Maintenance Category" />
            <div className="max-w-2xl mx-auto px-4 py-10">
                <BackToDashboard />
                <div className="flex items-center gap-3 mb-8">
                    <Link
                        href="/admin/maintenance-categories"
                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition"
                    >
                        <ArrowLeft className="w-4 h-4 text-gray-600" />
                    </Link>
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Add Maintenance Category</h1>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-8 space-y-5">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                            placeholder="e.g. HVAC Maintenance"
                        />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>

                    {/* Bullet Points */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Bullet Points
                        </label>
                        <textarea
                            rows={6}
                            value={data.points}
                            onChange={(e) => setData("points", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C] resize-none"
                            placeholder={"One item per line, e.g.\nAir conditioner servicing\nVRV/VRF maintenance\nDuct cleaning"}
                        />
                        <p className="text-xs text-gray-500 mt-1">One bullet point per line.</p>
                        {errors.points && <p className="text-red-500 text-xs mt-1">{errors.points}</p>}
                    </div>

                    {/* Sort Order */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
                        <input
                            type="number"
                            value={data.sort_order}
                            onChange={(e) => setData("sort_order", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Lower numbers appear first (1, 2, 3, 4).
                        </p>
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setData("image", e.target.files[0])}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm"
                        />
                        {progress && (
                            <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                    className="bg-[#1A3A5C] h-1.5 rounded-full transition-all"
                                    style={{ width: `${progress.percentage}%` }}
                                />
                            </div>
                        )}
                        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A] disabled:opacity-60 transition"
                        >
                            <Save className="w-4 h-4" />
                            {processing ? "Saving..." : "Save Maintenance Category"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}