import FadeIn from "@/Components/FadeIn";
import { Link } from "@inertiajs/react";

const TITLE = "Trusted by Leading Brands in Cambodia";
const DESCRIPTION = "Master MEP has worked with leading brands, banks, restaurants, hospitals, retail stores, and commercial developers in Cambodia.";
const BACKGROUND_IMAGE = "/HeroSection/heroSection.png";

export default function Ctabanner() {
  return (
    <section
      className="relative py-20 bg-cover bg-center text-white text-center"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <FadeIn className="relative z-10 max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {TITLE}
        </h2>
        <p className="text-sm md:text-base opacity-80 mb-6">
          {DESCRIPTION}
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-2.5 bg-[#1A3A5C] hover:bg-[#2E5C8A] text-white text-sm font-medium rounded-lg transition"
        >
          Contact Us
        </Link>
      </FadeIn>
    </section>
  );
}
