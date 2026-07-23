import FadeIn from "@/Components/FadeIn";

export default function About() {
  return (
    <section className="relative max-w-[1300px] mx-auto z-20 -mt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="rounded-2xl px-8 md:px-16 py-12 md:py-16 text-center text-white shadow-xl transition-shadow duration-300 hover:shadow-2xl"
          style={{ background: "linear-gradient(to right, #0C2D4F, #1E5BA8)" }}>
            <p className="text-sm uppercase tracking-[0.3em] opacity-80 mb-2">About</p>
            <h2 className="text-3xl md:text-5xl font-bold">MASTER MEP</h2>
            <p className="text-xs tracking-[1em] text-[#96DCFF] mb-8">SOLUTION</p>
            <p className="mt-6 max-w-4xl mx-auto text-sm md:text-base leading-relaxed opacity-95">
              Master MEP Solution Co., Ltd is a Cambodia-based engineering company specializing in
              MEP installation, maintenance, HVAC systems, electrical systems, plumbing systems,
              ELV systems, and fire protection solutions. Led by Mr. Len Samoun, the company has
              successfully delivered projects for villas, commercial buildings, banks,
              restaurants, fitness centers, hospitals, and retail spaces throughout Cambodia.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}