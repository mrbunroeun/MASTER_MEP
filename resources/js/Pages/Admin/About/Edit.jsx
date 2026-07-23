import { Head, useForm, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ArrowLeft, Save } from "lucide-react";

// Accepts both `youtube.com/watch?v=ID` and `youtu.be/ID` (also supports
// /embed/, /shorts/, /v/, /live/ paths) and returns the 11-char video ID,
// or null if the URL doesn't look like YouTube.
function extractYouTubeId(url) {
    if (!url) return null;
    try {
        const u = new URL(url.startsWith("http") ? url : `https://${url}`);
        const host = u.hostname.replace(/^www\./, "");
        if (host === "youtu.be") {
            return u.pathname.slice(1).split("/")[0] || null;
        }
        if (/(^|\.)youtube\.com$/.test(host)) {
            if (u.pathname === "/watch") return u.searchParams.get("v") || null;
            const m = u.pathname.match(/^\/(embed|shorts|v|live)\/([\w-]{11})/);
            if (m) return m[2];
        }
    } catch (_) { /* fallthrough */ }
    return null;
}

export default function Edit({ auth, about }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: "put",
        title: about.title || "",
        description: about.description || "",
        video_url: about.video_url || "",
        is_active: !!about.is_active,
    });

    const ytId = extractYouTubeId(data.video_url);
    const ytError =
        data.video_url && !ytId ? "Please enter a valid YouTube URL." : "";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (ytError) return;
        post(`/admin/about/${about.id}`);
    };

    const currentVideoId = extractYouTubeId(about.video_url);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit About" />
            <div className="max-w-2xl mx-auto px-4 py-10">
                <div className="flex items-center gap-3 mb-8">
                    <Link
                        href="/admin/about"
                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition"
                    >
                        <ArrowLeft className="w-4 h-4 text-gray-600" />
                    </Link>
                    <h1 className="text-2xl font-bold text-[#1A3A5C]">
                        Edit About Section
                    </h1>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow p-8 space-y-5"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Title *
                        </label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                        />
                        {errors.title && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description *
                        </label>
                        <textarea
                            rows={5}
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C] resize-none"
                        />
                        {errors.description && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.description}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            YouTube Video URL
                        </label>
                        {currentVideoId && (
                            <div className="mb-2">
                                <p className="text-xs text-gray-500 mb-1">
                                    Current video:
                                </p>
                                <div className="w-full sm:w-72 aspect-video rounded-lg overflow-hidden border border-gray-200 bg-black">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${currentVideoId}`}
                                        title="Current YouTube video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                        )}
                        <input
                            type="url"
                            value={data.video_url}
                            onChange={(e) =>
                                setData("video_url", e.target.value)
                            }
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]"
                            placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Paste a YouTube link (e.g. https://youtu.be/...).
                            The video will be embedded on the About page.
                        </p>
                        {ytError && (
                            <p className="text-red-500 text-xs mt-1">
                                {ytError}
                            </p>
                        )}
                        {errors.video_url && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.video_url}
                            </p>
                        )}
                        {ytId && (
                            <p className="text-xs text-green-700 mt-1">
                                ✓ Detected video ID: {ytId}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="is_active"
                            checked={data.is_active}
                            onChange={(e) =>
                                setData("is_active", e.target.checked)
                            }
                            className="w-4 h-4 accent-[#1A3A5C]"
                        />
                        <label
                            htmlFor="is_active"
                            className="text-sm text-gray-700"
                        >
                            Active (visible on website)
                        </label>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={processing || !!ytError}
                            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#1A3A5C] text-white rounded-lg text-sm font-medium hover:bg-[#2E5C8A] disabled:opacity-60 transition"
                        >
                            <Save className="w-4 h-4" />
                            {processing ? "Updating..." : "Update About"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
