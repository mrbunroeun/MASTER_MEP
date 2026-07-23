import MepLayout from "@/Layouts/MepLayout";
import { Head, Link } from "@inertiajs/react";
import FadeIn from "@/Components/FadeIn";

// Handles image paths whether stored as "insights/file.jpg" or already "/storage/insights/file.jpg"
const storageUrl = (path) => {
    if (!path) return null;
    if (path.startsWith('http') || path.startsWith('/storage/')) return path;
    return `/storage/${path}`;
};

// Renders a section body as paragraphs, turning lines that start with "- " or "• "
// into a bulleted list (consecutive bullet lines are grouped into one <ul>).
function SectionBody({ text, dark }) {
    if (!text) return null;

    const lines = text.split("\n").filter((l) => l.trim() !== "");
    const blocks = [];
    let currentList = [];

    lines.forEach((line) => {
        const trimmed = line.trim();
        if (/^[-•]\s+/.test(trimmed)) {
            currentList.push(trimmed.replace(/^[-•]\s+/, ""));
        } else {
            if (currentList.length) {
                blocks.push({ type: "list", items: currentList });
                currentList = [];
            }
            blocks.push({ type: "p", text: trimmed });
        }
    });
    if (currentList.length) blocks.push({ type: "list", items: currentList });

    const textColor = dark ? "text-gray-300" : "text-gray-600";

    return (
        <div className={`space-y-3 text-sm md:text-base leading-relaxed ${textColor}`}>
            {blocks.map((b, idx) =>
                b.type === "list" ? (
                    <ul key={idx} className="list-disc pl-5 space-y-1">
                        {b.items.map((item, j) => (
                            <li key={j}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p key={idx}>{b.text}</p>
                )
            )}
        </div>
    );
}

const PlaceholderIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.5M3 16.5l4.5-4.5a1.5 1.5 0 0 1 2.12 0l2.38 2.38m0 0 3-3a1.5 1.5 0 0 1 2.12 0L21 16.5M3 16.5V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.5M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
        />
    </svg>
);

export default function InsightDetail({ insight }) {
    const heroSecImage = "/HeroSection/heroSection.png";
    const coverImage = storageUrl(insight.image) || heroSecImage;

    // Uses the actual layout field set in the admin form (previously this
    // incorrectly matched on the slug text — now fixed).
    const isBlackTheme = insight.layout === "dark";

    return (
        <MepLayout>
            <Head title={`${insight.title} — Master MEP`} />


            {/* Full-width cover photo, no overlay text */}
            <div className="w-full bg-gray-100">
                <img
                    src={coverImage}
                    alt={insight.title}
                    className="w-full aspect-[16/7] md:aspect-[21/8] object-cover"
                />
                <section className="   max-w-3xl mx-auto px-4 md:px-6 pt-10 pb-2">
                <FadeIn direction="up">
                    <h1 className="text-2xl md:text-4xl font-bold text-[#1A3A5C] mb-4 leading-tight">
                        {insight.title}
                    </h1>
                    {insight.introduction && (
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed md:leading-relaxed font-normal mb-2">
                            {insight.introduction}
                        </p>
                    )}
                </FadeIn>
            </section>
            </div>

            {/* Title + Introduction */}
            

            {/* Back to Insights */}
            <div className="max-w-3xl mx-auto px-4 md:px-6 pt-6">
                <Link
                    href="/insights"
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
                    Back to Insights
                </Link>
            </div>

            {/* Section Title */}
            {insight.sections_title && (
                <FadeIn direction="up">
                    <section className="max-w-3xl mx-auto px-4 md:px-6 pt-12">
                        <h2 className="text-xl md:text-2xl font-bold text-[#1A3A5C]">
                            {insight.sections_title}
                        </h2>
                    </section>
                </FadeIn>
            )}

            {/* Content Sections — plain heading + paragraph/bullet body, matching reference layout */}
            <section className={`px-4 md:px-6 py-10 ${isBlackTheme ? "bg-black" : ""}`}>
                <div className="max-w-3xl mx-auto space-y-8">
                    {insight.sections?.map((section, i) => (
                        <FadeIn key={i} direction="up">
                            <div>
                                {section.image ? (
                                    <img
                                        src={storageUrl(section.image)}
                                        alt={section.title}
                                        className="rounded-lg w-full max-w-2xl aspect-[4/3] object-cover shadow-sm mb-3 mx-auto block"
                                        onError={(e) => { e.target.style.display = "none"; }}
                                    />
                                ) : null}
                                {section.title && (
                                    <h3 className={`text-base md:text-lg font-bold mb-2 ${isBlackTheme ? "text-white" : "text-gray-900"}`}>
                                        {section.title}
                                    </h3>
                                )}
                                <SectionBody text={section.body} dark={isBlackTheme} />
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Highlight Box */}
            {insight.highlight && (
                <section className="py-16 px-4 md:px-6 bg-blue-50">
                    <FadeIn direction="scale" className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            !
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#1A3A5C]">
                                {insight.highlight.title}
                            </h3>
                            <p className="leading-relaxed text-gray-600">
                                {insight.highlight.body}
                            </p>
                        </div>
                    </FadeIn>
                </section>
            )}

            {/* CTA */}
            <section
                className="relative py-20 bg-cover bg-no-repeat text-white text-center"
                style={{
                    backgroundImage: `url(${heroSecImage})`,
                    backgroundPosition: "center center"
                }}
            >
                <div className="absolute inset-0 bg-black/30" />
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(90deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.65) 100%)"
                    }}
                />
                <FadeIn direction="up" className="relative z-10 max-w-2xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">{insight.cta_text}</h2>
                    <Link href="/contact" className="inline-block px-8 py-3 bg-blue-900 rounded-xl hover:bg-blue-800 transition font-medium text-sm">
                        Contact Master MEP
                    </Link>
                </FadeIn>
            </section>
        </MepLayout>
    );
}