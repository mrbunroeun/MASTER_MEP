import { useState, useEffect, useRef } from "react";
import MepLayout from "@/Layouts/MepLayout";
import { Head, Link } from "@inertiajs/react";
import SolarServicesCarousel from "@/Components/SolarServicesCarousel";
import { Zap } from "lucide-react";

function Reveal({ children, className = "", delay = 0 }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);
    return (
        <div
            ref={ref}
            className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
            style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
        >
            {children}
        </div>
    );
}

export default function SolaSystem({
    service,
    serviceItems = [],
    featureProjectCards = [],
    heroImage = null,
    keyHighlights = [],
    solarOverview = null,
    solarItems = [],
}) {
    const [open, setOpen] = useState(null);
    const heroSecImage = "/HeroSection/heroSection.png";

    const displayItems = serviceItems.length > 0 ? serviceItems : [];

    const bgImage = service?.image ? `/storage/${service.image}` : heroImage;
    const displayHighlights = keyHighlights.length > 0 ? keyHighlights : [];

    const featuredProjects = featureProjectCards.slice(0, 2);

    return (
        <MepLayout>
            <Head
                title={`${solarOverview?.title || "Solar System Installation"} — Master MEP`}
            />

            <style>{`
                .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease-out, transform 0.7s ease-out; will-change: opacity, transform; }
                .reveal-visible { opacity: 1; transform: translateY(0); }
                .hover-lift { transition: transform 0.25s ease-out, box-shadow 0.25s ease-out; }
                .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 12px 24px -8px rgba(12, 31, 63, 0.25); }
                .btn-animate { transition: transform 0.2s ease-out, box-shadow 0.2s ease-out, background-color 0.2s ease-out; }
                .btn-animate:hover { transform: translateY(-2px) scale(1.03); }
                .btn-animate:active { transform: scale(0.97); }
                @media (prefers-reduced-motion: reduce) {
                    .reveal { opacity: 1; transform: none; transition: none; }
                    .hover-lift:hover, .btn-animate:hover, .btn-animate:active { transform: none; }
                }
            `}</style>

            {/* Hero */}
            <section
                className="relative min-h-[90vh] flex items-center"
                style={{
                    backgroundImage: `url(${bgImage || heroSecImage})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                }}
            >
                <div className="absolute inset-0 bg-black/55" />
                <div className="relative z-10 px-6 max-w-3xl mx-auto w-full text-white text-center">
                    <p className="text-3xl sm:text-4xl md:text-[50px] tracking-[0.1em] font-semibold text-white mb-1">
                        MASTER MEP
                    </p>
                    <p className="text-[10px] sm:text-xs tracking-[0.5em] sm:tracking-[1em] text-[#96DCFF] mb-6 sm:mb-8">
                        SOLUTION
                    </p>
                    <Reveal delay={100}>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Solar System Installation
                        </h1>
                    </Reveal>
                    <Reveal delay={260}>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] opacity-80 mb-8 max-w-xl mx-auto">
                            Professional Solar System Installation Services in
                            Cambodia
                        </p>
                    </Reveal>
                    <Reveal delay={340}>
                        <div className="flex flex-row sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="inline-block px-8 py-3 bg-blue-900 rounded-xl hover:bg-blue-800 transition font-medium text-sm"
                            >
                                Request Free Site Survey
                            </a>
                            <a
                                href="/contact"
                                className="inline-block px-8 py-3 bg-blue-900 rounded-xl hover:bg-blue-800 transition font-medium text-sm"
                            >
                                Get Solar Quotation
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Intro Banner */}
            <Reveal>
                <section
                    className="text-white text-center px-6 py-10 mx-4 md:mx-16 rounded-2xl -mt-10 relative z-10"
                    style={{
                        background:
                            "linear-gradient(to right, #0C2D4F, #1E5BA8)",
                    }}
                >
                    <h2 className="text-xl md:text-2xl font-bold mb-3">
                        Professional Solar System Installation Services in
                        Cambodia
                    </h2>
                    <p className="text-sm opacity-90 max-w-3xl mx-auto leading-relaxed">
                        Reduce your electricity costs and achieve energy
                        independence with reliable solar power solutions. Master
                        MEP Solution provides complete solar system design,
                        engineering, installation, and maintenance for homes,
                        businesses, factories, and commercial buildings across
                        Cambodia.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-6 text-[#1d4984] mt-[1rem] sm:px-8 py-2.5 sm:py-3 bg-white rounded-xl hover:bg-blue-800 hover:text-white transition font-medium text-xs sm:text-sm"
                    >
                        Talk to Our Solar Engineer
                    </Link>
                </section>
            </Reveal>

            {/* Overview — DB-driven. Visual order: Title (large dark-blue heading) -> Subtitle (small orange eyebrow) -> Description */}
            {solarOverview && (
                <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
                    <Reveal>
                        {solarOverview.title && (
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A3A5C] mb-2 sm:mb-3">
                                {solarOverview.title}
                            </h2>
                        )}
                        {solarOverview.subtitle && (
                            <p className="text-orange-500 font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4">
                                {solarOverview.subtitle}
                            </p>
                        )}
                        {solarOverview.description && (
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto mt-2 sm:mt-3">
                                {solarOverview.description}
                            </p>
                        )}
                    </Reveal>
                </section>
            )}

            {/* Solar Service Item Cards — DB-driven, each card uses its own card_color band */}
            {solarItems.length > 0 && (
                <div className="space-y-8 sm:space-y-10 md:space-y-12 py-6 sm:py-8">
                    {solarItems.map((item) => {
                        const imageRight =
                            (item.image_side || "left") === "right";
                        const inner = (
                            <div
                                className={`flex flex-col md:flex-row gap-6 md:gap-10 items-center ${imageRight ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Image */}
                                <div className="w-full md:w-1/2 flex-shrink-0">
                                    <div
                                        className="w-full bg-gray-300 overflow-hidden rounded-[25px]"
                                        style={{ aspectRatio: "592 / 549" }}
                                    >
                                        {(item.image_url || item.image) &&
                                            (() => {
                                                const raw =
                                                    item.image_url ||
                                                    item.image;
                                                const isAbsolute =
                                                    /^https?:\/\//i.test(raw);
                                                const src = isAbsolute
                                                    ? raw
                                                    : `/storage/${raw.replace(/^\/+/, "")}`;
                                                return (
                                                    <img
                                                        src={src}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                );
                                            })()}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A3A5C] mb-3 sm:mb-4">
                                        {item.title}
                                    </h3>

                                    {item.best_for && (
                                        <div className="mb-3 sm:mb-4">
                                            <p className="text-sm sm:text-base font-semibold text-[#1A3A5C] mb-1">
                                                Best For:
                                            </p>
                                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                                {item.best_for}
                                            </p>
                                        </div>
                                    )}

                                    {item.how_it_works && (
                                        <div className="mb-3 sm:mb-4">
                                            <p className="text-sm sm:text-base font-semibold text-[#1A3A5C] mb-1">
                                                How It Works:
                                            </p>
                                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                                {item.how_it_works}
                                            </p>
                                        </div>
                                    )}

                                    {item.benefits?.length > 0 && (
                                        <div className="mb-3 sm:mb-4">
                                            <p className="text-sm sm:text-base font-semibold text-[#1A3A5C] mb-1">
                                                Benefits
                                            </p>
                                            <ul className="text-xs sm:text-sm text-gray-700 space-y-1 list-disc list-inside">
                                                {item.benefits.map((b, i) => (
                                                    <li key={i}>{b}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                        return (
                            <section
                                key={item.id}
                                className="px-4 sm:px-6 max-w-6xl mx-auto"
                            >
                                <Reveal>
                                    {item.card_color ? (
                                        <div
                                            className="rounded-2xl px-4 sm:px-6 md:px-10 py-8 md:py-10"
                                            style={{
                                                background: item.card_color,
                                            }}
                                        >
                                            {inner}
                                        </div>
                                    ) : (
                                        <div className="px-2">{inner}</div>
                                    )}
                                </Reveal>
                            </section>
                        );
                    })}
                </div>
            )}

            {/* Our Solar Services Include — DB-driven carousel, dark blue gradient section */}
            {displayItems.length > 0 && (
                <section
                    id="solasystem-services-grid"
                    className="py-12 sm:py-16 md:py-20 px-4"
                    style={{
                        background:
                            "linear-gradient(135deg, #0C2D4F 0%, #1E5BA8 100%)",
                    }}
                >
                    <SolarServicesCarousel
                        services={displayItems}
                        title="Our Solar Installation Services"
                        subtitle="Master MEP Solution provides complete turnkey solar solutions, including:"
                    />
                </section>
            )}

            {/* Key Highlights — unchanged, uses keyHighlights from other modules */}
            {displayHighlights.length > 0 && (
                <section className="py-12 sm:py-16 px-4 md:px-6 max-w-5xl mx-auto">
                    <Reveal>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A5C] text-center mb-10">
                            Key Highlights
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                        {displayHighlights.map((kh, i) => (
                            <Reveal delay={i * 60} key={kh.id || i}>
                                <div className="border-2 border-[#2E9BD6] rounded-2xl p-5 sm:p-6 text-center hover-lift min-h-[120px] sm:min-h-[150px] lg:min-h-[160px] flex flex-col items-center justify-center">
                                    <p className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-2">
                                        {kh.number}
                                    </p>
                                    <p className="text-xs sm:text-sm font-medium text-[#1A3A5C]">
                                        {kh.title}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>
            )}

            {/* Applications — kept (not part of DB-CRUD scope, content is descriptive) */}
            <section className="py-16 px-4 md:px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <Reveal>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A5C] mb-1">
                            Applications
                        </h2>
                        <p className="text-orange-500 text-sm sm:text-base font-medium mb-10">
                            Our solar systems are suitable for:
                        </p>
                    </Reveal>

                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {[
                            "Residential Homes",
                            "Office Buildings",
                            "Factories & Industrial Facilities",
                            "Hotels & Resorts",
                            "Hospitals & Clinics",
                            "Schools & Universities",
                            "Shopping Malls",
                            "Religious Buildings",
                            "Farms & Agricultural Facilities",
                        ].map((label, i) => (
                            <Reveal delay={i * 60} key={i}>
                                <div className="bg-[#CFE7F6] rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-left hover-lift w-[150px] sm:w-[170px] md:w-[180px] min-h-[72px] sm:min-h-[80px] flex items-center">
                                    <p className="text-xs sm:text-sm font-medium text-[#1A3A5C] leading-snug">
                                        {label}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Master MEP Solution — kept (content is descriptive) */}
            <section className="py-16 px-4 md:px-6 max-w-5xl mx-auto">
                <Reveal>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A5C] text-center mb-10">
                        Why Choose Master MEP Solution?
                    </h2>
                </Reveal>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                    {[
                        "Experienced solar engineers",
                        "Customized system design",
                        "High-quality solar components",
                        "Professional installation team",
                        "Compliance with electrical safety standards",
                        "After-sales maintenance and technical support",
                        "Energy-efficient and cost-effective solutions",
                        "One-stop engineering, procurement, and installation services",
                    ].map((label, i) => (
                        <Reveal delay={i * 60} key={i}>
                            <div className="border-2 border-[#2E9BD6] rounded-2xl p-5 sm:p-6 text-center hover-lift min-h-[120px] sm:min-h-[150px] lg:min-h-[160px] flex flex-col items-center justify-center">
                                <p className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-2">
                                    {String(i + 1).padStart(2, "0")}
                                </p>
                                <p className="text-xs sm:text-sm font-medium text-[#1A3A5C]">
                                    {label}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Featured Project Cards — sourced from FeatureProjectCard admin module (DB-driven) */}
            {featuredProjects.length > 0 && (
                <section className="py-16 px-4 md:px-6 max-w-5xl mx-auto">
                    <Reveal>
                        <h2 className="text-xl md:text-2xl font-bold text-[#1A3A5C] mb-8">
                            Featured Projects
                        </h2>
                    </Reveal>

                    <div className="space-y-5">
                        {featuredProjects.map((card, idx) => {
                            const bg = card.image
                                ? `/storage/${card.image}`
                                : null;
                            return (
                                <Reveal key={card.id || idx} delay={idx * 80}>
                                    <div
                                        className="text-white rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, #0C2D4F 0%, #1E5BA8 100%)",
                                        }}
                                    >
                                        {bg ? (
                                            <img
                                                src={bg}
                                                alt={card.title}
                                                className="w-full md:w-2/5 flex-shrink-0 min-h-[240px] md:min-h-[260px] object-cover"
                                            />
                                        ) : (
                                            <div
                                                className="w-full md:w-2/5 flex-shrink-0 min-h-[240px] md:min-h-[260px] flex flex-col items-center justify-center gap-3"
                                                style={{
                                                    background:
                                                        "linear-gradient(135deg, #0C2D4F 0%, #1E5BA8 100%)",
                                                }}
                                            >
                                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                                                    <Zap
                                                        size={32}
                                                        className="text-white/40"
                                                    />
                                                </div>
                                                <p className="text-white/30 text-xs font-medium tracking-wide uppercase">
                                                    No Image Yet
                                                </p>
                                            </div>
                                        )}

                                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-base md:text-lg font-bold mb-3 leading-snug">
                                                    {card.title}
                                                </h3>
                                                {(card.description ||
                                                    card.location ||
                                                    card.timeline) && (
                                                    <ul className="text-sm opacity-85 leading-relaxed list-disc pl-5 space-y-1 marker:text-white/60 mb-3">
                                                        {card.description &&
                                                            card.description
                                                                .split("\n")
                                                                .map((line) =>
                                                                    line.trim(),
                                                                )
                                                                .filter(
                                                                    (line) =>
                                                                        line.length >
                                                                        0,
                                                                )
                                                                .map(
                                                                    (
                                                                        line,
                                                                        i,
                                                                    ) => (
                                                                        <li
                                                                            key={`d-${i}`}
                                                                        >
                                                                            {
                                                                                line
                                                                            }
                                                                        </li>
                                                                    ),
                                                                )}
                                                        {card.location && (
                                                            <li>
                                                                Location:{" "}
                                                                {card.location}
                                                            </li>
                                                        )}
                                                        {card.timeline && (
                                                            <li>
                                                                Timeline:{" "}
                                                                {card.timeline}
                                                            </li>
                                                        )}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>

                    <Reveal>
                        <div className="text-center mt-10">
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A3A5C] hover:bg-[#0C2D4F] text-white rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                            >
                                Request Quotation
                            </Link>
                        </div>
                    </Reveal>
                </section>
            )}

            {/* Installation Process — kept (content is descriptive) */}
            <section className="py-16 px-4 md:px-6 max-w-5xl mx-auto">
                <Reveal>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A5C] text-center mb-10">
                        Our Installation Process
                    </h2>
                </Reveal>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-10">
                    {[
                        {
                            step: "Step 1",
                            title: "Free Site Survey",
                            desc: "Our engineers assess your roof, electrical system, and energy consumption.",
                        },
                        {
                            step: "Step 2",
                            title: "System Design & Proposal",
                            desc: "We recommend the most suitable On-Grid, Off-Grid, or Hybrid solution based on your requirements.",
                        },
                        {
                            step: "Step 3",
                            title: "Quotation & Approval",
                            desc: "Receive a detailed proposal outlining equipment, installation scope, estimated energy savings, and project timeline.",
                        },
                        {
                            step: "Step 4",
                            title: "Professional Installation",
                            desc: "Our certified technicians install the complete solar system safely and efficiently.",
                        },
                        {
                            step: "Step 5",
                            title: "Testing & Commissioning",
                            desc: "We test system performance, verify electrical safety, and provide user training.",
                        },
                        {
                            step: "Step 6",
                            title: "Maintenance & Technical Support",
                            desc: "Ongoing maintenance services ensure your solar system operates at maximum efficiency for years to come.",
                        },
                    ].map((s, i) => (
                        <Reveal delay={i * 80} key={i}>
                            <div className="min-h-[150px] sm:min-h-[140px] lg:min-h-[150px]">
                                <p className="text-orange-500 font-bold text-xs sm:text-sm mb-1">
                                    {s.step}
                                </p>
                                <p className="text-[#1A3A5C] font-bold text-xs sm:text-sm mb-2">
                                    {s.title}
                                </p>
                                <p className="text-[11px] sm:text-xs md:text-sm text-gray-700 leading-relaxed">
                                    {s.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* FAQs — kept (content is descriptive; only the open/close state is interactive) */}
            <section className="py-16 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-[#CFE7F6] rounded-3xl p-6 sm:p-8 md:p-10">
                        <Reveal>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A5C] mb-6 sm:mb-8">
                                FAQs
                            </h2>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 items-start">
                            <div className="flex flex-col gap-3 sm:gap-4">
                                {[
                                    {
                                        key: "s1",
                                        q: "How long does a solar system installation take?",
                                        a: "Most residential installations are completed within 3-7 days, while larger commercial or industrial projects may take 2-4 weeks depending on system size and site complexity.",
                                    },
                                    {
                                        key: "s2",
                                        q: "Do I need a battery for my solar system?",
                                        a: "Not necessarily. If you're connected to a reliable grid, an On-Grid system without battery is more cost-effective. A battery is recommended if you experience frequent power outages or want energy independence.",
                                    },
                                    {
                                        key: "s3",
                                        q: "How much can I save on my electricity bill with solar?",
                                        a: "Savings depend on your system size, energy consumption, and sunlight exposure. Most customers see a 30-70% reduction in monthly electricity costs after installation.",
                                    },
                                ].map((faq, i) => (
                                    <Reveal delay={i * 80} key={faq.key}>
                                        <div className="bg-white rounded-xl overflow-hidden">
                                            <button
                                                onClick={() =>
                                                    setOpen(
                                                        open === faq.key
                                                            ? null
                                                            : faq.key,
                                                    )
                                                }
                                                className="w-full flex justify-between items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 text-left"
                                            >
                                                <span className="text-xs sm:text-sm font-semibold text-[#1A3A5C]">
                                                    {faq.q}
                                                </span>
                                                <span className="text-[#1A3A5C] shrink-0">
                                                    {open === faq.key
                                                        ? "▼"
                                                        : "▶"}
                                                </span>
                                            </button>
                                            <div
                                                className="overflow-hidden transition-all duration-300 ease-out"
                                                style={{
                                                    maxHeight:
                                                        open === faq.key
                                                            ? "300px"
                                                            : "0px",
                                                }}
                                            >
                                                <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-[#1A3A5C]/80 leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>

                            <div className="flex flex-col gap-3 sm:gap-4">
                                {[
                                    {
                                        key: "s4",
                                        q: "What is the lifespan of a solar system, and does it need maintenance?",
                                        a: "Solar panels typically last 25-30 years with minimal maintenance. We recommend periodic panel cleaning and annual inspections to ensure optimal performance and efficiency.",
                                    },
                                    {
                                        key: "s5",
                                        q: "What happens to my solar system during a power outage?",
                                        a: "For On-Grid systems, power output stops automatically for safety during a grid outage. Off-Grid and Hybrid systems with battery storage continue supplying power to your building.",
                                    },
                                    {
                                        key: "s6",
                                        q: "Do you provide warranty and after-sales support?",
                                        a: "Yes, we provide warranty coverage on solar panels, inverters, and installation workmanship, along with ongoing maintenance and technical support to keep your system running efficiently.",
                                    },
                                ].map((faq, i) => (
                                    <Reveal delay={240 + i * 80} key={faq.key}>
                                        <div className="bg-white rounded-xl overflow-hidden">
                                            <button
                                                onClick={() =>
                                                    setOpen(
                                                        open === faq.key
                                                            ? null
                                                            : faq.key,
                                                    )
                                                }
                                                className="w-full flex justify-between items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 text-left"
                                            >
                                                <span className="text-xs sm:text-sm font-semibold text-[#1A3A5C]">
                                                    {faq.q}
                                                </span>
                                                <span className="text-[#1A3A5C] shrink-0">
                                                    {open === faq.key
                                                        ? "▼"
                                                        : "▶"}
                                                </span>
                                            </button>
                                            <div
                                                className="overflow-hidden transition-all duration-300 ease-out"
                                                style={{
                                                    maxHeight:
                                                        open === faq.key
                                                            ? "300px"
                                                            : "0px",
                                                }}
                                            >
                                                <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-[#1A3A5C]/80 leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services — kept */}
            <section className="py-12 sm:py-16 px-4 md:px-6 max-w-5xl mx-auto">
                <Reveal>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A3A5C] mb-2">
                        Related Services
                    </h2>

                    <ul className="text-xs sm:text-sm text-[#2E5C8A] space-y-1.5 sm:space-y-2 list-disc list-inside">
                        <li>
                            <Link
                                href="/services/mechanical"
                                className="hover:underline"
                            >
                                Mechanical / HVAC System
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services/electrical"
                                className="hover:underline"
                            >
                                Electrical & ELV System
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services/plumbing"
                                className="hover:underline"
                            >
                                Plumbing Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services/maintenance"
                                className="hover:underline"
                            >
                                Annual Maintenance Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services/solasystem"
                                className="hover:underline"
                            >
                                Solar System Installation
                            </Link>
                        </li>
                    </ul>
                </Reveal>
            </section>

            {/* CTA — kept (content is descriptive marketing copy, not user-editable) */}
            <section
                className="relative py-20 text-white text-center"
                style={
                    heroSecImage
                        ? {
                              backgroundImage: `url('${heroSecImage}')`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                          }
                        : {
                              background:
                                  "linear-gradient(135deg, #0C1F3F 0%, #1E5BA8 100%)",
                          }
                }
            >
                <div className="absolute inset-0 bg-black/55" />
                <Reveal className="relative z-10 max-w-2xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Start Saving Energy with Solar Power
                    </h2>
                    <p className="text-sm opacity-80 mb-8">
                        Whether you're planning a residential installation,
                        commercial rooftop system, or industrial solar project,
                        Master MEP Solution is ready to deliver reliable,
                        high-performance solar solutions tailored to your needs.
                    </p>

                    <div className="flex justify-center">
                        <Link
                            href="/contact"
                            className="btn-animate max-[600px]:text-[10px] inline-block px-8 py-3 bg-[#2E5C8A] max-[600px]:px-2 rounded-xl hover:bg-[#1A3A5C] transition-colors font-medium text-sm"
                        >
                            Get Solar Quotation
                        </Link>
                    </div>
                </Reveal>
            </section>
        </MepLayout>
    );
}
