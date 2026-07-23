import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name:      "",
        position:  "",
        image:     null,
        order:     0,
        is_active: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/team-member", { forceFormData: true });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Add Team Member" />
            <div className="max-w-2xl mx-auto px-4 py-10">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Add Team Member</h1>
                    <Link href="/admin/team-member" className="text-sm text-gray-600 hover:text-[#1A3A5C]">← Back</Link>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input type="text" value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            placeholder="e.g. Mr. Len Somoun"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Position / Role</label>
                        <input type="text" value={data.position}
                            onChange={(e) => setData("position", e.target.value)}
                            placeholder="e.g. Founder / CEO"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
                        <input type="file" accept="image/*"
                            onChange={(e) => setData("image", e.target.files[0])}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm" />
                        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                            <input type="number" value={data.order}
                                onChange={(e) => setData("order", e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]" />
                        </div>
                        <div className="flex items-center mt-6 gap-2">
                            <input type="checkbox" id="is_active" checked={data.is_active}
                                onChange={(e) => setData("is_active", e.target.checked)} className="w-4 h-4" />
                            <label htmlFor="is_active" className="text-sm font-medium text-gray-700">Active</label>
                        </div>
                    </div>

                    <button type="submit" disabled={processing}
                        className="px-6 py-2.5 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A] disabled:opacity-60">
                        {processing ? "Saving..." : "Create Member"}
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}