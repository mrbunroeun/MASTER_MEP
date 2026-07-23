import { Link } from "@inertiajs/react";
import {
  Building2, Hospital, Landmark, UtensilsCrossed, Fuel, Hotel, Building
} from "lucide-react";
import { cloneElement } from "react";
import FadeIn from "@/Components/FadeIn";

const CATEGORIES = [
  { label: "Commercial Buildings", icon: <Building2 size={26} /> },
  { label: "Banks",                icon: <Landmark size={26} /> },
  { label: "Restaurants & Cafés",  icon: <UtensilsCrossed size={26} /> },
  { label: "Hospitals",            icon: <Hospital size={32} /> },
  { label: "Resort",               icon: <Hotel size={26} /> },
  { label: "Condo/Villa",          icon: <Building size={26} /> },
  { label: "Others",               icon: <Fuel size={26} /> },
];

// Strip each icon's own fixed pixel size and make it inherit
// from its wrapper's font-size instead, so every icon scales identically.
function CategoryIcon({ icon }) {
  return cloneElement(icon, {
    size: undefined,
    width: "1em",
    height: "1em",
  });
}

export default function Projects({ projects = [] }) {
  const renderCard = (cat, delay) => (
    <FadeIn key={cat.label} direction="up" delay={delay}>
      <Link
        href={`/projects?category=${encodeURIComponent(cat.label)}`}
        className="flex flex-col items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
        style={{
          width: "clamp(80px, 20vw, 140px)",
          height: "clamp(88px, 19vw, 112px)", // increased so 2-line labels no longer get clipped
          padding: "clamp(0.5rem, 2vw, 1rem)",
        }}
      >
        <div
          className="text-[#1A3A5C] transition-transform duration-300 group-hover:scale-110 flex items-center justify-center shrink-0"
          style={{ fontSize: "clamp(20px, 5vw, 32px)" }} // icon's em-based size follows this
        >
          <CategoryIcon icon={cat.icon} />
        </div>
        <span
          className="font-medium text-[#1A3A5C] leading-tight line-clamp-2"
          style={{ fontSize: "clamp(0.625rem, 1.8vw, 0.75rem)" }}
        >
          {cat.label}
        </span>
      </Link>
    </FadeIn>
  );

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 min-[950px]:grid-cols-2 gap-10 items-start">

        {/* LEFT — Title, description, CTA */}
        <FadeIn direction="up">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A5C] mb-4">
            Featured Projects<br />Section
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Our project portfolio includes MEP engineering works for ABA Bank, Phillip Bank,
            Caltex, commercial buildings, luxury villas, restaurants, hospitals, and retail
            projects across Phnom Penh, Kampot, and Siem Reap.
          </p>
          <Link
            href="/projects"
            className="inline-block px-6 py-3 bg-[#1A3A5C] text-white text-sm font-medium rounded-xl transition-all duration-200 hover:bg-[#0C2D4F] hover:scale-105 active:scale-95"
          >
            View All Projects
          </Link>
        </FadeIn>

        {/* RIGHT — Category icon grid */}
        <div>
          <div className="flex justify-center gap-6">
            {CATEGORIES.slice(0, 3).map((cat, i) => renderCard(cat, 120 + i * 100))}
          </div>

          <div className="flex justify-center gap-6 mt-6">
            {CATEGORIES.slice(3, 5).map((cat, i) => renderCard(cat, 420 + i * 100))}
          </div>
        </div>

      </div>
    </section>
  );
}