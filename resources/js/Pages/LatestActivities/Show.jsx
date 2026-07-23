import MepLayout from "@/Layouts/MepLayout";
import { Head, Link } from "@inertiajs/react";
import DOMPurify from "dompurify";
import FadeIn from "@/Components/FadeIn";

export default function LatestActivityShow({ activity }) {
    const heroSecImage = "/HeroSection/heroSection.png";

    const bgImage = activity?.image || heroSecImage;

    const galleryImages =
        activity?.gallery_images && activity.gallery_images.length > 0
            ? activity.gallery_images
            : [];

    // Sanitize TipTap-saved rich text before injecting as HTML. The admin
    // editor (resources/js/Components/RichTextEditor.jsx) uses TipTap
    // StarterKit, which can still allow pasted <a href="javascript:...">,
    // <img onerror=...>, and other payloads that survive to this view.
    const safeHtml = DOMPurify.sanitize(
        activity?.content || activity?.excerpt || ""
    );

    return (
        <MepLayout>
            <Head title={`${activity.title} — Master MEP`} />

            {/* Hero */}
            <section
                className="relative min-h-[50vh] flex items-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundPosition: "center center"
                }}
            >
                <div className="absolute inset-0 bg-black/55" />
                <div className="relative z-10 px-6 max-w-3xl mx-auto w-full text-white text-center">
                    <FadeIn delay={0}>
                        <p className="text-xs tracking-widest uppercase opacity-70 mb-3">Latest Activity</p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{activity.title}</h1>
                        <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm opacity-90">
                            {activity.category && (
                                <span className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                                    {activity.category}
                                </span>
                            )}
                            {activity.date && (
                                <span className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                                    {activity.date}
                                </span>
                            )}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Introduction */}
            <FadeIn direction="up">
                <section
                    className="text-white text-center px-6 py-10 mx-4 md:mx-16 rounded-2xl -mt-10 relative z-10"
                    style={{ background: "linear-gradient(to right, #0C2D4F, #1E5BA8)" }}
                >
                    <h2 className="text-xl md:text-2xl font-bold mb-3">Activity Overview</h2>
                    <p className="text-sm opacity-90 max-w-3xl mx-auto leading-relaxed">
                        {activity.excerpt}
                    </p>
                </section>
            </FadeIn>

            {/* Back Button */}
            <div className="px-4 md:px-6 max-w-5xl mx-auto pt-6">
                <Link
                    href="/latestactivities"
                    className="group inline-flex items-center gap-2 pl-3 pr-4 py-2 rounded-full
                   text-sm font-medium text-white bg-[#2E5C8A]
                   hover:bg-[#1A3A5C] hover:shadow-md
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E5C8A]/40 focus-visible:ring-offset-2
                   transition-all duration-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Latest Activities
                </Link>
            </div>

            {/* Gallery + Title + Content — clean layout, no colored box */}
            <section className="py-12 sm:py-16 px-4 md:px-6 max-w-5xl mx-auto">
                {galleryImages.length > 0 && (
                    <FadeIn direction="up">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
                            {galleryImages.map((src, i) => (
                                <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 shadow-sm">
                                    <img
                                        src={src}
                                        alt={`${activity.title} - ${i + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                )}

                <FadeIn direction="up">
                    <h2 className="text-xl md:text-2xl font-bold text-[#1A3A5C] mb-4">
                        {activity.title}
                    </h2>
                    <div
                        className="text-sm sm:text-base text-gray-700 leading-relaxed
                            [&_h1]:text-xl [&_h1]:font-bold [&_h1]:text-[#1A3A5C] [&_h1]:mt-6 [&_h1]:mb-2 [&_h1]:first:mt-0
                            [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-[#1A3A5C] [&_h2]:mt-6 [&_h2]:mb-2 [&_h2]:first:mt-0
                            [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#1A3A5C] [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:first:mt-0
                            [&_p]:mb-4
                            [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4
                            [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4
                            [&_strong]:font-semibold
                            [&_em]:italic"
                        dangerouslySetInnerHTML={{ __html: safeHtml }}
                    />
                </FadeIn>
            </section>

            {/* CTA */}
            <section className="relative py-16 sm:py-20 text-center bg-[#CFE7F6]" style={{
                backgroundImage: `url(${heroSecImage})`,
                backgroundPosition: "center center"
            }}>
                <div className="absolute inset-0 bg-black/55" />

                <FadeIn className="relative z-10 max-w-2xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#d6d6d6]">
                        Want to Work With Us on Your Next Project?
                    </h2>
                    <p className="text-sm text-[#d3d3d3] mb-8">
                        Contact Master MEP Solution for professional MEP engineering, installation, and maintenance services in Cambodia.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-[#1A3A5C] text-white rounded-xl hover:bg-[#275587] transition-colors font-medium text-sm"
                    >
                        Contact Us
                    </Link>
                </FadeIn>
            </section>
        </MepLayout>
    );
}