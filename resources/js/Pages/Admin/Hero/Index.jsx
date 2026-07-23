import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({ auth, heroes }) {
  const { delete: destroy, processing } = useForm();

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this hero?")) {
      destroy(`/admin/hero/${id}`);
    }
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Manage Hero Section" />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#1A3A5C]">Hero Sections</h1>
          <Link href="/admin/hero/create"
            className="px-4 py-2 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A] transition-colors">
            + Add New
          </Link>
        </div>

        {heroes.length === 0 ? (
          <p className="text-gray-500 text-sm">No hero sections found.</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {heroes.map((hero) => (
                  <tr key={hero.id} className="border-t">
                    <td className="px-4 py-3">
                      {hero.image ? (
                        <img src={`/storage/${hero.image}`} alt={hero.title}
                          className="w-20 h-12 object-cover rounded" />
                      ) : (
                        <span className="text-gray-400 text-xs">No image</span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-medium">{hero.title}</td>
                    <td className="px-4 py-3 text-gray-600 max-w-xs truncate">{hero.description}</td>
                    <td className="px-4 py-3 text-right space-x-2 whitespace-nowrap">
                      <Link href={`/admin/hero/${hero.id}/edit`}
                        className="px-3 py-1.5 bg-[#1A3A5C] text-white rounded text-xs hover:bg-[#2E5C8A]">
                        Edit
                      </Link>
                      <button onClick={() => handleDelete(hero.id)} disabled={processing}
                        className="px-3 py-1.5 bg-red-600 text-white rounded text-xs hover:bg-red-700 disabled:opacity-60">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
}