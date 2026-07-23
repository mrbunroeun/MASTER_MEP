export default function Partners({ partners = [] }) {
    const list = partners.length > 0 ? partners : [];
    const doubled = [...list, ...list];

    return (
        <section className="py-16 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 mb-8">
                <h2 className="text-xl font-bold text-[#1A3A5C] text-center"></h2>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Left fade */}
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                {/* Right fade */}
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div
                    className="flex gap-8 animate-scroll hover:[animation-play-state:paused]"
                    style={{ width: "max-content" }}
                >
                    {doubled.map((p, i) => (
                        <div
                            key={i}
                            className="w-36 h-20 rounded-xl flex items-center justify-center p-3 flex-shrink-0 hover:border-[#1A3A5C] hover:shadow-md transition-all duration-300"
                        >
                            <img
                                src={`/storage/${p.logo}`}
                                alt={p.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}