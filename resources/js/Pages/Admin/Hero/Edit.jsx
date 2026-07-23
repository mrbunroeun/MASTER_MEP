import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const PAGE_OPTIONS = [
  { label: "Home", value: "/" },
  { label: "About Us", value: "/about" },
  { label: "All Services", value: "/services" },
  { label: "Mechanical & HVAC Services", value: "/services/mechanical" },
  { label: "Electrical & ELV Services", value: "/services/electrical" },
  { label: "Plumbing Services", value: "/services/plumbing" },
  { label: "Projects", value: "/projects" },
  { label: "Insights", value: "/insights" },
  { label: "Maintenance", value: "/maintenance" },
  { label: "Contact Us", value: "/contact" },
];

export default function Edit({ auth, hero }) {
  // Note: link_url here just stores which page this hero is assigned to —
  // it's an identifier, not a clickable link or button.
  const { data, setData, post, processing, errors } = useForm({
    _method:     "put",
    title:       hero.title       || "",
    description: hero.description || "",
    image:       null,
    link_url:    hero.link_url    || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(`/admin/hero/${hero.id}`, { forceFormData: true });
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Edit Hero" />
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#1A3A5C]">Edit Hero Section</h1>
          <Link href="/admin/hero" className="text-sm text-gray-600 hover:text-[#1A3A5C]">
            ← Back to list
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
            {hero.image && (
              <img src={`/storage/${hero.image}`} alt={hero.title}
                className="w-40 h-24 object-cover rounded-lg mb-2 border border-gray-200" />
            )}
            <input type="file" accept="image/*"
              onChange={(e) => setData("image", e.target.files[0])}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm" />
            <p className="text-xs text-gray-400 mt-1">Leave blank to keep the current image.</p>
            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Page *</label>
            <select value={data.link_url}
              onChange={(e) => setData("link_url", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C] bg-white">
              <option value="" disabled>Select a page...</option>
              {PAGE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <p className="text-xs text-gray-400 mt-1">
              Identifies which page this hero belongs to. This is not a link or button.
            </p>
            {errors.link_url && <p className="text-red-500 text-xs mt-1">{errors.link_url}</p>}
          </div>

          <button type="submit" disabled={processing}
            className="px-6 py-2.5 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A] transition-colors disabled:opacity-60">
            {processing ? "Saving..." : "Update Hero"}
          </button>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}