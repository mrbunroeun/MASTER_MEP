import { Head, Link, router } from "@inertiajs/react";
import MepLayout from "@/Layouts/MepLayout";

export default function Index({ keyHighlights }) {
    const handleDelete = (id) => {
        if (confirm("Delete this key highlight?")) {
            router.delete(`/admin/key-highlight/${id}`);
        }
    };
    return (
        <MepLayout>
            <Head title="Admin - Key Highlights" />
            <div className="max-w-5xl mx-auto px-4 py-10">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Key Highlights</h1>
                    <Link href="/admin/key-highlight/create" className="px-4 py-2 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A]">+ Add Highlight</Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {keyHighlights.length === 0 && <p className="text-gray-500 text-sm col-span-4">No key highlights yet.</p>}
                    {keyHighlights.map((kh) => (
                        <div key={kh.id} className="border border-gray-200 rounded-xl p-4 text-center">
                            <p className="text-3xl font-bold text-orange-500">{kh.number}</p>
                            <p className="text-sm font-medium text-[#1A3A5C] mt-1">{kh.title}</p>
                            <span className={`text-xs mt-2 inline-block px-2 py-0.5 rounded-full ${kh.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-500'}`}>
                                {kh.is_active ? 'Active' : 'Inactive'}
                            </span>
                            <div className="flex gap-2 justify-center mt-3">
                                <Link href={`/admin/key-highlight/${kh.id}/edit`} className="px-3 py-1 text-xs rounded-lg border border-[#1A3A5C] text-[#1A3A5C] hover:bg-[#1A3A5C]/5">Edit</Link>
                                <button onClick={() => handleDelete(kh.id)} className="px-3 py-1 text-xs rounded-lg border border-red-500 text-red-500 hover:bg-red-50">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MepLayout>
    );
}