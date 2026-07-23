import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BackToDashboard from "@/Components/BackToDashboard";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        subtitle: "",
        description: "",
        points: "",
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post("/admin/maintenance-contracts", { forceFormData: true });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Add Maintenance Contract" />
            <div className="max-w-2xl mx-auto px-4 py-10">
                <BackToDashboard />
                <h1 className="text-2xl font-bold text-[#1A3A5C] mb-6">Add Maintenance Contract</h1>

                <form onSubmit={submit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Subtitle</label>
                        <input
                            type="text"
                            value={data.subtitle}
                            onChange={(e) => setData("subtitle", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            rows={3}
                            value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Points (one per line)
                        </label>
                        <textarea
                            rows={4}
                            value={data.points}
                            onChange={(e) => setData("points", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setData("image", e.target.files[0])}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="px-5 py-2.5 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A]"
                    >
                        Save
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}