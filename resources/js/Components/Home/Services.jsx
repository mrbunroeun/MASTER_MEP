import { Link } from "@inertiajs/react";
import { Wind, Zap, Droplets } from "lucide-react";
import FadeIn from "@/Components/FadeIn";

const staticServices = [
    {
        title: "Mechanical System Services",
        eyebrow: "Mechanical\nSystem Services",
        icon: <Wind size={42} className="text-white/90" />,
        gradient: "linear-gradient(135deg, #0C2D4F 0%, #1E5BA8 100%)",
        description:
            "Professional air conditioning, VRV/VRF, chiller systems, ventilation systems, cold rooms, ducting, and fire protection installation services.",
        button: "Learn More About\nMechanical Systems",
        href: "/services/mechanical",
        type: "mechanical",
        align: "right",
    },
    {
        title: "Electrical & ELV Services",
        eyebrow: "Electrical & ELV\nSystem Services",
        icon: <Zap size={42} className="text-white/90" />,
        gradient: "linear-gradient(135deg, #1A3A5C 0%, #2E6BAA 100%)",
        description:
            "Complete LV & ELV systems including CCTV, fire alarm, LAN, WiFi, solar, automation, and smart lighting.",
        button: "Explore Electrical\nServices",
        href: "/services/electrical",
        type: "electrical",
        align: "left",
    },
    {
        title: "Plumbing Services",
        eyebrow: "Plumbing\nSystem Services",
        icon: <Droplets size={42} className="text-white/90" />,
        gradient: "linear-gradient(135deg, #0C2D4F 0%, #1E5BA8 100%)",
        description:
            "Water supply, drainage, sewage, rainwater systems, water treatment, and tank installation services.",
        button: "View Plumbing\nSolutions",
        href: "/services/plumbing",
        type: "plumbing",
        align: "right",
    },
    {
        title: "Air Conditioner Maintenance",
        eyebrow: " Air Conditioner\nMaintenance",
        icon: <Zap size={42} className="text-white/90" />,
        gradient: "linear-gradient(135deg, #1A3A5C 0%, #2E6BAA 100%)",
        description:
            "Preventive air conditioning maintenance, professional cleaning, system inspections, and performance testing to improve efficiency, reduce breakdowns, and extend equipment lifespan.",
        button: "Explore AC Maintenance\n Service",
        href: "/services/maintenance",
        type: "maintenance",
        align: "left",
    },
    {
        title: "Solar System Installation",
        eyebrow: "Solar System\nInstallation",
        icon: <Droplets size={42} className="text-white/90" />,
        gradient: "linear-gradient(135deg, #0C2D4F 0%, #1E5BA8 100%)",
        description:
            "Design, supply, and installation of On-Grid, Off-Grid, and Hybrid solar systems for homes, businesses, and industrial facilities to reduce energy costs and improve energy independence.",
        button: "View Solar System\n Solutions",
        href: "/services/solasystem",
        type: "solasystem",
        align: "right",
    },
];

export default function Services({ services = [], pageHeader = null }) {
    const list = staticServices.map((s) => {
        const db = services.find((d) => d.type === s.type);
        return {
            ...s,
            title: db?.title || s.title,
            description: db?.description || s.description,
            button: db?.button_text || s.button,
            href: db?.button_link || s.href,
            image: db?.image ? `/storage/${db.image}` : null,
        };
    });

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <FadeIn>
                    <div className="max-w-2xl mb-16 mt-10 md:mt-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1A3A5C] leading-tight">
                            {pageHeader?.title ?? (
                                <>
                                    Core Services
                                    <br />
                                    Overview
                                </>
                            )}
                        </h2>
                    </div>
                </FadeIn>

                <div className="space-y-20">
                    {list.map((service, index) => {
                        const isRight = service.align === "right";

                        return (
                            <FadeIn
                                key={index}
                                delay={index * 120}
                                direction={isRight ? "right" : "left"}
                            >
                                <div
                                    className={`grid md:grid-cols-2 gap-14 items-start`}
                                >
                                    {/* Image — alternates left/right based on align */}
                                    <div
                                        className={
                                            isRight
                                                ? "md:order-2"
                                                : "md:order-1"
                                        }
                                    >
                                        {/* Outer padded gray "frame" card, matches reference design */}
                                        <div
                                            className={`p-4 h-[320px] flex items-center justify-center ${
                                                isRight
                                                    ? "rounded-tr-[3rem]"
                                                    : "rounded-tl-[3rem]"
                                            }`}
                                        >
                                            <div
                                                className={`group relative overflow-hidden w-full h-full shadow-lg bg-[#d7d7d7] ${
                                                    isRight
                                                        ? "rounded-tr-[2.5rem]"
                                                        : "rounded-tl-[2.5rem]"
                                                }`}
                                            >
                                                {service.image ? (
                                                    <img
                                                        src={service.image}
                                                        alt={service.title}
                                                        className="absolute inset-0 w-full h-full object-fill bg-[#d7d7d7] transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div
                                                        className="w-full h-full flex flex-col items-center justify-center gap-4"
                                                        style={{
                                                            background:
                                                                service.gradient,
                                                        }}
                                                    >
                                                        {service.icon}
                                                        <p className="text-white/80 text-sm">
                                                            {service.title}
                                                        </p>
                                                    </div>
                                                )}

                                                {/* overlay hover */}
                                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text — alternates opposite of image */}
                                    <div
                                        className={`pt-8 md:pt-12 ${isRight ? "md:order-1" : "md:order-2"}`}
                                    >
                                        <p className="text-orange-500 font-bold text-lg md:text-xl leading-snug mb-4">
                                            {service.eyebrow
                                                .split("\n")
                                                .map((line, i) => (
                                                    <span
                                                        key={i}
                                                        className="block"
                                                    >
                                                        {line}
                                                    </span>
                                                ))}
                                        </p>

                                        <p className="text-gray-800 font-medium leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        <Link
                                            href={service.href}
                                            className="inline-block text-center px-7 py-3 bg-gradient-to-r from-[#1A3A5C] to-[#2E6BAA] text-white rounded-xl hover:from-[#0F2A47] hover:to-[#1E5BA8] active:text-white focus:text-white transition-colors font-semibold text-sm leading-snug shadow-md max-w-[220px]"
                                        >
                                            {service.button
                                                .split("\n")
                                                .map((line, i, arr) => (
                                                    <span key={i}>
                                                        {line}
                                                        {i < arr.length - 1 && (
                                                            <br />
                                                        )}
                                                    </span>
                                                ))}
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
