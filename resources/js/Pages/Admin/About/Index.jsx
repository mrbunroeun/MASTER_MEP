import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({ auth, abouts }) {
    const handleDelete = (id) => {
        if (confirm("Delete this about section?")) {
            router.delete(`/admin/about/${id}`);
        }
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Admin - About" />
            <div className="max-w-5xl mx-auto px-4 py-10">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">About Sections</h1>
                    <Link href="/admin/about/create"
                        className="px-4 py-2 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A]">
                        + Add About
                    </Link>
                </div>
                <div className="space-y-4">
                    {abouts.length === 0 && <p className="text-gray-500 text-sm">No about sections yet.</p>}
                    {abouts.map((about) => (
                        <div key={about.id} className="flex flex-col sm:flex-row gap-4 items-start border border-gray-200 rounded-xl p-4">
                            {about.image && (
                                <img src={`/storage/${about.image}`} alt={about.title}
                                    className="w-full sm:w-40 h-28 object-cover rounded-lg" />
                            )}
                            <div className="flex-1">
                                <h2 className="font-bold text-[#1A3A5C]">{about.title}</h2>
                                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{about.description}</p>
                                <span className={`text-xs mt-1 inline-block px-2 py-0.5 rounded-full ${about.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-500'}`}>
                                    {about.is_active ? 'Active' : 'Inactive'}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <Link href={`/admin/about/${about.id}/edit`}
                                    className="px-3 py-1.5 text-sm rounded-lg border border-[#1A3A5C] text-[#1A3A5C] hover:bg-[#1A3A5C]/5">
                                    Edit
                                </Link>
                                <button onClick={() => handleDelete(about.id)}
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