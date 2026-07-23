import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BackToDashboard from "@/Components/BackToDashboard";

export default function Index({ services }) {
    const handleDelete = (id, title) => {
        if (confirm(`Delete "${title}"? This cannot be undone.`)) {
            router.delete(`/admin/service/${id}`);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Services" />
            <div className="max-w-5xl mx-auto px-4 py-10">
                <BackToDashboard />
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Services</h1>
                    <Link href="/admin/service/create"
                        className="px-4 py-2 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A]">
                        + Add Service
                    </Link>
                </div>

                {services.length === 0 ? (
                    <p className="text-gray-500 text-sm">No services yet.</p>
                ) : (
                    <div className="space-y-3">
                        {services.map((service) => (
                            <div key={service.id}
                                className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 bg-white">
                                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                    {service.image ? (
                                        <img src={`/storage/${service.image}`} alt={service.title}
                                            className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">No image</div>
                                    )}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-[#1A3A5C] truncate">{service.title}</p>
                                    <p className="text-xs text-gray-500">
                                        {service.type} · Order: {service.order} ·{" "}
                                        <span className={service.is_active ? "text-green-600" : "text-red-500"}>
                                            {service.is_active ? "Active" : "Inactive"}
                                        </span>
                                    </p>
                                </div>

                                <div className="flex gap-2 flex-shrink-0">
                                    <Link href={`/admin/service/${service.id}/edit`}
                                        className="px-3 py-1.5 text-sm bg-gray-100 rounded-lg hover:bg-gray-200">
                                        Edit
                                    </Link>
                                    <button onClick={() => handleDelete(service.id, service.title)}
                                        className="px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
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