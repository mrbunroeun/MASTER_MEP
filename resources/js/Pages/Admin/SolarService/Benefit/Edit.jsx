import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BackToDashboard from "@/Components/BackToDashboard";

export default function Edit({ benefit, items = [] }) {
    const { data, setData, put, processing, errors } = useForm({
        item_id:   benefit.item_id ?? "",
        title:     benefit.title || "",
        order:     benefit.order ?? 0,
        is_active: !!benefit.is_active,
    });

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/solar-service/benefit/${benefit.id}`);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Solar Benefit" />
            <div className="max-w-2xl mx-auto px-4 py-10">
                <BackToDashboard />
                <h1 className="text-2xl font-bold text-[#1A3A5C] mb-6">Edit Solar Benefit</h1>

                <form onSubmit={submit} className="space-y-4 bg-white border border-gray-200 rounded-xl p-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Solar Service Item *</label>
                        <select
                            value={data.item_id}
                            onChange={(e) => setData("item_id", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                        >
                            <option value="">— Select an item —</option>
                            {items.map((it) => (
                                <option key={it.id} value={it.id}>{it.title}</option>
                            ))}
                        </select>
                        {errors.item_id && <p className="text-red-500 text-xs mt-1">{errors.item_id}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Benefit *</label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                        />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
                        <input
                            type="number"
                            value={data.order}
                            onChange={(e) => setData("order", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="is_active"
                            checked={data.is_active}
                            onChange={(e) => setData("is_active", e.target.checked)}
                            className="w-4 h-4"
                        />
                        <label htmlFor="is_active" className="text-sm text-gray-700">Active</label>
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="px-6 py-2.5 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A] disabled:opacity-60"
                    >
                        {processing ? "Saving..." : "Update Benefit"}
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
