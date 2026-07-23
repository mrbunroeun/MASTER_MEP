import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({ members = [] }) {
    const handleDelete = (id) => {
        if (confirm("Delete this member?")) router.delete(`/admin/team-member/${id}`);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Team Members" />
            <div className="max-w-5xl mx-auto px-4 py-10">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Team Members</h1>
                    <Link href="/admin/team-member/create"
                        className="px-4 py-2 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A]">
                        + Add Member
                    </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {members.length === 0 && (
                        <p className="text-gray-500 text-sm col-span-4">No members yet.</p>
                    )}
                    {members.map((m) => (
                        <div key={m.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 mb-3">
                                {m.image
                                    ? <img src={`/storage/${m.image}`} alt={m.name} className="w-full h-full object-cover object-top" />
                                    : <div className="w-full h-full bg-gradient-to-br from-[#1A3A5C] to-[#2E5C8A] flex items-center justify-center text-white text-2xl font-bold">
                                        {m.name.charAt(0)}
                                      </div>
                                }
                            </div>
                            <h3 className="font-bold text-sm text-[#1A3A5C]">{m.name}</h3>
                            <p className="text-xs text-gray-500 mt-0.5">{m.position}</p>
                            <span className={`text-xs mt-2 px-2 py-0.5 rounded-full ${m.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                {m.is_active ? 'Active' : 'Inactive'}
                            </span>
                            <div className="flex gap-2 mt-3 w-full">
                                <Link href={`/admin/team-member/${m.id}/edit`}
                                    className="flex-1 text-center px-2 py-1.5 text-xs rounded-lg border border-[#1A3A5C] text-[#1A3A5C] hover:bg-[#1A3A5C]/5">
                                    Edit
                                </Link>
                                <button onClick={() => handleDelete(m.id)}
                                    className="flex-1 px-2 py-1.5 text-xs rounded-lg border border-red-400 text-red-500 hover:bg-red-50">
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