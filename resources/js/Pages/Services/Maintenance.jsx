import { useState, useEffect, useRef } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import MepLayout from "@/Layouts/MepLayout";
import SolarServicesCarousel from "@/Components/SolarServicesCarousel";
import {
    Zap,
    Lightbulb,
    Shield,
    Battery,
    Cpu,
    Radio,
    Wrench,
} from "lucide-react";

// Fallback content used only when the admin hasn't added any maintenance service items yet
const DEFAULT_MAINTENANCE_SERVICES = [
    {
        title: "General Inspection",
        points: [
            "Visual inspection of indoor and outdoor units",
            "Check operating condition",
            "Check abnormal vibration and noise",
            "Inspect electrical components",
        ],
    },
    {
        title: "Professional Cleanings",
        points: [
            "Clean evaporator coil",
            "Clean condenser coil",
            "Clean air filters",
            "Clean drain pipe",
            "Clean drainage tray",
            "Remove dust and debris",
        ],
    },
    {
        title: "Performance Testing",
        points: [
            "Temperature measurement",
            "Refrigerant pressure check",
            "Electrical current testing",
            "Compressor inspection",
            "Fan motor inspection",
            "Airflow testing",
        ],
    },
    {
        title: "Preventive Maintenance",
        points: [
            "Tighten electrical connections",
            "Lubricate moving components (where applicable)",
            "Check refrigerant leakage",
            "Inspect insulation",
            "Verify system safety",
        ],
    },
    {
        title: "Service Report",
        points: [
            "Inspection checklist",
            "Performance report",
            "Recommended repairs (if required)",
            "Photos before and after service",
            "Maintenance history",
        ],
    },
];

const STATIC_ITEMS = [
    {
        icon: <Zap className="w-10 h-10 text-white" />,
        title: "Electrical Systems (LV)",
        points: [
            "Main power supply (MV/LV)",
            "Transformer installation",
            "MDB / SMDB / DB",
            "Cable tray & wiring",
            "Generator & UPS",
            "Battery backup systems",
        ],
    },
    {
        icon: <Lightbulb className="w-10 h-10 text-white" />,
        title: "Lighting Systems",
        points: [
            "Indoor lighting",
            "Outdoor & landscape lighting",
            "Emergency lighting",
            "Smart lighting control",
        ],
    },
    {
        icon: <Shield className="w-10 h-10 text-white" />,
        title: "Security & Safety (ELV)",
        points: [
            "CCTV systems",
            "Access control",
            "Intrusion alarm",
            "Fire Alarm System",
            "Earthing & LPS",
        ],
    },
    {
        icon: <Radio className="w-10 h-10 text-white" />,
        title: "Communication Systems",
        points: [
            "LAN cabling",
            "Wi-Fi installation",
            "Telephone (PABX)",
            "Sound (PA system)",
            "BMS systems",
        ],
    },
    {
        icon: <Cpu className="w-10 h-10 text-white" />,
        title: "Building Management",
        points: [
            "BMS installation",
            "Smart building systems",
            "Energy monitoring",
        ],
    },
    {
        icon: <Battery className="w-10 h-10 text-white" />,
        title: "Backup Power Systems",
        points: [
            "Generator installation",
            "UPS systems",
            "Battery backup",
            "Synchronization",
        ],
    },
];
const highlights = [
    { number: "01", label: "Experienced electrical engineers" },
    { number: "02", label: "International standard installation" },
    { number: "03", label: "Professional project management" },
    { number: "04", label: "Quality installation materials" },
    { number: "05", label: "Reliable testing & commissioning" },
    { number: "06", label: "Strong after-sales support" },
];
// Generic item shape (matches admin form): { title, subtitle, description, points, image }
// subtitle = frequency, description = "suitable for" list (one per line), points = "includes" list (one per line)
const DEFAULT_PACKAGES = [
    {
        title: "Basic Package",
        subtitle: "Every 6 months",
        description: "Small offices\nRetail shops\nResidential Villas",
        points: "General Inspection\nAir Conditioner Cleaning\nMaintenance Report",
    },
    {
        title: "Standard Package",
        subtitle: "Every 4 months",
        description: "Medium-sized offices\nRestaurants\nClinics\nSchools",
        points: "Everything in Basic\nMore frequent inspections\nPriority scheduling",
    },
    {
        title: "Premium Package",
        subtitle: "Every 3 months",
        description:
            "Factories\nHotels\nHospitals\nData centers\nCommercial buildings",
        points: "Maximum preventive maintenance\nPriority technical support\nDetailed performance reporting\nReduced risk of system failure",
    },
];

