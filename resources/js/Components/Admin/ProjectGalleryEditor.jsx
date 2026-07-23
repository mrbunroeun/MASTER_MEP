import { X } from "lucide-react";

/* Controlled 5-slot gallery editor for a SINGLE project.
   Unlike the old CategoryGalleryEditor, this does not save on its own —
   it just reports changes to the parent form's `gallery` field via
   onChange(index, value), so the images get submitted together with
   the rest of the project (title, category, etc.) in one request.

   `gallery[i]` can be:
     - null              -> empty slot
     - a File object      -> newly picked, not yet uploaded
     - a string           -> existing saved path (from the project)
     - "REMOVE"           -> user cleared this slot
*/
export default function ProjectGalleryEditor({ gallery = [null, null, null, null, null], onChange, errors = {} }) {
    const setSlot = (i, file) => onChange(i, file);
    const removeSlot = (i) => onChange(i, "REMOVE");

    const resolveSrc = (item) => {
        if (!item || item === "REMOVE") return null;
        if (item instanceof File) return URL.createObjectURL(item);
        if (item.startsWith("http") || item.startsWith("blob:") || item.startsWith("/")) return item;
        return `/storage/${item}`;
    };

    return (
        <div className="border border-gray-200 rounded-xl p-4 bg-slate-50">
            <p className="text-sm font-medium text-gray-700 mb-3">
                Project Gallery <span className="text-gray-400 font-normal">(up to 5 images, unique to this project)</span>
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {[0, 1, 2, 3, 4].map((i) => {
                    const src = resolveSrc(gallery[i]);
                    return (
                        <div key={i} className="space-y-1.5">
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-white border border-gray-200 flex items-center justify-center">
                                {src ? (
                                    <>
                                        <img
                                            src={src}
                                            alt={`gallery slot ${i + 1}`}
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
                                onChange={(e) => setSlot(i, e.target.files[0] || null)}
                                className="w-full text-[11px]"
                            />
                            {errors[`gallery.${i}`] && (
                                <p className="text-red-500 text-[10px]">{errors[`gallery.${i}`]}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}