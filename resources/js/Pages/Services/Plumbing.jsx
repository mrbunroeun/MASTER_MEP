import { useState, useEffect, useRef } from "react";
import MepLayout from "@/Layouts/MepLayout";
import { Head, Link } from "@inertiajs/react";
import {
    Droplets,
    Waves,
    ArrowDown,
    Container,
    CircleDot,
    Settings,
    Building2,
} from "lucide-react";

const STATIC_ITEMS = [
    {
        icon: <Droplets className="w-10 h-10 text-white" />,
        title: "Water Supply System",
        points: [
            "Cold water system",
            "Hot water system",
            "Electric/Solar/Boiler water heater",
        ],
    },
    {
        icon: <Waves className="w-10 h-10 text-white" />,
        title: "Drainage System",
        points: [
            "Soil pipe system",
            "Waste pipe system",
            "Vent pipe system",
            "Stormwater drainage",
        ],
    },
    {
        icon: <ArrowDown className="w-10 h-10 text-white" />,
        title: "Sewage & Wastewater",
        points: [
            "Sewage system design",
            "Wastewater treatment",
            "Grease trap installation",
        ],
    },
    {
        icon: <Container className="w-10 h-10 text-white" />,
        title: "Water Tank Systems",
        points: [
            "Underground water tanks",
            "Overhead water tanks",
            "Water tank installation",
        ],
    },
    {
        icon: <CircleDot className="w-10 h-10 text-white" />,
        title: "Water Pump Systems",
        points: [
            "Booster pump systems",
            "Submersible pumps",
            "Pump control panels",
        ],
    },
    {
        icon: <Settings className="w-10 h-10 text-white" />,
        title: "Plumbing Support",
        points: [
            "Plumbing design",
            "Pipe installation",
            "Maintenance & repair",
        ],
    },
];
const STATIC_ICONS = [
    <Droplets className="w-10 h-10 text-white" />,
    <Waves className="w-10 h-10 text-white" />,
    <ArrowDown className="w-10 h-10 text-white" />,
    <Container className="w-10 h-10 text-white" />,
    <CircleDot className="w-10 h-10 text-white" />,
    <Settings className="w-10 h-10 text-white" />,
];
const highlights = [
    { number: "01", label: "Experienced plumbing engineers" },
    { number: "02", label: "Quality piping materials" },
    { number: "03", label: "Reliable installation methods" },
    { number: "04", label: "Fast project delivery" },
    { number: "05", label: "Professional testing systems" },
    { number: "06", label: "Maintenance & after-sales support" },
];
const steps = [
    { number: 1, label: "Experienced HVAC engineering team" },
    { number: 2, label: "Energy-efficient system solutions" },
    { number: 3, label: "International engineering standards" },
    { number: 4, label: "International engineering standards" },
    { number: 5, label: "Fast installation & project execution" },
    { number: 6, label: "Reliable maintenance support" },
    { number: 7, label: "Quality workmanship & testing" },
];
const staticFaqs = [
    {
        q: "Do you install water supply systems?",
        a: "Yes, we install complete cold and hot water supply systems for residential and commercial projects.",
    },
    {
        q: "Can you install water pump systems?",
        a: "Yes, we supply and install water pumps, booster pumps, and pump control panels.",
    },
    {
        q: "Do you install cold and hot water systems?",
        a: "Yes, we install full plumbing systems including cold water, hot water, drainage, and vent systems.",
    },
    {
        q: "Do you provide plumbing maintenance services?",
        a: "Yes, we offer scheduled and emergency plumbing maintenance services.",
    },
    {
        q: "Do you install drainage and sewage systems?",
        a: "Yes, we design and install soil, waste, vent, and stormwater drainage systems.",
    },
];

const DEFAULTS = {
    title: "Plumbing System",
    description:
        "Master MEP provides professional plumbing installation services including water supply systems, drainage systems, sewage systems, and plumbing support systems designed for long-term building performance.",
    benefitsTitle: "Benefits of Professional Plumbing Systems",
    benefitsPoints:
        "Reliable water supply\nEfficient drainage systems\nReduce water leakage risks\nLong-term durability\nBetter hygiene & sanitation\nLower maintenance costs",
    ctaTitle: "Need Professional Plumbing Installation in Cambodia?",
    ctaDescription:
        "Contact Master MEP Solution Co., Ltd for professional plumbing engineering and maintenance solutions.",
    ctaButton: "Request Plumbing Consultation",
};

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

