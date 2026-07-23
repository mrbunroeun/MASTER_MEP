import { Head, Link, useForm } from "@inertiajs/react";
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

export default function Overview({ overview }) {
    const { data, setData, put, processing, errors } = useForm({
        title:       overview?.title || "",
        subtitle:    overview?.subtitle || "",
        description: overview?.description || "",
    });

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/solar-service/overview/${overview.id}`);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Solar Service — Overview" />
            <div className="max-w-3xl mx-auto px-4 py-10">
                <BackToDashboard />
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">Solar Service — Overview</h1>
                </div>

                <TabBar active="overview" />

                <form onSubmit={submit} className="space-y-5 bg-white border border-gray-200 rounded-xl p-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                        />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                        <input
                            type="text"
                            value={data.subtitle}
                            onChange={(e) => setData("subtitle", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                        />
                        {errors.subtitle && <p className="text-red-500 text-xs mt-1">{errors.subtitle}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            rows={6}
                            value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                        />
                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="px-6 py-2.5 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A] disabled:opacity-60"
                    >
                        {processing ? "Saving..." : "Save"}
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
