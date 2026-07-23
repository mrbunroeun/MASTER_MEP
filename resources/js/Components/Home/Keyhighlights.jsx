import FadeIn from "@/Components/FadeIn";

const keyHighlights = [
  { number: 1, line1: "Experienced MEP", line2: "Engineering Team" },
  { number: 2, line1: "Fast Project Timeline", line2: "Management" },
  { number: 3, line1: "Quality & Compliance", line2: "Standards" },
  { number: 4, line1: "Cost-Effective", line2: "Engineering Solutions" },
  { number: 5, line1: "Energy-Efficient", line2: "System Design" },
  { number: 6, line1: "1-Year Warranty", line2: "Support" },
  { number: 7, line1: "In-House", line2: "Maintenance Team" },
  { number: 8, line1: "5% project payment", line2: "deposit at the customer" },
];

export default function Keyhighlights({
  title = "Key Highlights",
  subtitle = null,
}) {
  return (
    <section className="bg-gradient-to-br from-[#0a5aa8] via-[#04447e] to-[#032c52] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-center text-white text-4xl font-bold mb-3">{title}</h2>
          {subtitle && (
            <p className="text-center text-orange-400 text-sm font-medium mb-10">{subtitle}</p>
          )}
          {!subtitle && <div className="mb-10" />}
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
          {keyHighlights.map((item, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-orange-400 text-3xl font-semibold">
                  {String(item.number).padStart(2, "0")}
                </h3>
                <p className="text-white/90 text-sm mt-1 leading-snug">
                  {item.line1}
                  <br />
                  {item.line2}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}