import { useState } from "react";
import MepLayout from "@/Layouts/MepLayout";
import { Head, Link } from "@inertiajs/react";
import FadeIn from "@/Components/FadeIn";

// Accepts both `youtube.com/watch?v=ID` and `youtu.be/ID` (also supports
// /embed/, /shorts/, /v/, /live/ paths) and returns the 11-char video ID,
// or null if the URL doesn't look like YouTube.
function extractYouTubeId(url) {
    if (!url) return null;
    try {
        const u = new URL(url.startsWith("http") ? url : `https://${url}`);
        const host = u.hostname.replace(/^www\./, "");
        if (host === "youtu.be") {
            return u.pathname.slice(1).split("/")[0] || null;
        }
        if (/(^|\.)youtube\.com$/.test(host)) {
            if (u.pathname === "/watch") return u.searchParams.get("v") || null;
            const m = u.pathname.match(/^\/(embed|shorts|v|live)\/([\w-]{11})/);
            if (m) return m[2];
        }
    } catch (_) {
        /* fallthrough */
    }
    return null;
}

// Per-member object-position override. Default ("object-top") anchors the
// top of the source image to the top of the 160x160 frame. Some uploads
// have extra whitespace baked into the top, so those specific members
// get a slightly lower anchor to push the face up into the visible area.
const MEMBER_OBJECT_POSITION = {
    "Mr. Sum Sota": "object-[center_25%]", // pull face higher in frame
    "Ms. Yonn Lida": "object-[center_20%]",
    "Ms. Song Sreymeas": "object-[center_20%]",
    "Ms. Dorn Rothtan": "object-[center_20%]",
};

// Mr. Len Somoun's source photo is a full-body shot (face is small relative
// to the frame), unlike the headshot-style photos used for everyone else.
// Zoom + reposition just his image so his face reads at the same size as
// the rest of the grid, instead of showing his whole body.
const MEMBER_IMAGE_TRANSFORM = {
    "Mr. Len Somoun": "scale-[1.2] object-[0%_25%]",
};

function memberObjectPosition(member) {
    if (!member) return "object-top";
    if (MEMBER_IMAGE_TRANSFORM[member.name]) return "";
    return MEMBER_OBJECT_POSITION[member.name] ?? "object-top";
}

function memberImageTransform(member) {
    if (!member) return "";
    return MEMBER_IMAGE_TRANSFORM[member.name] ?? "";
}

