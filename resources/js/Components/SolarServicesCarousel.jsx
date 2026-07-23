import { useEffect, useRef, useState } from "react";

export default function SolarServicesCarousel({
    services = [],
    title = "",
    subtitle = "",
}) {
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollStart = useRef(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const items = services.length > 0 ? services : [];

    const updateScrollState = () => {
        const el = scrollRef.current;
        if (!el) return;
        // Larger tolerance to absorb the few px of scrollLeft drift caused by
        // the container's own px-10/px-12 padding when scroll-snap rests at the start/end.
        const EDGE_TOLERANCE = 8;
        setCanScrollLeft(el.scrollLeft > EDGE_TOLERANCE);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - EDGE_TOLERANCE);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const onScroll = () => updateScrollState();
        const onEnd = () => updateScrollState();

        const ro = new ResizeObserver(() => updateScrollState());
        ro.observe(el);

        updateScrollState();
        el.addEventListener("scroll", onScroll, { passive: true });
        el.addEventListener("scrollend", onEnd);
        return () => {
            ro.disconnect();
            el.removeEventListener("scroll", onScroll);
            el.removeEventListener("scrollend", onEnd);
        };
    }, []);

    const scroll = (direction) => {
        const el = scrollRef.current;
        if (!el) return;
        if (direction === "left" && !canScrollLeft) return;
        if (direction === "right" && !canScrollRight) return;
        const { clientWidth } = el;
        const leftDistance = clientWidth * 0.8;
        const rightDistance = clientWidth * 0.8;
        el.scrollBy({
            left: direction === "left" ? -leftDistance : rightDistance,
            behavior: "smooth",
        });
    };

    const handlePointerDown = (e) => {
        const el = scrollRef.current;
        if (!el) return;
        isDragging.current = true;
        startX.current = e.clientX;
        scrollStart.current = el.scrollLeft;
        el.setPointerCapture(e.pointerId);
        el.classList.add("cursor-grabbing");
        el.classList.remove("cursor-grab");
    };

    const handlePointerMove = (e) => {
        const el = scrollRef.current;
        if (!isDragging.current || !el) return;
        const walk = e.clientX - startX.current;
        el.scrollLeft = scrollStart.current - walk;
    };

    const stopDragging = (e) => {
        const el = scrollRef.current;
        isDragging.current = false;
        if (!el) return;
        if (e?.pointerId != null) {
            try { el.releasePointerCapture(e.pointerId); } catch { }
        }
        el.classList.remove("cursor-grabbing");
        el.classList.add("cursor-grab");
        updateScrollState();
    };

    if (items.length === 0) return null;

    return (
        <div className="max-w-6xl mx-auto relative">
            {(title || subtitle) && (
                <div className="text-center mb-6 px-4">
                    {title && (
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className="text-xs sm:text-sm text-white/80">
                            {subtitle}
                        </p>
                    )}
                </div>
            )}

            {/* Left arrow */}
            <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                disabled={!canScrollLeft}
                className={`flex absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full items-center justify-center transition-colors hover:brightness-95 ${!canScrollLeft ? "opacity-40 cursor-not-allowed pointer-events-none" : ""
                    }`}
                style={{ backgroundColor: "#70B7DE" }}
            >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Scrollable cards */}
            <div
                ref={scrollRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={stopDragging}
                onPointerCancel={stopDragging}
                className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-mandatory pl-16 pr-16 sm:pl-20 sm:pr-12 pb-2 cursor-grab select-none touch-pan-y [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {items.map((service, i) => {
                    const points = Array.isArray(service.points)
                        ? service.points
                        : (service.points || "").split("\n").map((s) => s.trim()).filter(Boolean);
                    const imageSrc = service.image ? `/storage/${service.image}` : null;

                    return (
                        <div
                            key={service.id ?? i}
                            className="snap-start shrink-0 w-[70%] sm:w-[45%] md:w-[40%] lg:w-[28%] bg-[#EAF3FC] rounded-2xl p-3 sm:p-4"
                        >
                            <div className="w-full aspect-[4/3] rounded-xl bg-gray-300 mb-4 overflow-hidden pointer-events-none">
                                {imageSrc && (
                                    <img src={imageSrc} alt={service.title} className="w-full h-full object-cover" />
                                )}
                            </div>
                            <h3 className="text-orange-500 font-bold text-sm sm:text-base mb-3">
                                {service.title}
                            </h3>
                            <ul className="text-xs sm:text-sm text-gray-700 space-y-1.5">
                                {points.map((p, j) => (
                                    <li key={j}>• {p}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>

            {/* Right arrow */}
            <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                disabled={!canScrollRight}
                className={`flex absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full items-center justify-center transition-colors hover:brightness-95 ${!canScrollRight ? "opacity-40 cursor-not-allowed pointer-events-none" : ""
                    }`}
                style={{ backgroundColor: "#70B7DE" }}
            >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
