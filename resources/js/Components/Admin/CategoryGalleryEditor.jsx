import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import { Save, X } from "lucide-react";

/* Embedded 5-slot gallery editor for whichever category is currently
   selected in a project form. Saves independently via its own PUT
   request to admin.category-gallery.update — separate from the
   project's own Save/Update button, so switching categories or
   saving the project won't wipe out gallery uploads. */
export default function CategoryGalleryEditor({ category, initialImages = [] }) {
    const [slotFiles, setSlotFiles] = useState([null, null, null, null, null]);
    const [currentImages, setCurrentImages] = useState(
        Array.from({ length: 5 }, (_, i) => initialImages[i] || null)
    );
    // bump this whenever we get fresh saved paths back, to cache-bust <img src>
    const [version, setVersion] = useState(Date.now());
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [errors, setErrors] = useState({});

    // Reset slot previews whenever the selected category changes
    useEffect(() => {
        setCurrentImages(Array.from({ length: 5 }, (_, i) => initialImages[i] || null));
        setSlotFiles([null, null, null, null, null]);
        setSaved(false);
        setVersion(Date.now());
    }, [category]); // eslint-disable-line react-hooks/exhaustive-deps

    // Also resync if the parent hands us new initialImages for the SAME
    // category (e.g. after an Inertia reload/props refresh post-save)
    useEffect(() => {
        setCurrentImages(Array.from({ length: 5 }, (_, i) => initialImages[i] || null));
        setVersion(Date.now());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(initialImages)]);

    const setSlotFile = (i, file) => {
        const updated = [...slotFiles];
        updated[i] = file;
        setSlotFiles(updated);
        if (file) {
            const updatedCurrent = [...currentImages];
            updatedCurrent[i] = URL.createObjectURL(file);
            setCurrentImages(updatedCurrent);
        }
        setSaved(false);
    };

    const removeSlot = (i) => {
        const updated = [...slotFiles];
        updated[i] = "REMOVE";
        setSlotFiles(updated);
        const updatedCurrent = [...currentImages];
        updatedCurrent[i] = null;
        setCurrentImages(updatedCurrent);
        setSaved(false);
    };

    const saveGallery = () => {
        setSaving(true);
        setErrors({});
        const formData = new FormData();
        formData.append("_method", "put");
        slotFiles.forEach((file, i) => {
            if (file === "REMOVE") {
                formData.append(`images[${i}]`, "REMOVE");
            } else if (file) {
                formData.append(`images[${i}]`, file);
            }
        });

        router.post(
            route("admin.category-gallery.update", category),
            formData,
            {
                forceFormData: true,
                preserveScroll: true,
                preserveState: true,
                // Pull fresh categoryGalleries prop back down after save so
                // currentImages reflects the real stored path, not just the
                // blob preview left over from before saving.
                only: ["categoryGalleries", "flash", "errors"],
                onSuccess: (page) => {
                    const fresh =
                        page?.props?.categoryGalleries?.[category] ?? null;
                    if (fresh) {
                        setCurrentImages(
                            Array.from({ length: 5 }, (_, i) => fresh[i] || null)
                        );
                    }
                    setVersion(Date.now());
                    setSaved(true);
                    setSlotFiles([null, null, null, null, null]);
                },
                onError: (err) => setErrors(err),
                onFinish: () => setSaving(false),
            }
        );
    };

    const resolveSrc = (img) => {
        if (!img) return null;
        if (img.startsWith("blob:")) return img; // blob previews are already unique, no cache-busting needed
        if (img.startsWith("http") || img.startsWith("/")) return `${img}?v=${version}`;
        return `/storage/${img}?v=${version}`;
    };

    return (
        <div className="border border-gray-200 rounded-xl p-4 bg-slate-50">
            <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-gray-700">
                    Gallery images for <span className="font-semibold">{category}</span>
                </p>
                {saved && <span className="text-xs text-green-600 font-medium">✓ Saved</span>}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="space-y-1.5">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-white border border-gray-200 flex items-center justify-center">
                            {currentImages[i] ? (
                                <>
                                    <img
                                        src={resolveSrc(currentImages[i])}
                                        alt={`${category} slot ${i + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeSlot(i)}
                                        className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center"
                                        aria-label="Remove image"
                                    >
                                        <X size={12} className="text-white" />
                                    </button>
                                </>
                            ) : (
                                <span className="text-xs text-gray-400">Slot {i + 1}</span>
                            )}
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setSlotFile(i, e.target.files[0] || null)}
                            className="w-full text-[11px]"
                        />
                        {errors[`images.${i}`] && (
                            <p className="text-red-500 text-[10px]">{errors[`images.${i}`]}</p>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-3">
                <button
                    type="button"
                    onClick={saveGallery}
                    disabled={saving}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A3A5C] text-white rounded-lg text-xs font-medium hover:bg-[#2E5C8A] disabled:opacity-60 transition"
                >
                    <Save className="w-3.5 h-3.5" />
                    {saving ? "Saving..." : "Save Gallery Images"}
                </button>
            </div>
        </div>
    );
}