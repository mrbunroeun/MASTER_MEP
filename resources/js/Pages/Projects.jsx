import { useState, useRef, useEffect } from "react";
import MepLayout from "@/Layouts/MepLayout";
import { Head, Link } from "@inertiajs/react";
import {
    Building2,
    Hospital,
    Landmark,
    UtensilsCrossed,
    LayoutGrid,
    Hotel,
    Building,
} from "lucide-react";
import FadeIn from "@/Components/FadeIn";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function FuelPumpIcon({ size = 20 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3.5 21h8.5" />
            <rect x="5.5" y="7" width="6" height="14" rx="1" />
            <path d="M7 10.5h3" />
            <path d="M5.5 13h6" />
            <path d="M14.5 11.5V8a1.5 1.5 0 0 1 1.5-1.5h0.3" />
            <path d="M16.3 5.2l1.4 1.4" />
            <path d="M14.5 11.5h2a1 1 0 0 1 1 1v5.5a1 1 0 0 0 2 0V12" />
        </svg>
    );
}

const CATEGORY_META = [
    { label: "Commercial Buildings", icon: <Building2 size={20} /> },
    { label: "Hospitals", icon: <Hospital size={20} /> },
    { label: "Banks", icon: <Landmark size={20} /> },
    { label: "Restaurants & Cafés", icon: <UtensilsCrossed size={20} /> },
    { label: "Resort", icon: <Hotel size={20} /> },
    { label: "Condo/Villa", icon: <Building size={20} /> },
    { label: "Others", icon: <FuelPumpIcon size={20} /> },
];

const SLIDE_COLORS = ["#DCE8F5", "#E7DCF2", "#DCF2E4", "#F2ECDC", "#F2DCE4"];