export default function About({
    hero,
    about,
    members = [],
    certifications = [],
}) {
    const [activeValue, setActiveValue] = useState(null);

    const videoId = extractYouTubeId(about?.video_url);

    const heroImage = "/HeroSection/heroSection.png";

    const values = [
        {
            label: "Excellence",
            icon: "/image/excellence.svg",
            number: "01",
            title: "Excellence in Quality",
            description:
                "We are committed to delivering engineering solutions with exceptional quality, precision, and workmanship. Every project is executed to meet international standards and exceed customer expectations.",
        },
        {
            label: "Success",
            icon: "/image/success.svg",
            number: "02",
            title: "Customer Success",
            description:
                "Our clients' success is our success. We listen, respond, and continuously improve our services to build long-term partnerships founded on trust, reliability, and outstanding customer satisfaction.",
        },
        {
            label: "Innovation",
            icon: "/image/innovation.svg",
            number: "03",
            title: "Innovation & Continuous Growth",
            description:
                "We embrace innovation, value engineering, and continuous learning to create smarter solutions, improve efficiency, and achieve sustainable growth for our company, clients, and stakeholders.",
        },
        {
            label: "People First",
            icon: "/image/peopleFirst.svg",
            number: "04",
            title: "People First",
            description:
                "Our employees are our greatest asset. We foster a safe, respectful, and empowering workplace where every team member is encouraged to grow, collaborate, and reach their full potential.",
        },
        {
            label: "Integrity",
            icon: "/image/integrity.svg",
            number: "05",
            title: "Integrity & Accountability",
            description:
                "We conduct business with honesty, transparency, and professionalism. We take ownership of our commitments and deliver on every promise with responsibility and ethical practices.",
        },
        {
            label: "Reliability",
            icon: "/image/reliability.svg",
            number: "06",
            title: "Safety & Sustainability",
            description:
                "We prioritize the health and safety of our people while protecting the environment. Through responsible engineering and compliance, we create sustainable value for future generations.",
        },
    ];

    return (
        <MepLayout>
            <Head title="Master MEP - About Us" />

            {/* Hero */}
            <section
                className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] bg-cover bg-no-repeat flex items-start sm:items-center justify-center text-white max-[400px]:pt-[20px] min-[400px]:max-[430px]:pt-24 min-[431px]:pt-[90px] sm:pt-0"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundPosition: "center center",
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative  z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto w-full">
                    <FadeIn delay={0}>
                        <p className="text-3xl sm:text-4xl md:text-[50px] tracking-[0.1em] font-semibold text-white mb-1">
                            MASTER MEP
                        </p>
                        <p className="text-[10px] sm:text-xs tracking-[0.5em] sm:tracking-[1em] text-[#96DCFF] mb-6 sm:mb-8">
                            SOLUTION
                        </p>
                    </FadeIn>

                    <FadeIn delay={150}>
                        <h1 className="text-2xl sm:text-3xl max-w-[600px] mx-auto md:text-5xl font-bold leading-tight text-white mb-4 sm:mb-6">
                            {about?.title ||
                                "Professional MEP Engineering & Installation Company in Cambodia"}
                        </h1>
                    </FadeIn>

                    <FadeIn delay={300}>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-200 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                            {about?.description ||
                                "Master MEP Solution Co., Ltd provides professional Mechanical, Electrical, Plumbing (MEP), HVAC, ELV, Fire Protection, and Maintenance Services."}
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

            {/* Introduction Banner */}
            <FadeIn>
                <section
                    className="text-white text-center px-6 py-12 max-w-[980px] mx-4 md:mx-auto rounded-2xl -mt-16 relative transition-shadow duration-300 hover:shadow-2xl"
                    style={{
                        background:
                            "linear-gradient(to right, #0C2D4F, #1E5BA8)",
                    }}
                >
                    <p className="text-sm uppercase tracking-widest mb-2 opacity-70">
                        Company
                    </p>
                    <h2 className="text-3xl font-bold mb-4 tracking-widest">
                        Introduction
                    </h2>
                    <p className="text-sm md:text-base opacity-90 leading-relaxed max-w-3xl mx-auto">
                        {about?.description ||
                            "Master MEP Solution Co., Ltd is a professional MEP engineering company in Cambodia."}
                    </p>
                </section>
            </FadeIn>

            {/* Vision & Mission - hardcode */}
            <section className="py-12 px-4 md:px-6 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-5">
                    <FadeIn direction="left">
                        <div className="bg-[#CFE6F7] rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-card-lift">
                            <h3 className="text-xl font-bold text-[#1A3A5C] mb-2.5">
                                Vision
                            </h3>
                            <p className="text-[#1A3A5C]/80 text-sm leading-relaxed">
                                To become one of the leading MEP engineering
                                companies in Cambodia with a strong technical
                                workforce and reliable project execution.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn direction="right" delay={100}>
                        <div className="bg-white border border-[#2E6BAA] rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-card-lift">
                            <h3 className="text-xl font-bold text-[#1A3A5C] mb-2.5">
                                Mission
                            </h3>
                            <ul className="text-[#1A3A5C]/80 text-sm space-y-2">
                                <li>• Deliver technical quality</li>
                                <li>
                                    • Provide cost-saving engineering solutions
                                </li>
                                <li>• Maintain timeline schedules</li>
                                <li>
                                    • Ensure technical excellence and good
                                    workmanship
                                </li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Video & Values */}
            <section className="bg-[#1A3A5C]/10 py-16 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid min-[810px]:grid-cols-2 gap-8 items-center">
                        <FadeIn direction="left">
                            {videoId ? (
                                <div className="relative bg-gray-800 rounded-xl aspect-video overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lift">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title="About Master MEP"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
                                </div>
                            ) : (
                                <div className="bg-gray-800 rounded-xl aspect-video flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lift group gap-2">
                                    <p className="text-white/70 text-sm">
                                        Intro video coming soon
                                    </p>
                                    <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                                        <svg
                                            className="w-6 h-6 text-white ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </FadeIn>
                        <div>
                            <p className="text-[25px] font-sans uppercase tracking-widest text-[#2a5c92] font-semibold mb-3">
                                Values
                            </p>
                            <div className="grid grid-cols-3 gap-3 sm:gap-4">
                                {values.map(
                                    (
                                        {
                                            label,
                                            icon,
                                            number,
                                            title,
                                            description,
                                        },
                                        i,
                                    ) => (
                                        <FadeIn
                                            key={`${label}-${i}`}
                                            delay={i * 80}
                                        >
                                            <div
                                                onClick={() =>
                                                    setActiveValue({
                                                        label,
                                                        icon,
                                                        number,
                                                        title,
                                                        description,
                                                    })
                                                }
                                                className="group bg-white hover:bg-[#396fa8] rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center gap-2 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-lift cursor-pointer"
                                            >
                                                <img
                                                    src={icon}
                                                    alt={label}
                                                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                                                    onError={(e) => {
                                                        e.target.style.display =
                                                            "none";
                                                    }}
                                                />
                                                <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-white text-center leading-tight transition-colors duration-300">
                                                    {label}
                                                </span>
                                            </div>
                                        </FadeIn>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Key Team Pictures */}
                    <section className="mt-[1rem] py-20 px-4 md:px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2
                                className="text-center text-2xl md:text-3xl font-extrabold mb-16"
                                style={{ color: "#2a5c92" }}
                            >
                                Meet Our Team
                            </h2>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-14">
                                {members.length > 0
                                    ? members.map((member, i) => (
                                          <FadeIn
                                              key={member.id}
                                              delay={i * 100}
                                          >
                                              <div className="flex flex-col items-center text-center">
                                                  <div className="w-40 h-40 rounded-2xl overflow-hidden bg-white shadow-md mb-4 border-4 border-white">
                                                      {member.image ? (
                                                          <img
                                                              src={`/storage/${member.image}`}
                                                              alt={member.name}
                                                              className={`w-full h-full object-cover ${memberObjectPosition(member)} ${memberImageTransform(member)}`}
                                                              onError={(e) => {
                                                                  e.target.style.display =
                                                                      "none";
                                                              }}
                                                          />
                                                      ) : (
                                                          <div className="w-full h-full bg-gradient-to-br from-[#1A3A5C] to-[#2E5C8A] flex items-center justify-center text-white text-4xl font-bold">
                                                              {member.name.charAt(
                                                                  0,
                                                              )}
                                                          </div>
                                                      )}
                                                  </div>
                                                  <h3
                                                      className="font-bold text-sm md:text-base"
                                                      style={{
                                                          color: "#2a5c92",
                                                      }}
                                                  >
                                                      {member.name}
                                                  </h3>
                                                  <p className="text-[#758290] text-xs md:text-sm mt-1">
                                                      {member.position}
                                                  </p>
                                              </div>
                                          </FadeIn>
                                      ))
                                    : // Static fallback បើ DB ទទេ
                                      [
                                          {
                                              name: "Mr. Len Somoun",
                                              position: "Founder / CEO",
                                              image: "/assets/images/photo/Phan Tola.png",
                                          },
                                          {
                                              name: "Mr. Cheup Toley",
                                              position: "MVAC Designer",
                                              image: "/assets/images/photo/Somphon.png",
                                          },
                                          {
                                              name: "Mr. Moeu Sokleap",
                                              position: "Electrical Designer",
                                              image: "/assets/images/photo/Sarout.png",
                                          },
                                          {
                                              name: "Ms. Home Sreynoy",
                                              position: "Accountant",
                                              image: "/assets/images/photo/sreymech.png",
                                          },
                                      ].map((member, i) => (
                                          <FadeIn
                                              key={member.name}
                                              delay={i * 100}
                                          >
                                              <div className="flex flex-col items-center text-center">
                                                  <div className="w-40 h-40 rounded-2xl overflow-hidden bg-white shadow-md mb-4 border-4 border-white">
                                                      <img
                                                          src={member.image}
                                                          alt={member.name}
                                                          className={`w-full h-full object-cover ${memberObjectPosition(member)} ${memberImageTransform(member)}`}
                                                          onError={(e) => {
                                                              e.target.style.display =
                                                                  "none";
                                                          }}
                                                      />
                                                  </div>
                                                  <h3
                                                      className="font-bold text-sm md:text-base"
                                                      style={{
                                                          color: "#2a5c92",
                                                      }}
                                                  >
                                                      {member.name}
                                                  </h3>
                                                  <p className="text-[#758290] text-xs md:text-sm mt-1">
                                                      {member.position}
                                                  </p>
                                              </div>
                                          </FadeIn>
                                      ))}
                            </div>
                        </div>
                    </section>

                    {/* Business Registration Certifications */}
                    {certifications.length > 0 && (
                        <div className="w-full max-w-7xl mx-auto overflow-hidden px-4 mt-10">
                            <h1
                                className="flex justify-center text-start text-[20px] md:text-[30px] leading-none font-[700]"
                                style={{ color: "#2a5c92" }}
                            >
                                Business Registration Certifications
                            </h1>
                            <div className="flex flex-wrap justify-center items-start gap-8 sm:gap-6 py-12">
                                {certifications.map((cert, i) => (
                                    <FadeIn
                                        key={cert.id}
                                        delay={i * 100}
                                        className="flex justify-center"
                                    >
                                        <div className="flex items-start justify-start h-[320px]">
                                            <img
                                                src={cert.image}
                                                alt={
                                                    cert.title ||
                                                    "Certification"
                                                }
                                                className="h-full w-auto object-contain"
                                            />
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Trusted by Leading Brands */}
            <section
                className="relative py-20 bg-cover bg-center text-white text-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <FadeIn className="relative z-10 max-w-2xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Trusted by Leading Brands in Cambodia
                    </h2>
                    <p className="text-sm md:text-base opacity-80">
                        Master MEP has worked with leading brands, banks,
                        restaurants, hospitals, retail stores, and commercial
                        developers in Cambodia.
                    </p>
                </FadeIn>
            </section>

            {/* Value Detail Modal */}
            {activeValue && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
                    onClick={() => setActiveValue(null)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 relative"
                    >
                        <button
                            onClick={() => setActiveValue(null)}
                            aria-label="Close"
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <p className="text-[#2a5c92] font-bold text-sm tracking-widest mb-1">
                            {activeValue.number}
                        </p>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#1A3A5C] mb-3">
                            {activeValue.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#758290] leading-relaxed">
                            {activeValue.description}
                        </p>
                    </div>
                </div>
            )}
        </MepLayout>
    );
}
