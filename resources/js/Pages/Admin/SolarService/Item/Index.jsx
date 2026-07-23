import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BackToDashboard from "@/Components/BackToDashboard";

function TabBar({ active }) {
    const base = "px-3 py-1.5 rounded-lg text-sm";
    const tabs = [
        { key: "overview", label: "Overview", href: "/admin/solar-service/overview" },
        { key: "item",     label: "Service Items", href: "/admin/solar-service/item" },
        { key: "benefit",  label: "Benefits", href: "/admin/solar-service/benefit" },
    ];
    return (
        <div className="mb-6 flex flex-wrap gap-3 text-sm">
            {tabs.map((t) => (
                <Link
                    key={t.key}
                    href={t.href}
                    className={`${base} ${active === t.key ? "bg-[#1A3A5C] text-white" : "border border-gray-300 hover:bg-gray-50"}`}
                >
                    {t.label}
                </Link>
            ))}
        </div>
    );
}

export default function Index({ items }) {
    const handleDelete = (id, title) => {
        if (confirm(`Delete "${title}"? This cannot be undone.`)) {
            router.delete(`/admin/solar-service/item/${id}`);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Solar Service — Items" />
            <div className="max-w-5xl mx-auto px-4 py-10">
                <BackToDashboard />
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Solar Service — Items</h1>
                    <Link
                        href="/admin/solar-service/item/create"
                        className="px-4 py-2 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A]"
                    >
                        + Add Item
                    </Link>
                </div>

                <TabBar active="item" />

                {items.length === 0 ? (
                    <p className="text-gray-500 text-sm">No solar service items yet.</p>
                ) : (
                    <div className="space-y-3">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 bg-white"
                            >
                                <div className="w-20 h-20 rounded-[10px] overflow-hidden bg-gray-100 flex-shrink-0">
                                    {item.image ? (
                                        <img
                                            src={`/storage/${item.image}`}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                                            No image
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-[#1A3A5C] truncate">{item.title}</p>
                                    <p className="text-xs text-gray-500">
                                        Order: {item.order} ·{" "}
                                        <span className={item.is_active ? "text-green-600" : "text-red-500"}>
                                            {item.is_active ? "Active" : "Inactive"}
                                        </span>
                                    </p>
                                </div>

                                <div className="flex gap-2 flex-shrink-0">
                                    <Link
                                        href={`/admin/solar-service/item/${item.id}/edit`}
                                        className="px-3 py-1.5 text-sm bg-gray-100 rounded-lg hover:bg-gray-200"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(item.id, item.title)}
                                        className="px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