function CategoryGallery({ images = [], category, variant = "card" }) {
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollStart = useRef(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const slots = images.filter(Boolean);

    const scrollToIndex = (index) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollTo({ left: el.clientWidth * index, behavior: "smooth" });
    };

    const scroll = (direction) => {
        const next =
            direction === "left"
                ? Math.max(activeIndex - 1, 0)
                : Math.min(activeIndex + 1, slots.length - 1);
        scrollToIndex(next);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const handleScroll = () => {
            const width = el.clientWidth || 1;
            const index = Math.round(el.scrollLeft / width);
            setActiveIndex(index);
        };
        el.addEventListener("scroll", handleScroll, { passive: true });
        return () => el.removeEventListener("scroll", handleScroll);
    }, [slots.length]);

    const handlePointerDown = (e) => {
        const el = scrollRef.current;
        if (!el) return;
        isDragging.current = true;
        startX.current = e.clientX;
        scrollStart.current = el.scrollLeft;
        el.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
        const el = scrollRef.current;
        if (!isDragging.current || !el) return;
        const walk = e.clientX - startX.current;
        el.scrollLeft = scrollStart.current - walk;
    };

    const stopDragging = (e) => {
        isDragging.current = false;
        const el = scrollRef.current;
        if (el && e?.pointerId != null) {
            try {
                el.releasePointerCapture(e.pointerId);
            } catch {}
        }
    };

    const containerClass =
        variant === "banner"
            ? "relative w-full h-[260px] sm:h-[320px] md:h-[380px] rounded-2xl overflow-hidden mb-6 sm:mb-8 shadow-md"
            : "relative w-full h-full min-h-[220px] rounded-2xl overflow-hidden";

    return (
        <div className={containerClass}>
            <div
                ref={scrollRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={stopDragging}
                onPointerCancel={stopDragging}
                className="flex h-full overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none touch-pan-y [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {slots.map((img, i) => (
                    <div
                        key={i}
                        className="snap-start shrink-0 w-full h-full min-h-[220px] flex items-center justify-center"
                        style={{
                            backgroundColor:
                                SLIDE_COLORS[i % SLIDE_COLORS.length],
                        }}
                    >
                        {img ? (
                            <img
                                src={img}
                                alt={`${category} - image ${i + 1}`}
                                className="w-full h-full object-cover object-center pointer-events-none"
                                draggable={false}
                            />
                        ) : (
                            <span className="text-sm font-medium text-[#1A3A5C]/50">
                                Image {i + 1}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <button
                onClick={() => scroll("left")}
                aria-label="Previous image"
                disabled={activeIndex === 0}
                className={`absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#ffffff] hover:bg-[#d9d9d9] flex items-center justify-center shadow-md transition-colors ${
                    activeIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
                }`}
            >
                <svg
                    className="w-4 h-4 text-[#1A3A5C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button
                onClick={() => scroll("right")}
                aria-label="Next image"
                disabled={activeIndex >= slots.length - 1}
                className={`absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#ffffff] hover:bg-[#d9d9d9] flex items-center justify-center shadow-md transition-colors ${
                    activeIndex >= slots.length - 1
                        ? "opacity-40 cursor-not-allowed"
                        : ""
                }`}
            >
                <svg
                    className="w-4 h-4 text-[#1A3A5C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {slots.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollToIndex(i)}
                        aria-label={`Go to image ${i + 1}`}
                        className="p-1"
                    >
                        <span
                            className="block rounded-full transition-all duration-200"
                            style={{
                                width: activeIndex === i ? "18px" : "6px",
                                height: "6px",
                                backgroundColor:
                                    activeIndex === i
                                        ? "#FFFFFF"
                                        : "rgba(255,255,255,0.55)",
                            }}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

function ProjectImageCarousel({ images = [], category }) {
    const slots = images.filter(Boolean);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", slidesToScroll: 1 },
        [
            Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            }),
        ],
    );

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    return (
        <div
            role="region"
            aria-label={`${category} — image gallery`}
            className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] min-h-[220px] rounded-2xl overflow-hidden bg-[#F2F2F2] group"
        >
            <div ref={emblaRef} className="overflow-hidden h-full">
                <div className="flex h-full">
                    {slots.map((img, i) => (
                        <div
                            key={i}
                            className="flex-[0_0_100%] min-w-0 h-full px-1.5"
                        >
                            <div
                                className="w-full h-full flex items-center justify-center rounded-xl overflow-hidden"
                                style={{
                                    backgroundColor:
                                        SLIDE_COLORS[i % SLIDE_COLORS.length],
                                }}
                            >
                                {img ? (
                                    <img
                                        src={img}
                                        alt={`${category} — image ${i + 1}`}
                                        className="w-full h-full object-cover object-center pointer-events-none"
                                        draggable={false}
                                    />
                                ) : (
                                    <span className="text-sm font-medium text-[#1A3A5C]/50">
                                        Image {i + 1}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollPrev}
                aria-label="Previous image"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-[#d9d9d9] flex items-center justify-center shadow-md transition-colors z-10"
            >
                <svg
                    className="w-4 h-4 text-[#1A3A5C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button
                onClick={scrollNext}
                aria-label="Next image"
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-[#d9d9d9] flex items-center justify-center shadow-md transition-colors z-10"
            >
                <svg
                    className="w-4 h-4 text-[#1A3A5C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    );
}

function ProjectCard({ project }) {
    const scopeItems = Array.isArray(project.scope)
        ? project.scope
        : (project.scope || project.description || "")
              .split("\n")
              .map((s) => s.trim())
              .filter(Boolean);

    // Gallery images belong to THIS project (project.gallery), not shared
    // across every project in the same category. Filter out empty slots.
    const galleryImages = (project.gallery || []).filter(Boolean);

    return (
        <div
            className="rounded-[20px] overflow-hidden shadow-lg flex flex-col md:flex-row min-h-[280px]"
            style={{
                background: "linear-gradient(90deg,#063A72 0%,#0E67D1 100%)",
            }}
        >
            <div className="w-full md:w-[46%] p-8">
                <ProjectImageCarousel
                    images={galleryImages}
                    category={project.title}
                />
            </div>

            <div className="w-full md:w-[54%] px-8 py-8 flex flex-col text-white">
                <div>
                    <h3 className="text-[22px] md:text-[24px] font-bold leading-[30px] mb-4">
                        {project.title}
                    </h3>
                    <p className="font-bold text-[14px] mb-1">Scope of work:</p>
                    <div className="text-[14px] leading-7 text-white/95">
                        {scopeItems.length > 0 ? (
                            scopeItems.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))
                        ) : (
                            <p>TBC</p>
                        )}
                    </div>
                </div>
                <div className="mt-auto pt-6 text-[14px] text-white/90">
                    {project.location && <p>Location : {project.location}</p>}
                    {project.timeline && <p>Timeline: {project.timeline}</p>}
                </div>
            </div>
        </div>
    );
}

export default function Projects({ projects = [], heroImage = null }) {
    const params = new URLSearchParams(window.location.search);
    const [activeCategory, setActiveCategory] = useState(
        params.get("category") || "All",
    );
    const heroSecImage = "/HeroSection/heroSection.png";

    const grouped = projects.reduce((acc, p) => {
        const cat = p.category || "General";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(p);
        return acc;
    }, {});

    const knownOrder = CATEGORY_META.map((c) => c.label);
    const groupedArray = Object.entries(grouped)
        .sort(([a], [b]) => {
            const ai = knownOrder.indexOf(a);
            const bi = knownOrder.indexOf(b);
            if (ai === -1 && bi === -1) return a.localeCompare(b);
            if (ai === -1) return 1;
            if (bi === -1) return -1;
            return ai - bi;
        })
        .map(([category, items]) => ({ category, items }));

    const filteredGroups =
        activeCategory === "All"
            ? groupedArray
            : groupedArray.filter((g) => g.category === activeCategory);

    const handleCategory = (cat) => {
        setActiveCategory(cat);
        const url =
            cat === "All"
                ? "/projects"
                : `/projects?category=${encodeURIComponent(cat)}`;
        window.history.pushState({}, "", url);
    };

    const filterBtn = (isActive) =>
        `flex flex-col items-center justify-center gap-2 rounded-2xl
   text-xs font-medium transition-all duration-200
   px-3 py-4 hover:scale-105 active:scale-95
   w-[100px] sm:w-[115px] md:w-[130px]
   ${isActive ? "bg-white text-[#1A3A5C] shadow-md font-semibold" : "bg-white/15 text-white hover:bg-white/25"}`;

    return (
        <MepLayout>
            <Head title="Our Projects — Master MEP" />

            {/* HERO */}
            <section
                className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] bg-cover bg-center bg-no-repeat flex items-center"
                style={{
                    backgroundImage: `url(${heroSecImage})`,
                    backgroundPosition: "center center",
                }}
            >
                <div className="absolute inset-0 bg-black/55" />
                <div className="relative z-10 w-full max-w-3xl mx-auto px-5 sm:px-8 md:px-16 py-12 sm:py-16">
                    <div className="text-white text-center mx-auto">
                        <FadeIn delay={0}>
                            <p className="text-3xl sm:text-4xl md:text-[50px] tracking-[0.1em] font-semibold text-white mb-1">
                                MASTER MEP
                            </p>
                            <p className="text-[10px] sm:text-xs tracking-[0.5em] sm:tracking-[1em] text-[#96DCFF] mb-6 sm:mb-8">
                                SOLUTION
                            </p>
                        </FadeIn>
                        <FadeIn delay={150}>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3 sm:mb-4">
                                Our MEP Engineering Projects
                            </h1>
                        </FadeIn>
                        <FadeIn delay={300}>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white/70 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto">
                                Master MEP has completed a wide range of
                                engineering projects including HVAC, electrical,
                                plumbing, ELV, and MEP design across Cambodia.
                            </p>
                        </FadeIn>
                        <FadeIn delay={450}>
                            <div className="flex flex-row gap-3 justify-center">
                                <Link
                                    href={
                                        activeCategory &&
                                        activeCategory !== "All"
                                            ? `/contact?category=${encodeURIComponent(activeCategory)}`
                                            : "/contact"
                                    }
                                    className="inline-block px-8 py-3 bg-blue-900 rounded-xl hover:bg-blue-800 transition font-medium text-sm"
                                >
                                    Request Quotation
                                </Link>
                                <Link
                                    href={
                                        activeCategory &&
                                        activeCategory !== "All"
                                            ? `/contact?category=${encodeURIComponent(activeCategory)}`
                                            : "/contact"
                                    }
                                    className="inline-block px-8 py-3 bg-blue-900 rounded-xl hover:bg-blue-800 transition font-medium text-sm"
                                >
                                    Book Site Inspection
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
            {/* CATEGORY FILTER */}
            <FadeIn>
                <section
                    className="relative z-10 -mt-10 mx-3 sm:mx-6 md:mx-10 lg:mx-16 rounded-2xl shadow-xl py-10 px-6 sm:px-10"
                    style={{
                        background:
                            "linear-gradient(135deg, #0C2D4F 0%, #1E5BA8 100%)",
                    }}
                >
                    <h2 className="text-white text-center font-bold text-sm sm:text-base mb-8 tracking-wide">
                        Featured MEP Projects
                    </h2>
                    <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <button
                            onClick={() => handleCategory("All")}
                            className={`flex flex-col items-center justify-center gap-3 rounded-2xl py-5 px-2 transition-all duration-200 hover:scale-105 active:scale-95
          ${activeCategory === "All" ? "bg-white text-[#1A3A5C] shadow-md" : "bg-white/10 text-white hover:bg-white/20"}`}
                        >
                            <LayoutGrid size={26} />
                            <span className="text-xs font-medium text-center leading-tight">
                                All
                            </span>
                        </button>

                        {CATEGORY_META.map((cat) => (
                            <button
                                key={cat.label}
                                onClick={() => handleCategory(cat.label)}
                                className={`flex flex-col items-center justify-center gap-3 rounded-2xl py-5 px-2 transition-all duration-200 hover:scale-105 active:scale-95
            ${activeCategory === cat.label ? "bg-white text-[#1A3A5C] shadow-md" : "bg-white/10 text-white hover:bg-white/20"}`}
                            >
                                {cat.icon}
                                <span className="text-xs font-medium text-center leading-tight">
                                    {cat.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </section>
            </FadeIn>

            {/* PROJECT LISTINGS */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto space-y-12 sm:space-y-16">
                {filteredGroups.length > 0 ? (
                    filteredGroups.map((group, groupIndex) => (
                        <div key={group.category}>
                            <FadeIn delay={groupIndex * 50}>
                                <div className="mb-5 sm:mb-6">
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A3A5C]">
                                        {group.category}
                                    </h2>
                                    <div className="mt-1.5 w-10 h-[3px] rounded-full bg-orange-500" />
                                </div>
                            </FadeIn>
                            <div className="space-y-4">
                                {group.items.map((project, i) => (
                                    <FadeIn key={project.id} delay={i * 80}>
                                        <ProjectCard project={project} />
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20">
                        <Building2
                            size={40}
                            className="mx-auto text-gray-300 mb-3"
                        />
                        <p className="text-gray-400 text-sm">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </section>

            {/* CTA */}
            <section
                className="relative py-16 sm:py-20 bg-cover bg-center text-white text-center"
                style={{
                    backgroundImage: `url(${heroSecImage})`,
                    backgroundPosition: "center center",
                }}
            >
                <div className="absolute inset-0 bg-black/55" />
                <FadeIn className="relative z-10 max-w-2xl mx-auto px-5 sm:px-6">
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 leading-tight">
                        Trusted by Leading Brands in Cambodia
                    </h2>
                    <p className="text-xs sm:text-sm opacity-80 mb-6 sm:mb-8 leading-relaxed">
                        Master MEP has worked with leading brands, banks,
                        restaurants, hospitals, retail stores, and commercial
                        developers in Cambodia.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-3 bg-blue-900 rounded-xl hover:bg-blue-800 transition font-medium text-sm"
                        >
                            Request Quotation
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-3 bg-blue-900 rounded-xl hover:bg-blue-800 transition font-medium text-sm"
                        >
                            Contact MEP Team
                        </Link>
                    </div>
                </FadeIn>
            </section>
        </MepLayout>
    );
}
