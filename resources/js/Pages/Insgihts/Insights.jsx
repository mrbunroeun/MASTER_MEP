import MepLayout from "@/Layouts/MepLayout";
import { Head, Link } from "@inertiajs/react";
import FadeIn from "@/Components/FadeIn";

// Handles image paths whether stored as "insights/file.jpg" or already "/storage/insights/file.jpg"
const storageUrl = (path) => {
    if (!path) return null;
    if (path.startsWith("http") || path.startsWith("/storage/")) return path;
    return `/storage/${path}`;
};

const PlaceholderIcon = ({ className = "w-10 h-10 text-[#1A3A5C]/25" }) => (
    <svg
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.5M3 16.5l4.5-4.5a1.5 1.5 0 0 1 2.12 0l2.38 2.38m0 0 3-3a1.5 1.5 0 0 1 2.12 0L21 16.5M3 16.5V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.5M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
        />
    </svg>
);

export default function Insights({ insights = [] }) {
    const heroSecImage = "/HeroSection/heroSection.png";

    return (
        <MepLayout>
            <Head title="Insights — Master MEP" />

            {/* Hero */}
            <section
                className="relative min-h-[70vh] bg-cover bg-no-repeat flex items-center"
                style={{
                    backgroundImage: `url(${heroSecImage})`,
                    backgroundPosition: "center center",
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <FadeIn
                    direction="up"
                    className="relative z-10 px-6 max-w-3xl mx-auto w-full text-white text-center"
                >
                    <p className="text-3xl sm:text-4xl md:text-[50px] tracking-[0.1em] font-semibold text-white mb-1">
                        MASTER MEP
                    </p>
                    <p className="text-[10px] sm:text-xs tracking-[0.5em] sm:tracking-[1em] text-[#96DCFF] mb-6 sm:mb-8">
                        SOLUTION
                    </p>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        MEP Insights & Resources
                    </h1>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] opacity-80 max-w-xl mx-auto">
                        Master MEP Solution Co., Ltd provides professional
                        Mechanical, Electrical, Plumbing (MEP), HVAC, ELV, Fire
                        Protection, and Maintenance Services for commercial
                        buildings, villas, banks, restaurants, hospitals, and
                        industrial projects across Cambodia.
                    </p>
                    <div className="flex flex-row mt-[2rem] sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-block px-8 py-3 bg-blue-900 rounded-xl hover:bg-blue-800 transition font-medium text-sm"
                        >
                            Request Quotation
                        </a>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-3 bg-blue-900 rounded-xl hover:bg-blue-800 transition font-medium text-sm"
                        >
                            Book Site Inspection
                        </a>
                    </div>
                </FadeIn>
            </section>

            {/* Insights List — 3-column card grid */}
            <section className="py-16 px-4 md:px-6 max-w-6xl mx-auto">
                <FadeIn direction="up">
                    <h2 className="text-xl md:text-2xl font-bold text-[#1A3A5C] mb-8">
                        All Articles
                    </h2>
                </FadeIn>

                {insights.length === 0 ? (
                    <p className="text-gray-500 text-sm">
                        No articles yet. Check back soon.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {insights.map((item, i) => (
                            <FadeIn key={item.slug} delay={i * 80}>
                                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                                    {/* Image */}
                                    <Link
                                        href={`/insights/${item.slug}`}
                                        className="block focus:outline-none"
                                        aria-label={`Read ${item.title}`}
                                    >
                                        <div className="aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                                            {item.image ? (
                                                <img
                                                    src={storageUrl(item.image)}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1A3A5C]/5 to-[#2E5C8A]/10">
                                                    <PlaceholderIcon />
                                                </div>
                                            )}
                                        </div>
                                    </Link>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col flex-1">
                                        <Link href={`/insights/${item.slug}`}>
                                            <h3 className="text-base md:text-lg font-bold text-[#1A3A5C] hover:text-[#2E5C8A] transition-colors mb-2 leading-snug">
                                                {item.title}
                                            </h3>
                                        </Link>
                                        <p
                                            className="text-sm text-gray-500 leading-relaxed flex-1"
                                            style={{
                                                display: "-webkit-box",
                                                WebkitLineClamp: 3,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                            }}
                                        >
                                            {item.introduction}
                                        </p>
                                        <Link
                                            href={`/insights/${item.slug}`}
                                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E5C8A] hover:text-[#1A3A5C] transition-colors w-fit"
                                        >
                                            Read More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-3.5 h-3.5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                )}
            </section>

            {/* CTA */}
            <section
                className="relative py-20 bg-cover bg-no-repeat text-white text-center"
                style={{
                    backgroundImage: `url(${heroSecImage})`,
                    backgroundPosition: "center center",
                }}
            >
                <div className="absolute inset-0 bg-black/30" />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.65) 100%)",
                    }}
                />
                <FadeIn
                    direction="up"
                    className="relative z-10 max-w-2xl mx-auto px-6"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Need Professional MEP Services in Cambodia?
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-[#2E5C8A] rounded-full hover:bg-[#1A3A5C] transition-colors font-medium text-sm"
                    >
                        Contact Master MEP
                    </Link>
                </FadeIn>
            </section>
        </MepLayout>
    );
}
