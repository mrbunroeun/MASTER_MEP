import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        logo: null,
        is_active: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/partner", { forceFormData: true });
    };

    return (
        <AuthenticatedLayout header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Partner</h2>}>
            <Head title="Add Partner" />
            <div className="max-w-md mx-auto px-4 py-10">
                <h1 className="text-2xl font-bold text-[#1A3A5C] mb-6">Add Partner Logo</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Logo *</label>
                        <input type="file" accept="image/*" onChange={(e) => setData("logo", e.target.files[0])}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm" />
                        {errors.logo && <p className="text-red-500 text-xs mt-1">{errors.logo}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" checked={data.is_active} onChange={(e) => setData("is_active", e.target.checked)} id="is_active" />
                        <label htmlFor="is_active" className="text-sm text-gray-700">Active</label>
                    </div>
                    <button type="submit" disabled={processing}
                        className="px-6 py-2.5 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A] disabled:opacity-60">
                        {processing ? "Saving..." : "Save Partner"}
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}