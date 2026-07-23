import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BackToDashboard from "@/Components/BackToDashboard";

const PlaceholderIcon = () => (
    <svg
        className="w-6 h-6 text-[#1A3A5C]/25"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.5M3 16.5l4.5-4.5a1.5 1.5 0 0 1 2.12 0l2.38 2.38m0 0 3-3a1.5 1.5 0 0 1 2.12 0L21 16.5M3 16.5V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.5M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
        />
    </svg>
);

export default function Index({ items }) {
    const handleDelete = (id) => {
        if (confirm("Delete this insight?")) {
            router.delete(`/admin/insights/${id}`);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Admin - Insights" />

            <div className="max-w-4xl mx-auto px-4 py-10">
                <BackToDashboard />

                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-[#1A3A5C]">Insights</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Controls the Insights articles shown on the website.
                        </p>
                    </div>
                    <Link
                        href="/admin/insights/create"
                        className="px-5 py-2.5 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A] transition"
                    >
                        + Add New
                    </Link>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="space-y-3">
                        {items.length === 0 && (
                            <p className="text-gray-500 text-sm">No insights yet.</p>
                        )}
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border border-gray-200 rounded-lg p-4"
                            >
                                <div className="flex items-center gap-4 min-w-0">
                                    {item.image ? (
                                        <img
                                            src={`/storage/${item.image}`}
                                            alt={item.title}
                                            className="w-20 h-14 object-cover rounded-lg shrink-0"
                                        />
                                    ) : (
                                        <div className="w-20 h-14 shrink-0 rounded-lg bg-gradient-to-br from-[#1A3A5C]/5 to-[#2E5C8A]/10 flex items-center justify-center">
                                            <PlaceholderIcon />
                                        </div>
                                    )}
                                    <div className="min-w-0">
                                        <h2 className="font-bold text-[#1A3A5C] truncate">{item.title}</h2>
                                        <p className="text-xs text-gray-500">
                                            {item.category} {item.published_date ? `· ${item.published_date}` : ""}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2 shrink-0">
                                    <Link
                                        href={`/admin/insights/${item.id}/edit`}
                                        className="px-3 py-1.5 text-sm rounded-lg border border-[#1A3A5C] text-[#1A3A5C] hover:bg-[#1A3A5C]/5 transition"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="px-3 py-1.5 text-sm rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}