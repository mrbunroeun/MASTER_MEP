import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BackToDashboard from "@/Components/BackToDashboard";

export default function Index({ items }) {
    const handleDelete = (id) => {
        if (confirm("Delete this maintenance feature?")) {
            router.delete(`/admin/maintenance/${id}`);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Admin - Maintenance Features" />
            <div className="max-w-5xl mx-auto px-4 py-10">
                <BackToDashboard />
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Maintenance Features</h1>
                    <Link href="/admin/maintenance/create"
                        className="px-4 py-2 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A]">
                        + Add New
                    </Link>
                </div>
                <div className="space-y-4">
                    {items.length === 0 && <p className="text-gray-500 text-sm">No maintenance features yet.</p>}
                    {items.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row gap-4 items-start border border-gray-200 rounded-xl p-4">
                            {item.image && (
                                <img src={`/storage/${item.image}`} alt={item.title}
                                    className="w-full sm:w-40 h-28 object-cover rounded-lg" />
                            )}
                            <div className="flex-1">
                                <h2 className="font-bold text-[#1A3A5C]">{item.title}</h2>
                                {item.scope && <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.scope}</p>}
                                <div className="flex gap-3 mt-1 text-xs text-gray-500">
                                    {item.location && <span>Location: {item.location}</span>}
                                    {item.timeline && <span>Timeline: {item.timeline}</span>}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Link href={`/admin/maintenance/${item.id}/edit`}
                                    className="px-3 py-1.5 text-sm rounded-lg border border-[#1A3A5C] text-[#1A3A5C] hover:bg-[#1A3A5C]/5">
                                    Edit
                                </Link>
                                <button onClick={() => handleDelete(item.id)}
                                    className="px-3 py-1.5 text-sm rounded-lg border border-red-500 text-red-500 hover:bg-red-50">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}