import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ partner }) {
    const { data, setData, post, processing, errors } = useForm({
        logo: null,
        is_active: partner.is_active,
        _method: "put",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/admin/partner/${partner.id}`, { forceFormData: true });
    };

    return (
        <AuthenticatedLayout header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Partner</h2>}>
            <Head title="Edit Partner" />
            <div className="max-w-md mx-auto px-4 py-10">
                <h1 className="text-2xl font-bold text-[#1A3A5C] mb-6">Edit Partner Logo</h1>
                {partner.logo && (
                    <div className="mb-6 p-4 border border-gray-200 rounded-lg text-center">
                        <p className="text-xs text-gray-500 mb-2">Current Logo</p>
                        <img src={`/storage/${partner.logo}`} alt="Partner Logo" className="h-24 object-contain mx-auto" />
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Replace Logo</label>
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
                        {processing ? "Saving..." : "Update Partner"}
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}