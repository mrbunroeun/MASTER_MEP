import { Head, useForm } from "@inertiajs/react";
import MepLayout from "@/Layouts/MepLayout";

export default function Edit({ keyHighlight }) {
    const { data, setData, put, processing, errors } = useForm({
        number: keyHighlight.number, title: keyHighlight.title,
        type: keyHighlight.type, order: keyHighlight.order, is_active: keyHighlight.is_active,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/admin/key-highlight/${keyHighlight.id}`);
    };
    return (
        <MepLayout>
            <Head title="Edit Key Highlight" />
            <div className="max-w-2xl mx-auto px-4 py-10">
                <h1 className="text-2xl font-bold text-[#1A3A5C] mb-6">Edit Key Highlight</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Number *</label>
                        <input type="text" value={data.number} onChange={(e) => setData("number", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]" />
                        {errors.number && <p className="text-red-500 text-xs mt-1">{errors.number}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                        <input type="text" value={data.title} onChange={(e) => setData("title", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]" />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
                        <select value={data.type} onChange={(e) => setData("type", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C] bg-white">
                            <option value="general">General</option>
                            <option value="mechanical">Mechanical</option>
                            <option value="electrical">Electrical</option>
                            <option value="plumbing">Plumbing</option>
                            <option value="hvac">HVAC</option>
                            <option value="maintenance">Maintenance</option>
                        </select>
                        {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                        <input type="number" value={data.order} onChange={(e) => setData("order", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]" />
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" checked={data.is_active} onChange={(e) => setData("is_active", e.target.checked)} id="is_active" />
                        <label htmlFor="is_active" className="text-sm text-gray-700">Active</label>
                    </div>
                    <button type="submit" disabled={processing}
                        className="px-6 py-2.5 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A] disabled:opacity-60">
                        {processing ? "Saving..." : "Update"}
                    </button>
                </form>
            </div>
        </MepLayout>
    );
}