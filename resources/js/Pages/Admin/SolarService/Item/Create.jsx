import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BackToDashboard from "@/Components/BackToDashboard";

const PRESET_COLORS = [
    { name: "Blue",   hex: "#EAF3FC" },
    { name: "Green",  hex: "#E8F5E9" },
    { name: "Orange", hex: "#FFF3E0" },
];

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title:        "",
        best_for:     "",
        how_it_works: "",
        card_color:   "",
        image_side:   "left",
        order:        0,
        is_active:    true,
    });

    const submit = (e) => {
        e.preventDefault();
        post("/admin/solar-service/item", { forceFormData: true });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Add Solar Service Item" />
            <div className="max-w-3xl mx-auto px-4 py-10">
                <BackToDashboard />
                <h1 className="text-2xl font-bold text-[#1A3A5C] mb-6">Add Solar Service Item</h1>

                <form onSubmit={submit} encType="multipart/form-data" className="space-y-5 bg-white border border-gray-200 rounded-xl p-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                            placeholder="e.g. On-Grid Solar System (No Battery)"
                        />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Best For</label>
                        <textarea
                            rows={3}
                            value={data.best_for}
                            onChange={(e) => setData("best_for", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                            placeholder="Homes, offices, commercial buildings..."
                        />
                        {errors.best_for && <p className="text-red-500 text-xs mt-1">{errors.best_for}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">How It Works</label>
                        <textarea
                            rows={4}
                            value={data.how_it_works}
                            onChange={(e) => setData("how_it_works", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                            placeholder="An On-Grid Solar System generates electricity during the day..."
                        />
                        {errors.how_it_works && <p className="text-red-500 text-xs mt-1">{errors.how_it_works}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image (592×549 recommended)</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setData("image", e.target.files[0])}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                        />
                        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Card Background Color</label>
                        <div className="flex items-center gap-3 flex-wrap">
                            {PRESET_COLORS.map((c) => {
                                const isActive = (data.card_color || "").toUpperCase() === c.hex;
                                return (
                                    <button
                                        key={c.hex}
                                        type="button"
                                        onClick={() => setData("card_color", c.hex)}
                                        className={`w-9 h-9 rounded-full border-2 ${isActive ? "border-[#1A3A5C] ring-2 ring-offset-1 ring-[#1A3A5C]" : "border-gray-200"}`}
                                        style={{ background: c.hex }}
                                        aria-label={c.name}
                                        title={c.name}
                                    />
                                );
                            })}
                            <input
                                type="color"
                                value={(data.card_color || "#FFFFFF").slice(0, 7)}
                                onChange={(e) => setData("card_color", e.target.value.toUpperCase())}
                                className="w-9 h-9 rounded-full border border-gray-200 cursor-pointer"
                                title="Custom color"
                            />
                            <input
                                type="text"
                                value={data.card_color || ""}
                                onChange={(e) => setData("card_color", e.target.value)}
                                placeholder="#EAF3FC"
                                maxLength={7}
                                className="w-28 border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                            />
                            <button
                                type="button"
                                onClick={() => setData("card_color", "")}
                                className="text-xs text-gray-500 hover:text-[#1A3A5C] underline"
                            >Clear</button>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Hex color for the item's background band (e.g. #EAF3FC).</p>
                        {errors.card_color && <p className="text-red-500 text-xs mt-1">{errors.card_color}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image Position</label>
                        <select
                            value={data.image_side || "left"}
                            onChange={(e) => setData("image_side", e.target.value)}
                            className="w-full sm:w-48 border border-gray-300 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                        >
                            <option value="left">Image Left</option>
                            <option value="right">Image Right</option>
                        </select>
                        <p className="text-xs text-gray-400 mt-1">Which side the photo appears on for this item.</p>
                        {errors.image_side && <p className="text-red-500 text-xs mt-1">{errors.image_side}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
                            <input
                                type="number"
                                value={data.order}
                                onChange={(e) => setData("order", e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                            />
                        </div>
                        <div className="flex items-center mt-6">
                            <input
                                type="checkbox"
                                id="is_active"
                                checked={data.is_active}
                                onChange={(e) => setData("is_active", e.target.checked)}
                                className="w-4 h-4 mr-2"
                            />
                            <label htmlFor="is_active" className="text-sm font-medium text-gray-700">Active</label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="px-6 py-2.5 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A] disabled:opacity-60"
                    >
                        {processing ? "Saving..." : "Create Item"}
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
