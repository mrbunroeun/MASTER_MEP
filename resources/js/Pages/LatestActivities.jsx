import { useState } from "react";
import MepLayout from "@/Layouts/MepLayout";
import { Head, Link } from "@inertiajs/react";
import FadeIn from "@/Components/FadeIn";

export default function LatestActivities({ activities = [] }) {
    const [filter, setFilter] = useState("All");
    const categories = ["All", ...new Set(activities.map((a) => a.category))];
    const filtered =
        filter === "All"
            ? activities
            : activities.filter((a) => a.category === filter);
    const heroSecImage = "/HeroSection/heroSection.png";
    const bgStyle = {
        backgroundImage: `url(${heroSecImage})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <MepLayout>
            <Head title="Latest Activities | Master MEP Solution Cambodia">
                <meta
                    name="description"
                    content="Stay updated with Master MEP Solution's latest projects, company news, training, and site activities across Cambodia."
                />
            </Head>

            {/* Hero */}
            <section
                className="relative min-h-[70vh] flex items-center"
                style={bgStyle}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 px-6 max-w-3xl mx-auto w-full text-white text-center">
                    <FadeIn delay={0}>
                        <p className="text-3xl sm:text-4xl md:text-[50px] tracking-[0.1em] font-semibold text-white mb-1">
                            MASTER MEP
                        </p>
                        <p className="text-[10px] sm:text-xs tracking-[0.5em] sm:tracking-[1em] text-[#96DCFF] mb-6 sm:mb-8">
                            SOLUTION
                        </p>
                    </FadeIn>
                    <FadeIn delay={150}>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Latest Activities
                        </h1>
                    </FadeIn>
                    <FadeIn delay={260}>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] opacity-80 max-w-xl mx-auto">
                            Stay updated with our recent projects, company news,
                            and technical activities across Cambodia.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="px-4 md:px-6 max-w-6xl mx-auto -mt-6 relative z-10">
                <FadeIn>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                                    filter === cat
                                        ? "bg-[#1A3A5C] text-white"
                                        : "bg-[#CFE7F6] text-[#1A3A5C] hover:bg-[#B8DCF2]"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </FadeIn>
            </section>

            {/* Activities Grid */}
            <section className="py-12 sm:py-16 px-4 md:px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {filtered.map((item, i) => (
                        <FadeIn key={item.id} delay={i * 80}>
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col">
                                <div className="w-full aspect-[4/3] bg-gray-200 flex items-center justify-center overflow-hidden">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-gray-400 text-xs font-medium">
                                            Image coming soon
                                        </span>
                                    )}
                                </div>

                                <div className="p-4 sm:p-5 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[10px] sm:text-xs font-semibold text-orange-500 uppercase tracking-wide">
                                            {item.category}
                                        </span>
                                        <span className="text-[10px] sm:text-xs text-gray-400">
                                            {item.date}
                                        </span>
                                    </div>
                                    <h3 className="text-sm sm:text-base font-bold text-[#1A3A5C] mb-2 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-1">
                                        {item.excerpt}
                                    </p>
                                    <Link
                                        href={`/latestactivities/${item.id}`}
                                        className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#1A3A5C] text-white rounded-lg text-xs font-medium hover:bg-[#0C2D4F] transition-colors w-fit"
                                    >
                                        Find Our More
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
            </section>

            {/* CTA */}
            <section
                className="relative py-16 sm:py-20 text-center bg-[#CFE7F6]"
                style={bgStyle}
            >
                <div className="absolute inset-0 bg-black/50" />

                <FadeIn className="relative z-10 max-w-2xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                        Want to Work With Us on Your Next Project?
                    </h2>
                    <p className="text-sm text-white/80 mb-8">
                        Contact Master MEP Solution for professional MEP
                        engineering, installation, and maintenance services in
                        Cambodia.
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
