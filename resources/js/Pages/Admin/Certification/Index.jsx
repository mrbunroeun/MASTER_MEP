import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ certifications }) {
    const handleDelete = (id) => {
        if (confirm("Delete this certification?")) {
            router.delete(route("admin.certification.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Manage Certifications" />

            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Business Certifications</h1>
                    <Link
                        href={route("admin.certification.create")}
                        className="px-4 py-2 bg-[#1A3A5C] text-white rounded-lg font-medium text-sm hover:bg-[#275587]"
                    >
                        + New Certification
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-left text-gray-500">
                            <tr>
                                <th className="p-4">Image</th>
                                <th className="p-4">Title</th>
                                <th className="p-4">Order</th>
                                <th className="p-4">Active</th>
                                <th className="p-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {certifications.map((c) => (
                                <tr key={c.id} className="border-t">
                                    <td className="p-4">
                                        <img
                                            src={`/storage/${c.image}`}
                                            alt={c.title}
                                            className="w-16 h-12 object-contain rounded bg-gray-50"
                                        />
                                    </td>
                                    <td className="p-4 font-medium text-[#1A3A5C]">{c.title || "—"}</td>
                                    <td className="p-4">{c.order}</td>
                                    <td className="p-4">
                                        {c.is_active ? (
                                            <span className="text-green-600 font-medium">Yes</span>
                                        ) : (
                                            <span className="text-gray-400">No</span>
                                        )}
                                    </td>
                                    <td className="p-4 text-right space-x-3">
                                        <Link
                                            href={route("admin.certification.edit", c.id)}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(c.id)}
                                            className="text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}