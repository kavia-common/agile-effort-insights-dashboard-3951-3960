import React from "react";

// Dummy testimonials
const testimonials = [
  {
    quote:
      "Effort Analysis is a true game-changer — we now optimize every sprint based on real, live data. The visualizations alone saved us days every month!",
    name: "Ava Summers",
    company: "Lead Scrum Master, SynergyWorks",
  },
  {
    quote:
      "The chat interface feels magical! We simply upload an Excel sheet, and the CrewAI team tells us what matters, all with stunning charts.",
    name: "Bob Carter",
    company: "Agile Coach, InnoSoft",
  },
  {
    quote:
      "We discovered where our cycles were lost, plugged the gaps, and made our team 20% more productive. The insights are just spot on.",
    name: "Taro Yamada",
    company: "Product Owner, NeonApps",
  },
];

// PUBLIC_INTERFACE
export default function Testimonials() {
  /** Customer testimonials and social proof, fully responsive */
  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 py-10 sm:py-16">
      <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-center mb-7 sm:mb-10 text-text">
        Testimonials
      </h2>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {testimonials.map((t, i) => (
          <blockquote
            key={i}
            className="bg-secondary border border-primary/20 rounded-xl shadow-fancy p-6 xs:p-8 max-w-xs xs:max-w-sm sm:max-w-md mx-auto transition-all hover:shadow-2xl flex-1 min-w-[260px]"
          >
            <p className="text-base xs:text-lg text-text mb-3 xs:mb-4 font-medium">&ldquo;{t.quote}&rdquo;</p>
            <div className="text-primary font-bold">{t.name}</div>
            <div className="text-accent text-xs xs:text-sm">{t.company}</div>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