function parseLines(text) {
    return (text || "")
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);
}
const DEFAULTS = {
    title: "Annual Maintenance Service",
    description: "Annual Air Conditioner Maintenance Service (AMS) in Cambodia",
    bannerTitle:
        "Reliable Maintenance Solutions for Long-Term Building Performance",
    bannerDescription:
        "Protect your air conditioning investment with professional preventive maintenance. Master MEP Solution helps businesses improve cooling performance, reduce energy costs, and extend equipment lifespan through scheduled maintenance programs.",
    overviewLabel: "Electrical & ELV\nSystem Services",
    overviewDescription:
        "Professional power distribution, lighting, CCTV, fire alarm, access control, LAN cabling, and BMS installation services for commercial and industrial projects.",
    overviewButton: "Request HVAC Consultation",
    benefitsTitle: "Benefits of Professional Electrical Systems",
    benefitsPoints:
        "Improve operational safety\nReliable power distribution\nBetter security systems\nEnergy-efficient lighting\nReduced downtime risks\nLong-term building reliability",
    ctaTitle: "Need Reliable MEP Maintenance Support?",
    ctaDescription:
        "Master MEP provides preventive maintenance, troubleshooting, and emergency support services for HVAC, electrical, plumbing, and ELV systems across Cambodia.",
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

export default function Maintenance({
    service,
    serviceItems = [],
    featureProjectCards = [],
    heroImage = null,
    keyHighlights = [],
}) {
    const [open, setOpen] = useState(null);
    const [contractOpen, setContractOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        contract_duration: "",
        company_name: "",
        contact_person: "",
        position: "",
        phone_number: "",
        email_address: "",
        office_address: "",
        site_name: "",
        site_address: "",
        operating_hours: "",
        service_package: "",
    });

    const getFieldError = (key, value) => {
        const val = value?.trim();
        if (!val) return true;
        switch (key) {
            case "email_address":
                return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
            case "phone_number":
                return !/^\+?[\d\s\-()]{7,15}$/.test(val);
            default:
                return val.length < 2;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        const required = [
            "contract_duration",
            "company_name",
            "contact_person",
            "position",
            "phone_number",
            "email_address",
            "office_address",
            "site_name",
            "site_address",
            "operating_hours",
            "service_package",
        ];
        const firstInvalid = required.find((key) =>
            getFieldError(key, data[key]),
        );
        if (firstInvalid) {
            alert("Please fill in all required fields with valid information.");
            return;
        }

        let message =
            `New AMS Registration:\n\n` +
            `Contract Duration: ${data.contract_duration}\n\n` +
            `Customer Information:\n` +
            `Company Name: ${data.company_name}\n` +
            `Contact Person: ${data.contact_person}\n` +
            `Position: ${data.position}\n` +
            `Phone Number: ${data.phone_number}\n` +
            `Email Address: ${data.email_address}\n` +
            `Office Address: ${data.office_address}\n\n` +
            `Service Location:\n` +
            `Site Name: ${data.site_name}\n` +
            `Site Address: ${data.site_address}\n` +
            `Operating Hours: ${data.operating_hours}\n\n` +
            `Service Package: ${data.service_package}`;

        let encoded = encodeURIComponent(message);
        let telegramUrl = `https://t.me/+85570318179?text=${encoded}`;
        window.open(telegramUrl, "_blank");
        reset();
        setSubmitted(false);
    };

    // Hero background is dynamic (admin-uploaded service.image -> heroImage prop -> static fallback);
    // title and tagline remain static for this page
    const heroSecImage = service?.image
        ? `/storage/${service.image}`
        : heroImage || "/HeroSection/heroSection.png";

    const bgImage = service?.image ? `/storage/${service.image}` : heroImage;
    const heroTitle = DEFAULTS.title;
    const heroDesc = DEFAULTS.description;
    const displayItems = serviceItems.length > 0 ? serviceItems : STATIC_ITEMS;
    const displayHighlights =
        keyHighlights.length > 0 ? keyHighlights : highlights;

    // "Our Maintenance Services" carousel content — sourced from serviceItems (built by ServiceController::show()
    // from service.items, which is exactly what the admin "Service Items (grid cards)" editor manages, image included),
    // falls back to DEFAULT_MAINTENANCE_SERVICES only if no items have been added yet
    const displayMaintenanceServices =
        serviceItems.length > 0 ? serviceItems : DEFAULT_MAINTENANCE_SERVICES;

    // Dynamic Service Packages, sourced from services.items (falls back to defaults)
    const packages =
        service?.items?.length > 0 ? service.items : DEFAULT_PACKAGES;

    const benefitsTitle = service?.benefits_title ?? DEFAULTS.benefitsTitle;
    const benefitsPointsRaw =
        service?.benefits_points ?? DEFAULTS.benefitsPoints;
    const benefitsPoints = (benefitsPointsRaw || "")
        .split("\n")
        .map((p) => p.trim())
        .filter(Boolean);

    const overviewLabelLines = DEFAULTS.overviewLabel.split("\n");

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

    return (
        <MepLayout>
            <Head title={`${heroTitle} — Master MEP`}>
                <meta name="description" content={heroDesc} />
                <meta
                    name="keywords"
                    content="electrical engineering Cambodia, ELV system installation Phnom Penh, electrical contractor Cambodia, CCTV fire alarm installation"
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
                    backgroundImage: `url(${heroSecImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
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
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] opacity-80 mb-8 max-w-xl mx-auto">
                            {heroDesc}
                        </p>
                    </Reveal>
                    <Reveal delay={340}>
                        <div className="flex flex-row sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => {
                                    const el =
                                        document.getElementById(
                                            "contract-duration",
                                        );
                                    if (el)
                                        el.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                }}
                                className="inline-block px-8 py-3 bg-blue-900 rounded-xl hover:bg-blue-800 transition font-medium text-sm"
                            >
                                Register for AMS Request
                            </button>
                            <a
                                href="/contact"
                                className="inline-block px-8 py-3 bg-blue-900 rounded-xl hover:bg-blue-800 transition font-medium text-sm"
                            >
                                Free Site Survey
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
                        {DEFAULTS.bannerTitle}
                    </h2>
                    <p className="text-sm opacity-90 max-w-3xl mx-auto leading-relaxed">
                        {DEFAULTS.bannerDescription}
                    </p>
                    <a
                        href="/download service agreement.png"
                        download="download service agreement.png"
                        className="inline-block px-6 text-[#1d4984] mt-[1rem] sm:px-8 py-2.5 sm:py-3 bg-white rounded-xl hover:bg-blue-800 hover:text-white transition font-medium text-xs sm:text-sm"
                    >
                        Download Service Agreement
                    </a>
                </section>
            </Reveal>

            {/* Overview */}
            <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
                <Reveal>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A3A5C] mb-2">
                        Overview
                    </h2>
                    <p className="text-orange-500 font-bold text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                        Keep Your Air Conditioning System Running at Peak
                        Performance
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                        Master MEP Solution's Annual Maintenance Service (AMS)
                        is a preventive maintenance program designed for
                        commercial buildings, offices, factories, hotels,
                        hospitals, schools, retail stores, and industrial
                        facilities. Our certified technicians perform scheduled
                        inspections, professional cleaning, system testing, and
                        preventive maintenance to minimize unexpected breakdowns
                        while maximizing operational efficiency.
                    </p>
                </Reveal>
            </section>

            {/* Why Annual Maintenance Matters */}
            <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 sm:py-16">
                <Reveal>
                    <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden">
                        <div className="w-full md:w-[45%] shrink-0">
                            <img
                                src="/Services/Maintainent/ARman.png"
                                alt="Technician performing AC maintenance"
                                className="w-full h-full object-cover aspect-[4/3] md:aspect-auto"
                            />
                        </div>

                        <div className="w-full md:w-[55%] bg-[#CFE7F6] p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A3A5C] mb-2 sm:mb-3 leading-snug">
                                Why Annual Maintenance Matters
                            </h2>
                            <p className="text-orange-500 text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
                                Regular maintenance provides significant
                                long-term benefits, including:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 sm:gap-y-2">
                                <ul className="text-xs sm:text-sm text-[#1A3A5C] space-y-1.5 sm:space-y-2 list-disc list-inside">
                                    <li>Lower electricity consumption</li>
                                    <li>Improved cooling performance</li>
                                    <li>Longer equipment lifespan</li>
                                    <li>Reduced emergency repair costs</li>
                                </ul>
                                <ul className="text-xs sm:text-sm text-[#1A3A5C] space-y-1.5 sm:space-y-2 list-disc list-inside">
                                    <li>Better indoor air quality</li>
                                    <li>
                                        Early detection of potential failures
                                    </li>
                                    <li>Reduced business downtime</li>
                                    <li>
                                        Manufacturer-recommended preventive
                                        maintenance
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Who Should Enroll */}
            <section className="py-16 px-4 md:px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <Reveal>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A5C] mb-1">
                            Who Should Enroll?
                        </h2>
                        <p className="text-orange-500 text-sm sm:text-base font-medium mb-10">
                            Our AMS program is ideal for:
                        </p>
                    </Reveal>

                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {[
                            "Office Buildings",
                            "Factories & Industrial Facilities",
                            "Hotels & Resorts",
                            "Hospitals & Clinics",
                            "Schools & Universities",
                            "Shopping Malls & Retail Stores",
                            "Restaurants & Commercial Kitchens",
                            "Banks & Financial Institutions",
                            "Mixed-use Commercial Buildings",
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

            {/* Our Maintenance Services — now dynamic, sourced from maintenanceServices prop (fallback to DEFAULT_MAINTENANCE_SERVICES) */}
            <section
                className="py-12 sm:py-16 px-4 md:px-6 relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(90deg, #0C2D4F 0%, #1E5BA8 100%)",
                }}
            >
                <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-10">
                    <Reveal>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                            Our Maintenance Services
                        </h2>
                        <p className="text-xs sm:text-sm text-white/80">
                            Maintenance Services Include:
                        </p>
                    </Reveal>
                </div>

                <SolarServicesCarousel services={displayMaintenanceServices} />
            </section>

            {/* Service Packages */}
            <section className="py-16 px-4 md:px-6 max-w-6xl mx-auto">
                <Reveal>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A5C] text-center mb-10">
                        Service Packages
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    <Reveal delay={0}>
                        <div className="border-2 border-[#2E9BD6] rounded-2xl p-5 md:p-6 h-full hover-lift">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-base md:text-lg font-bold text-[#1A3A5C] leading-snug">
                                    Basic Package
                                </h3>
                                <span className="text-3xl md:text-4xl font-extrabold text-orange-500 shrink-0">
                                    01
                                </span>
                            </div>

                            <p className="text-xs text-[#2E9BD6] font-medium mb-4 leading-snug">
                                Service Frequency
                                <br />
                                Every 6 months
                            </p>

                            <p className="text-xs font-bold text-[#1A3A5C] mb-1">
                                Suitable for:
                            </p>
                            <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside mb-4">
                                <li>Small offices</li>
                                <li>Retail shops</li>
                                <li>Residential Villas</li>
                            </ul>

                            <p className="text-xs font-bold text-[#1A3A5C] mb-1">
                                Includes:
                            </p>
                            <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                                <li>General Inspection</li>
                                <li>Air Conditioner Cleaning</li>
                                <li>Maintenance Report</li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <div className="border-2 border-[#2E9BD6] rounded-2xl p-5 md:p-6 h-full hover-lift">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-base md:text-lg font-bold text-[#1A3A5C] leading-snug">
                                    Standard Package
                                </h3>
                                <span className="text-3xl md:text-4xl font-extrabold text-orange-500 shrink-0">
                                    02
                                </span>
                            </div>

                            <p className="text-xs text-[#2E9BD6] font-medium mb-4 leading-snug">
                                Service Frequency
                                <br />
                                Every 4 months
                            </p>

                            <p className="text-xs font-bold text-[#1A3A5C] mb-1">
                                Suitable for:
                            </p>
                            <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside mb-4">
                                <li>Medium-sized offices</li>
                                <li>Restaurants</li>
                                <li>Clinics</li>
                                <li>Schools</li>
                            </ul>

                            <p className="text-xs font-bold text-[#1A3A5C] mb-1">
                                Includes:
                            </p>
                            <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                                <li>Everything in Basic</li>
                                <li>More frequent inspections</li>
                                <li>Priority scheduling</li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="border-2 border-[#2E9BD6] rounded-2xl p-5 md:p-6 h-full hover-lift">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-base md:text-lg font-bold text-[#1A3A5C] leading-snug">
                                    Premium Package
                                </h3>
                                <span className="text-3xl md:text-4xl font-extrabold text-orange-500 shrink-0">
                                    03
                                </span>
                            </div>

                            <p className="text-xs text-[#2E9BD6] font-medium mb-4 leading-snug">
                                Service Frequency
                                <br />
                                Every 3 months
                            </p>

                            <p className="text-xs font-bold text-[#1A3A5C] mb-1">
                                Suitable for:
                            </p>
                            <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside mb-4">
                                <li>Factories</li>
                                <li>Hotels</li>
                                <li>Hospitals</li>
                                <li>Data centers</li>
                                <li>Commercial buildings</li>
                            </ul>

                            <p className="text-xs font-bold text-[#1A3A5C] mb-1">
                                Includes:
                            </p>
                            <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                                <li>Maximum preventive maintenance</li>
                                <li>Priority technical support</li>
                                <li>Detailed performance reporting</li>
                                <li>Reduced risk of system failure</li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Annual Maintenance Process */}
            <section className="py-16 px-4 md:px-6 max-w-5xl mx-auto">
                <Reveal>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A5C] text-center mb-10">
                        Annual Maintenance Process
                    </h2>
                </Reveal>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-10">
                    {[
                        {
                            step: "Step 1",
                            title: "Customer Registration",
                            desc: "Complete the AMS Registration Form.",
                        },
                        {
                            step: "Step 2",
                            title: "Free Site Survey",
                            desc: "Our engineers inspect your air conditioning systems and assess maintenance requirements.",
                        },
                        {
                            step: "Step 3",
                            title: "Quotation & Agreement",
                            desc: "Receive a customized maintenance proposal based on equipment quantity and operating conditions.",
                        },
                        {
                            step: "Step 4",
                            title: "Service Scheduling",
                            desc: "A maintenance calendar is prepared according to your selected package.",
                        },
                        {
                            step: "Step 5",
                            title: "Regular Maintenance Visits",
                            desc: "Our certified technicians perform scheduled inspections and cleaning throughout the contract period.",
                        },
                        {
                            step: "Step 6",
                            title: "Performance Reporting",
                            desc: "Receive detailed maintenance reports after every service visit.",
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

            {/* Contract Duration, Customer Registration, Service Location & Service Package */}

            <section
                id="contract-duration"
                className="py-12 sm:py-16 px-4 md:px-6 max-w-6xl mx-auto"
            >
                <form onSubmit={handleSubmit}>
                    <div className="bg-[#CFE7F6] rounded-2xl md:rounded-3xl p-5 sm:p-7 md:p-9 flex flex-col gap-8 sm:gap-10">
                        <Reveal delay={0}>
                            <div className="flex flex-col">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A3A5C] mb-4 sm:mb-6">
                                    Contract Duration{" "}
                                    <span className="text-red-600"></span>
                                </h3>

                                <button
                                    type="button"
                                    onClick={() => setContractOpen((v) => !v)}
                                    className="w-full flex justify-between items-center bg-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 mb-2"
                                >
                                    <span className="text-xs sm:text-sm font-medium text-[#1A3A5C]">
                                        Customers may choose:
                                    </span>
                                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1A3A5C] flex items-center justify-center shrink-0">
                                        <svg
                                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 text-white transition-transform duration-300 ${contractOpen ? "rotate-90" : ""}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </span>
                                </button>

                                <div
                                    className="overflow-hidden transition-all duration-300 ease-out"
                                    style={{
                                        maxHeight: contractOpen
                                            ? "220px"
                                            : "0px",
                                    }}
                                >
                                    <div className="bg-white/70 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 mb-3 sm:mb-4">
                                        <ul
                                            className={`text-xs sm:text-sm text-[#1A3A5C] space-y-2 sm:space-y-2.5 ${submitted && !data.contract_duration ? "ring-2 ring-red-500/40 rounded-2xl p-2" : ""}`}
                                        >
                                            {[
                                                "1-Year Contract",
                                                "2-Year Contract",
                                                "3-Year Contract",
                                            ].map((label, i) => (
                                                <li key={i}>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setData(
                                                                "contract_duration",
                                                                data.contract_duration ===
                                                                    label
                                                                    ? ""
                                                                    : label,
                                                            )
                                                        }
                                                        className="flex items-center gap-2"
                                                    >
                                                        <span
                                                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-[#1A3A5C] rounded-sm shrink-0 flex items-center justify-center transition-colors ${
                                                                data.contract_duration ===
                                                                label
                                                                    ? "bg-[#1A3A5C]"
                                                                    : "bg-transparent"
                                                            }`}
                                                        >
                                                            {data.contract_duration ===
                                                                label && (
                                                                <svg
                                                                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={
                                                                            3
                                                                        }
                                                                        d="M5 13l4 4L19 7"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                        {label}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                        {(errors.contract_duration ||
                                            (submitted &&
                                                !data.contract_duration)) && (
                                            <p className="text-red-600 text-[11px] mt-1">
                                                {errors.contract_duration ||
                                                    "Please select a contract duration."}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <p className="text-[11px] sm:text-xs md:text-sm text-[#1A3A5C]/80 leading-relaxed">
                                    Longer contracts provide better maintenance
                                    planning and operational stability.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={120}>
                            <div className="flex flex-col">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A3A5C] mb-2">
                                    Customer Registration
                                </h3>
                                <p className="text-xs sm:text-sm text-[#1A3A5C]/80 mb-1">
                                    To register, please prepare:
                                </p>
                                <p className="text-xs sm:text-sm font-bold text-[#1A3A5C] mb-3 sm:mb-4">
                                    Customer Information
                                </p>

                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    {[
                                        {
                                            field: "Company Name",
                                            key: "company_name",
                                            placeholder:
                                                "e.g. Master MEP Solution Co., Ltd.",
                                        },
                                        {
                                            field: "Contact Person",
                                            key: "contact_person",
                                            placeholder: "e.g. Sokha Chan",
                                        },
                                        {
                                            field: "Position",
                                            key: "position",
                                            placeholder:
                                                "e.g. Facilities Manager",
                                        },
                                        {
                                            field: "Phone Number",
                                            key: "phone_number",
                                            placeholder: "e.g. +855 12 345 678",
                                        },
                                        {
                                            field: "Email Address",
                                            key: "email_address",
                                            placeholder:
                                                "e.g. name@example.com",
                                        },
                                        {
                                            field: "Office Address",
                                            key: "office_address",
                                            placeholder:
                                                "e.g. St. 271, Phnom Penh",
                                        },
                                    ].map((item, i) => (
                                        <div key={i}>
                                            <label className="text-[11px] sm:text-xs md:text-sm font-medium text-[#1A3A5C] block mb-0.5 pl-3 sm:pl-4">
                                                {item.field}{" "}
                                                <span className="text-red-600"></span>
                                            </label>
                                            <input
                                                type="text"
                                                value={data[item.key]}
                                                onChange={(e) =>
                                                    setData(
                                                        item.key,
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder={item.placeholder}
                                                required
                                                className={`w-full bg-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base text-[#1A3A5C] placeholder-[#1A3A5C]/40 border-0 focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]/30 ${submitted && getFieldError(item.key, data[item.key]) ? "ring-2 ring-red-500/40" : ""}`}
                                            />
                                            {submitted &&
                                                getFieldError(
                                                    item.key,
                                                    data[item.key],
                                                ) && (
                                                    <p className="text-red-600 text-[11px] mt-1 pl-3 sm:pl-4">
                                                        {!data[item.key]?.trim()
                                                            ? "This field is required"
                                                            : "Invalid format"}
                                                    </p>
                                                )}
                                            {errors[item.key] && (
                                                <p className="text-red-600 text-[11px] mt-1 pl-3 sm:pl-4">
                                                    {errors[item.key]}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                            <Reveal delay={0}>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A3A5C] mb-4 sm:mb-6">
                                        Service Location
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        {[
                                            {
                                                field: "Site Name",
                                                key: "site_name",
                                                placeholder:
                                                    "e.g. Riverside Office Tower",
                                            },
                                            {
                                                field: "Site Address",
                                                key: "site_address",
                                                placeholder:
                                                    "e.g. St. 271, Phnom Penh",
                                            },
                                            {
                                                field: "Operating Hours",
                                                key: "operating_hours",
                                                placeholder:
                                                    "e.g. Mon–Sat, 8:00 AM – 6:00 PM",
                                            },
                                        ].map((item, i) => (
                                            <div key={i}>
                                                <label className="text-xs sm:text-sm font-bold text-[#1A3A5C] block mb-0.5 pl-3 sm:pl-4">
                                                    {item.field}{" "}
                                                    <span className="text-red-600"></span>
                                                </label>
                                                <input
                                                    type="text"
                                                    value={data[item.key]}
                                                    onChange={(e) =>
                                                        setData(
                                                            item.key,
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder={
                                                        item.placeholder
                                                    }
                                                    required
                                                    className={`w-full bg-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base text-[#1A3A5C] placeholder-[#1A3A5C]/40 border-0 focus:outline-none focus:ring-2 focus:ring-[#1A3A5C]/30 ${submitted && getFieldError(item.key, data[item.key]) ? "ring-2 ring-red-500/40" : ""}`}
                                                />
                                                {submitted &&
                                                    getFieldError(
                                                        item.key,
                                                        data[item.key],
                                                    ) && (
                                                        <p className="text-red-600 text-[11px] mt-1 pl-3 sm:pl-4">
                                                            {!data[
                                                                item.key
                                                            ]?.trim()
                                                                ? "This field is required"
                                                                : "Invalid format"}
                                                        </p>
                                                    )}
                                                {errors[item.key] && (
                                                    <p className="text-red-600 text-[11px] mt-1 pl-3 sm:pl-4">
                                                        {errors[item.key]}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal delay={0}>
                                <div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A3A5C] mb-4 sm:mb-6 leading-snug">
                                        Choose Your Service Package{" "}
                                        <span className="text-red-600"></span>
                                    </h3>
                                    <ul
                                        className={`text-xs sm:text-sm font-semibold text-[#1A3A5C] space-y-2 sm:space-y-3 ${submitted && !data.service_package ? "ring-2 ring-red-500/40 rounded-2xl p-2" : ""}`}
                                    >
                                        {["Basic", "Standard", "Premium"].map(
                                            (title, i) => (
                                                <li key={i}>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setData(
                                                                "service_package",
                                                                data.service_package ===
                                                                    title
                                                                    ? ""
                                                                    : title,
                                                            )
                                                        }
                                                        className="flex items-center gap-2"
                                                    >
                                                        <span
                                                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-[#1A3A5C] rounded-sm shrink-0 flex items-center justify-center transition-colors ${
                                                                data.service_package ===
                                                                title
                                                                    ? "bg-[#1A3A5C]"
                                                                    : "bg-transparent"
                                                            }`}
                                                        >
                                                            {data.service_package ===
                                                                title && (
                                                                <svg
                                                                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={
                                                                            3
                                                                        }
                                                                        d="M5 13l4 4L19 7"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </span>
                                                        {title}
                                                    </button>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                    {(errors.service_package ||
                                        (submitted &&
                                            !data.service_package)) && (
                                        <p className="text-red-600 text-[11px] mt-1">
                                            {errors.service_package ||
                                                "Please select a service package."}
                                        </p>
                                    )}
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 sm:mt-10">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-10 sm:px-14 py-3 sm:py-3.5 bg-blue-900 text-white rounded-xl hover:bg-blue-800 transition font-medium text-sm sm:text-base shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {processing ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </section>

            {/* Featured Project Cards — sourced from FeatureProjectCard admin module (DB-driven) */}
            {featureProjectCards.length > 0 && (
                <section className="py-16 px-4 md:px-6 max-w-5xl mx-auto">
                    <Reveal>
                        <h2 className="text-xl md:text-2xl font-bold text-[#1A3A5C] mb-8">
                            Featured Projects
                        </h2>
                    </Reveal>

                    <div className="space-y-5">
                        {featureProjectCards.map((card, idx) => {
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
                                                    <Wrench
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
                </section>
            )}

            {/* Why Choose Master MEP Solution */}
            <section className="py-16 px-4 md:px-6 max-w-5xl mx-auto">
                <Reveal>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A5C] text-center mb-10">
                        Why Choose Master MEP Solution?
                    </h2>
                </Reveal>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                    {[
                        "Certified HVAC engineers",
                        "Professional maintenance procedures",
                        "Fast response support",
                        "Transparent reporting",
                        "Commercial maintenance specialists",
                        "Flexible maintenance schedules",
                        "Genuine spare parts support",
                        "Reliable long-term service partner",
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

            {/* FAQs */}
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
                                        q: "What types of air conditioners are covered under the AMS program?",
                                        a: "We maintain wall-mounted split units, cassette units, ceiling concealed units, ducted systems, floor-standing units, VRF/VRV systems, packaged units, and central chilled water air conditioning systems.",
                                    },
                                    {
                                        key: "s2",
                                        q: "Can I include multiple buildings under one maintenance contract?",
                                        a: "Yes, our AMS program can cover multiple buildings or sites under a single contract, with a consolidated maintenance schedule and unified reporting across all locations.",
                                    },
                                    {
                                        key: "s3",
                                        q: "What happens if an air conditioner breaks down between scheduled maintenance visits?",
                                        a: "AMS customers can request emergency repair support outside of scheduled visits. Our technicians will assess the issue and carry out the necessary repairs as quickly as possible.",
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
                                        q: "Do you provide maintenance reports after each visit?",
                                        a: "Yes, after every service visit we provide a detailed report covering the inspection checklist, work performed, system condition, and any recommended follow-up actions.",
                                    },
                                    {
                                        key: "s5",
                                        q: "Can the maintenance schedule be arranged outside normal office hours?",
                                        a: "Yes, we can schedule maintenance visits during evenings, weekends, or other off-hours to minimize disruption to your business operations.",
                                    },
                                    {
                                        key: "s6",
                                        q: "How do I know which AMS package is right for my business?",
                                        a: "During your free site survey, our engineers assess your equipment type, quantity, and operating conditions, then recommend the Basic, Standard, or Premium package that best fits your maintenance needs and budget.",
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
                    <div className="flex justify-center ">
                        <Link
                            href="/contact"
                            className="btn-animate max-[600px]:text-[10px]  inline-block px-8 py-3 bg-[#2E5C8A] max-[600px]:px-2 rounded-xl hover:bg-[#1A3A5C] transition-colors font-medium text-sm"
                        >
                            Contact Maintenance Team
                        </Link>
                    </div>
                </Reveal>
            </section>
        </MepLayout>
    );
}