export default function Plumbing({
    service,
    serviceItems = [],
    featureProjectCards = [],
    heroImage = null,
    keyHighlights = [],
}) {
    const [open, setOpen] = useState(null);
    const heroSecImage = "/HeroSection/heroSection.png";

    const bgImage = service?.image ? `/storage/${service.image}` : heroImage;
    const heroTitle = service?.title ?? DEFAULTS.title;
    const heroDesc = service?.description ?? DEFAULTS.description;
    const ctaButton = service?.button_text ?? DEFAULTS.ctaButton;
    const ctaLink = service?.button_link ?? "/contact";
    const displayItems = serviceItems.length > 0 ? serviceItems : STATIC_ITEMS;

    const displayHighlights =
        keyHighlights.length > 0 ? keyHighlights : highlights;

    const benefitsTitle = service?.benefits_title ?? DEFAULTS.benefitsTitle;
    const benefitsPointsRaw =
        service?.benefits_points ?? DEFAULTS.benefitsPoints;
    const benefitsPoints = (benefitsPointsRaw || "")
        .split("\n")
        .map((p) => p.trim())
        .filter(Boolean);

    const heroStyle = bgImage
        ? {
              backgroundImage: `url('${bgImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
          }
        : {
              background:
                  "linear-gradient(135deg, #0C1F3F 0%, #1A3A5C 50%, #1E5BA8 100%)",
          };

    // Featured Project Cards data — fully admin-driven from FeatureProjectCard
    const displayProjects = featureProjectCards;

    return (
        <MepLayout>
            <Head title={`${heroTitle} — Master MEP`}>
                <meta name="description" content={heroDesc} />
                <meta
                    name="keywords"
                    content="plumbing installation Cambodia, water supply system Phnom Penh, drainage system installation, sewage system Cambodia"
                />
            </Head>

            <style>{`
                .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease-out, transform 0.7s ease-out; will-change: opacity, transform; }
                .reveal-visible { opacity: 1; transform: translateY(0); }
                .hover-lift { transition: transform 0.25s ease-out, box-shadow 0.25s ease-out; }
                .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 12px 24px -8px rgba(12, 31, 63, 0.25); }
                .glass-card { background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.4); }
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
                            {heroTitle}
                        </h1>
                    </Reveal>
                    <Reveal delay={260}>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold opacity-100 mb-8 max-w-xl mx-auto">
                            Professional Plumbing System Installation Services
                            in Cambodia
                        </p>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] opacity-80 mb-8 max-w-xl mx-auto">
                            {heroDesc}
                        </p>
                    </Reveal>
                    <Reveal delay={340}>
                        <div className="flex flex-row sm:flex-row gap-4 justify-center">
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
                        Reliable Plumbing Solutions for Modern Buildings
                    </h2>
                    <p className="text-sm opacity-90 max-w-3xl mx-auto leading-relaxed">
                        Our plumbing engineering team delivers efficient and
                        reliable water supply, drainage, sewage, stormwater, and
                        plumbing support systems designed for long-term building
                        performance and operational safety.
                    </p>
                </section>
            </Reveal>

            {/*   Our Electrical & ELV Services Include  */}
            <section
                id="services-grid"
                className="py-16 px-4 md:px-6 max-w-7xl mx-auto"
            >
                <Reveal>
                    <h2 className="text-xl md:text-2xl font-bold text-[#1A3A5C] mb-8 text-start  ">
                        Our Plumbing Services <br />
                        Include:
                    </h2>
                </Reveal>

                <div className="flex flex-wrap justify-start gap-4 ">
                    {displayItems.map((item, index) => {
                        const points = item.points
                            ? Array.isArray(item.points)
                                ? item.points
                                : item.points
                                      .split("\n")
                                      .map((p) => p.trim())
                                      .filter(Boolean)
                            : [];

                        return (
                            <Reveal key={item.id || index} delay={index * 70}>
                                <div className="hover-lift bg-blue-50 rounded-xl p-2 h-full w-[160px] sm:w-[190px] md:w-[210px]">
                                    <div className="w-full h-[140px] rounded-lg overflow-hidden bg-gray-300 mb-2">
                                        {item.image ? (
                                            <img
                                                src={`/storage/${item.image}`}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-300" />
                                        )}
                                    </div>

                                    <h3 className="text-xs font-bold text-orange-500 mb-2 text-left">
                                        {item.title}
                                    </h3>

                                    <ul className="text-[11px] text-gray-600 space-y-1">
                                        {points.map((p, i) => (
                                            <li key={i}>• {p}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </section>
            {/* Benefits — static image */}
            <section className="bg-[#1A3A5C]/5 py-16 px-4 md:px-6">
                <Reveal>
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-[380px] shrink-0 bg-gray-100 rounded-2xl p-3">
                            <img
                                src="/image/whychoos.jpg"
                                alt={heroTitle}
                                className="hover-lift w-full aspect-[4/3] object-cover rounded-xl"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl md:text-2xl font-bold text-[#1A3A5C] mb-4">
                                Benefits of Professional Plumbing Systems
                            </h2>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Reliable water supply</li>
                                <li>• Efficient drainage systems</li>
                                <li>• Reduce water leakage risks</li>
                                <li>• Long-term durability</li>
                                <li>• Better hygiene &amp; sanitation</li>
                                <li>• Lower maintenance costs</li>
                            </ul>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Why Choose Us — Plumbing */}
            <section className="py-16 px-4 md:px-6 max-w-5xl mx-auto">
                <Reveal>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#039BE5] mb-2 text-center">
                        Why Choose Us
                    </h2>
                    <p className="text-orange-500 text-base font-bold mb-10 text-center">
                        Why Choose Master MEP for Plumbing Services?
                    </p>
                </Reveal>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    <Reveal delay={0}>
                        <div className="hover-lift border-2 border-[#039BE5] rounded-xl p-4 md:p-6 text-center h-full">
                            <p className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-2">
                                01
                            </p>
                            <p className="text-xs md:text-sm font-medium text-[#039BE5] min-h-[2.5rem] md:min-h-[2.75rem] flex items-center justify-center">
                                Experienced plumbing engineers
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={70}>
                        <div className="hover-lift border-2 border-[#039BE5] rounded-xl p-4 md:p-6 text-center h-full">
                            <p className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-2">
                                02
                            </p>
                            <p className="text-xs md:text-sm font-medium text-[#039BE5] min-h-[2.5rem] md:min-h-[2.75rem] flex items-center justify-center">
                                Quality piping materials
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={140}>
                        <div className="hover-lift border-2 border-[#039BE5] rounded-xl p-4 md:p-6 text-center h-full">
                            <p className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-2">
                                03
                            </p>
                            <p className="text-xs md:text-sm font-medium text-[#039BE5] min-h-[2.5rem] md:min-h-[2.75rem] flex items-center justify-center">
                                Reliable installation methods
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={210}>
                        <div className="hover-lift border-2 border-[#039BE5] rounded-xl p-4 md:p-6 text-center h-full">
                            <p className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-2">
                                04
                            </p>
                            <p className="text-xs md:text-sm font-medium text-[#039BE5] min-h-[2.5rem] md:min-h-[2.75rem] flex items-center justify-center">
                                Fast project delivery
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={280}>
                        <div className="hover-lift border-2 border-[#039BE5] rounded-xl p-4 md:p-6 text-center h-full">
                            <p className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-2">
                                05
                            </p>
                            <p className="text-xs md:text-sm font-medium text-[#039BE5] min-h-[2.5rem] md:min-h-[2.75rem] flex items-center justify-center">
                                Professional testing systems
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={350}>
                        <div className="hover-lift border-2 border-[#039BE5] rounded-xl p-4 md:p-6 text-center h-full">
                            <p className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-2">
                                06
                            </p>
                            <p className="text-xs md:text-sm font-medium text-[#039BE5] min-h-[2.5rem] md:min-h-[2.75rem] flex items-center justify-center">
                                Maintenance & after-sales support
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Featured Project Cards — sourced from FeatureProjectCard admin module (DB-driven) */}
            {displayProjects.length > 0 && (
                <section className="py-16 px-4 md:px-6 max-w-5xl mx-auto">
                    <Reveal>
                        <h2 className="text-xl md:text-2xl font-bold text-[#1A3A5C] mb-8">
                            Featured Projects
                        </h2>
                    </Reveal>

                    <div className="space-y-5">
                        {displayProjects.map((card, idx) => {
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
                                                className="w-full md:w-2/5 flex-shrink-0 min-h-[220px] object-cover"
                                            />
                                        ) : (
                                            <div
                                                className="w-full md:w-2/5 flex-shrink-0 min-h-[220px] flex flex-col items-center justify-center gap-3"
                                                style={{
                                                    background:
                                                        "linear-gradient(135deg, #0C2D4F 0%, #1E5BA8 100%)",
                                                }}
                                            >
                                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                                                    <Droplets
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
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A3A5C] hover:bg-[#0C2D4F] text-white rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                            >
                                Request Quotation
                            </Link>
                        </div>
                    </Reveal>
                </section>
            )}

            {/* Process */}
            <section className="py-16 px-4 md:px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <Reveal>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A5C] mb-1">
                            Process / Workflow
                        </h2>
                        <p className="text-orange-500 text-base font-bold leading-snug mb-12">
                            Our Plumbing
                            <br />
                            Engineering Process
                        </p>
                    </Reveal>

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
                        {[
                            { number: 1, label: "Site Inspection" },
                            { number: 2, label: "Plumbing Layout Design" },
                            { number: 3, label: "BOQ & Quotation" },
                            { number: 4, label: "Pipe Installation" },
                            { number: 5, label: "Pressure Testing" },
                            { number: 6, label: "System Commissioning" },
                            { number: 7, label: "Maintenance Support" },
                        ].map((step, i) => (
                            <Reveal key={step.number} delay={i * 60}>
                                <div
                                    className="relative bg-[#CBE5F3] rounded-2xl pt-10 pb-6 px-3 text-center hover-lift
                                   w-[160px] sm:w-[190px] md:w-[200px]
                                   min-h-[130px] sm:min-h-[140px] md:min-h-[150px]
                                   flex items-center justify-center"
                                >
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0C2D4F] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                                        {step.number}
                                    </div>
                                    <p className="text-sm font-medium text-[#039BE5]">
                                        {step.label}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <Reveal>
                        <h2 className="text-xl md:text-2xl font-bold text-[#1A3A5C] mb-8">
                            FAQs
                        </h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {staticFaqs.map((faq, i) => (
                            <Reveal key={i} delay={i * 60}>
                                <div className="hover-lift bg-white rounded-xl border border-gray-200 overflow-hidden">
                                    <button
                                        onClick={() =>
                                            setOpen(open === i ? null : i)
                                        }
                                        className="w-full flex justify-between items-center px-5 py-4 text-sm font-medium text-gray-800 text-left"
                                    >
                                        <span>{faq.q}</span>
                                        <span className="text-[#2E5C8A] ml-2 shrink-0">
                                            {open === i ? "▲" : "▶"}
                                        </span>
                                    </button>
                                    <div
                                        className="overflow-hidden transition-all duration-300 ease-out"
                                        style={{
                                            maxHeight:
                                                open === i ? "300px" : "0px",
                                        }}
                                    >
                                        <div className="px-5 pb-4 text-sm text-gray-600">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
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
                        {DEFAULTS.ctaTitle}
                    </h2>
                    <p className="text-sm opacity-80 mb-8">
                        {DEFAULTS.ctaDescription}
                    </p>
                    <Link
                        href="/contact"
                        className="btn-animate inline-block px-8 py-3 bg-[#2E5C8A] rounded-xl hover:bg-[#1A3A5C] transition-colors font-medium text-sm"
                    >
                        {ctaButton}
                    </Link>
                </Reveal>
            </section>
        </MepLayout>
    );
}
