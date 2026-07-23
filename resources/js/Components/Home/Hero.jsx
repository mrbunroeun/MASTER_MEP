import { Link } from "@inertiajs/react";
import FadeIn from "@/Components/FadeIn";

export default function Hero() {
    const image = "/HeroSection/heroSection.png";

    return (
        <section
            className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] bg-cover bg-no-repeat flex items-start sm:items-center justify-center text-white max-[400px]:pt-[20px] min-[400px]:max-[430px]:pt-24 min-[431px]:pt-[90px] sm:pt-0"
            style={{
                backgroundImage: `url('${image}')`,
                backgroundPosition: "center center",
            }}
        >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto w-full">
                <FadeIn delay={0}>
                    <p className="text-3xl sm:text-4xl md:text-[50px] tracking-[0.1em] font-semibold text-white mb-1">
                        MASTER MEP
                    </p>
                    <p className="text-[10px] sm:text-xs tracking-[0.5em] sm:tracking-[1em] text-[#96DCFF] mb-6 sm:mb-8">
                        SOLUTION
                    </p>
                </FadeIn>

                <FadeIn delay={150}>
                    <h1 className="text-2xl sm:text-3xl max-w-[1700px] mx-auto md:text-5xl font-bold leading-tight text-white mb-4 sm:mb-6">
                        Professional MEP Engineering & Installation Company in
                        Cambodia
                    </h1>
                </FadeIn>

                <FadeIn delay={300}>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-200 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                        Master MEP Solution Co., Ltd provides professional
                        Mechanical, Electrical, Plumbing (MEP), HVAC, ELV, Fire
                        Protection, and Maintenance Services for commercial
                        buildings, villas, banks, restaurants, hospitals, and
                        industrial projects across Cambodia.
                    </p>
                </FadeIn>

                <FadeIn delay={450}>
                    <div className="relative z-10 flex flex-row gap-3 sm:gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-900 rounded-xl hover:bg-blue-800 transition font-medium text-xs sm:text-sm"
                        >
                            Request Quotation
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-900 rounded-xl hover:bg-blue-800 transition font-medium text-xs sm:text-sm"
                        >
                            Book Site Inspection
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
