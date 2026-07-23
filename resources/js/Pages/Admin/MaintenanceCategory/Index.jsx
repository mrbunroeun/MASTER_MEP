import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BackToDashboard from "@/Components/BackToDashboard";

export default function Index({ items }) {
    const handleDelete = (id) => {
        if (confirm("Delete this maintenance category?")) {
            router.delete(`/admin/maintenance-categories/${id}`);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Admin - Maintenance Categories" />
            <div className="max-w-5xl mx-auto px-4 py-10">
                <BackToDashboard />
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Maintenance Categories</h1>
                    <Link
                        href="/admin/maintenance-categories/create"
                        className="px-4 py-2 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A]"
                    >
                        + Add New
                    </Link>
                </div>
                <div className="space-y-4">
                    {items.length === 0 && (
                        <p className="text-gray-500 text-sm">No maintenance categories yet.</p>
                    )}
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row gap-4 items-start border border-gray-200 rounded-xl p-4"
                        >
                            {item.image && (
                                <img
                                    src={`/storage/${item.image}`}
                                    alt={item.title}
                                    className="w-full sm:w-32 h-32 object-cover rounded-lg"
                                />
                            )}
                            <div className="flex-1">
                                <h2 className="font-bold text-[#1A3A5C]">{item.title}</h2>
                                {item.points && (
                                    <ul className="text-sm text-gray-600 mt-1 space-y-0.5">
                                        {item.points
                                            .split("\n")
                                            .filter(Boolean)
                                            .map((p, i) => (
                                                <li key={i}>• {p}</li>
                                            ))}
                                    </ul>
                                )}
                                <p className="text-xs text-gray-400 mt-1">
                                    Sort order: {item.sort_order}
                                </p>
                            </div>
                            <div className="flex gap-2 shrink-0">
                                <Link
                                    href={`/admin/maintenance-categories/${item.id}/edit`}
                                    className="px-3 py-1.5 text-sm rounded-lg border border-[#1A3A5C] text-[#1A3A5C] hover:bg-[#1A3A5C]/5"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="px-3 py-1.5 text-sm rounded-lg border border-red-500 text-red-500 hover:bg-red-50"
                                >
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