import { Link } from "@inertiajs/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFacebookF,
    faTelegram,
    faWhatsapp,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function MepFooter() {
    return (
        <footer
            className="text-white"
            style={{
                background: "linear-gradient(to right, #0C2D4F, #1E5BA8)",
            }}
        >
            <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-16 py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.5fr_1fr_1fr_1fr] gap-10 sm:gap-12 lg:gap-16">
                {/* Company Info */}
                <div className="sm:col-span-2 lg:col-span-1 lg:pr-6">
                    {/* Logo + Company Name */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <a
                            href="https://www.mastermepsolution.com.kh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-[#96DCFF] min-w-[400px] transition break-all"
                        >
                            <img
                                src="/master mep logo footer.svg"
                                alt="Master MEP Solution"
                                className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 object-contain shrink-0"
                            />
                        </a>

                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-[0.05em] lg:tracking-[0.08em] leading-none">
                                MASTER MEP
                            </h2>

                            <p className="mt-2 sm:mt-3 text-xs sm:text-sm tracking-[0.4em] sm:tracking-[0.8em] text-[#96DCFF] uppercase">
                                SOLUTION
                            </p>
                        </div>
                    </div>

                    <h4 className="text-lg sm:text-xl lg:text-[22px] font-bold leading-tight max-w-full sm:max-w-[520px] mb-4 sm:mb-6">
                        Professional MEP Engineering & Installation Company in
                        Cambodia
                    </h4>

                    <p className="text-sm sm:text-base text-white/85 leading-7 sm:leading-8 max-w-full sm:max-w-[560px] mb-8 sm:mb-10">
                        Master MEP Solution Co., Ltd provides professional
                        Mechanical, Electrical, Plumbing (MEP), HVAC, ELV, Fire
                        Protection, and Maintenance Services for commercial
                        buildings, villas, banks, restaurants, hospitals, and
                        industrial projects across Cambodia.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="https://web.facebook.com/profile.php?id=61586431983798"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                    "https://web.facebook.com/profile.php?id=61586431983798",
                                    "_blank",
                                    "noopener,noreferrer",
                                );
                            }}
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition shrink-0"
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=lensamoun68@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4b7ce4] flex items-center justify-center hover:scale-110 transition shrink-0"
                        >
                            <img
                                src="/emailIcon.svg"
                                alt=""
                                className="w-5 h-5"
                            />
                        </a>

                        <a
                            href="https://t.me/+85570318179"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                    "https://t.me/+85570318179",
                                    "_blank",
                                    "noopener,noreferrer",
                                );
                            }}
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#229ED9] flex items-center justify-center hover:scale-110 transition shrink-0"
                        >
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                    </div>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">
                        Navigation Bars
                    </h3> 

                    <ul className="flex flex-col gap-3 sm:gap-4 text-sm sm:text-base">
                        <li>
                            <Link
                                href="/"
                                className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <div className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                                Services
                            </div>
                            <ul className="flex flex-col gap-2 sm:gap-3 mt-2 sm:mt-3 text-xs sm:text-sm text-white/80">
                                <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-white/60 shrink-0" />
                                    <Link
                                        href="/services/mechanical"
                                        className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Mechanical / HVAC
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-white/60 shrink-0" />
                                    <Link
                                        href="/services/electrical"
                                        className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Electrical & ELV
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-white/60 shrink-0" />
                                    <Link
                                        href="/services/plumbing"
                                        className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Plumbing
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-white/60 shrink-0" />
                                    <Link
                                        href="/services/maintenance"
                                        className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Maintenance
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-white/60 shrink-0" />
                                    <Link
                                        href="/services/solasystem"
                                        className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Solar System
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/latestactivities"
                                className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Latest Activities{" "}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="insights"
                                className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Insights
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="min-w-0">
                    <h3 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">
                        Contact
                    </h3>

                    <div className="space-y-4 sm:space-y-5 text-sm sm:text-base">
                        <div>
                            <p className="font-bold mb-2">
                                Head Office Address
                            </p>
                            <p className="break-words">
                                Borey Long Ny Chamkardoung,
                                <br />
                                #40, Street 01, Prakar Village,
                                <br />
                                Preysar Commune, Dangkor District, Phnom Penh
                            </p>
                        </div>

                        <div className="flex flex-wrap flex-row gap-2">
                            <p className="shrink-0 font-bold">Phone Number:</p>
                            <p>017 55 22 38</p>
                        </div>

                        <div className="min-w-[300px] ">
                            <p className="font-bold mb-2">Business Hours</p>
                            <p>Mon- Sat 8:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="sm:col-span-2 lg:col-span-1">
                    <h3 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg text-center">
                        Find Us
                    </h3>

                    <div className="overflow-hidden rounded-xl w-full max-w-[400px] sm:max-w-none mx-auto border border-white/20 shadow-lg">
                        <iframe
                            title="Master MEP Solution Location"
                            src="https://maps.google.com/maps?q=11.5062721,104.8756371&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="220"
                            className="sm:h-[260px]"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-white text-[#1A3A5C] py-4 sm:py-6">
                <div className="max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4 text-center text-sm sm:text-base">
                    <p>MASTER MEP SOLUTIONS</p>
                    <p>All rights reserved. 2026</p>
                </div>
            </div>
        </footer>
    );
}
