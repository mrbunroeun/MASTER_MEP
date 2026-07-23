import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({ partners }) {
    const handleDelete = (id) => {
        if (confirm("Delete this partner?")) {
            router.delete(`/admin/partner/${id}`);
        }
    };

    return (
        <AuthenticatedLayout header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Partners</h2>}>
            <Head title="Admin - Partners" />
            <div className="max-w-5xl mx-auto px-4 py-10">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Partners</h1>
                    <Link href="/admin/partner/create" className="px-4 py-2 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A]">
                        + Add Partner
                    </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {partners.length === 0 && (
                        <p className="text-gray-500 text-sm col-span-4">No partners yet.</p>
                    )}
                    {partners.map((partner) => (
                        <div key={partner.id} className="border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-3">
                            {partner.logo
                                ? <img src={`/storage/${partner.logo}`} alt="Partner" className="h-16 w-full object-contain" />
                                : <div className="h-16 w-full bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs">No Logo</div>
                            }
                            <span className={`text-xs px-2 py-0.5 rounded-full ${partner.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-500'}`}>
                                {partner.is_active ? 'Active' : 'Inactive'}
                            </span>
                            <div className="flex gap-2">
                                <Link href={`/admin/partner/${partner.id}/edit`} className="px-3 py-1 text-xs rounded-lg border border-[#1A3A5C] text-[#1A3A5C] hover:bg-[#1A3A5C]/5">Edit</Link>
                                <button onClick={() => handleDelete(partner.id)} className="px-3 py-1 text-xs rounded-lg border border-red-500 text-red-500 hover:bg-red-50">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}