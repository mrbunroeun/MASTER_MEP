import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ activities }) {
    const handleDelete = (id) => {
        if (confirm("Delete this activity?")) {
            router.delete(route("admin.activity.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Manage Activities" />

            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Latest Activities</h1>
                    <Link
                        href={route("admin.activity.create")}
                        className="px-4 py-2 bg-[#1A3A5C] text-white rounded-lg font-medium text-sm hover:bg-[#275587]"
                    >
                        + New Activity
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-left text-gray-500">
                            <tr>
                                <th className="p-4">Image</th>
                                <th className="p-4">Title</th>
                                <th className="p-4">Category</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Active</th>
                                <th className="p-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {activities.map((a) => (
                                <tr key={a.id} className="border-t">
                                    <td className="p-4">
                                        {a.image ? (
                                            <img
                                                src={`/storage/${a.image}`}
                                                alt={a.title}
                                                className="w-16 h-12 object-cover rounded"
                                            />
                                        ) : (
                                            <span className="text-gray-400 text-xs">No image</span>
                                        )}
                                    </td>
                                    <td className="p-4 font-medium text-[#1A3A5C]">{a.title}</td>
                                    <td className="p-4">{a.category}</td>
                                    <td className="p-4">{a.activity_date}</td>
                                    <td className="p-4">
                                        {a.is_active ? (
                                            <span className="text-green-600 font-medium">Yes</span>
                                        ) : (
                                            <span className="text-gray-400">No</span>
                                        )}
                                    </td>
                                    <td className="p-4 text-right space-x-3">
                                        <Link
                                            href={route("admin.activity.edit", a.id)}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(a.id)}
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