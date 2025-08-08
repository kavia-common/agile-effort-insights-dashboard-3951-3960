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
  /** Customer testimonials and social proof */
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-text">Testimonials</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((t, i) => (
          <blockquote
            key={i}
            className="bg-secondary border border-primary/20 rounded-xl shadow-fancy p-8 max-w-md mx-auto transition-all hover:shadow-2xl"
          >
            <p className="text-lg text-text mb-4 font-medium">&ldquo;{t.quote}&rdquo;</p>
            <div className="text-primary font-bold">{t.name}</div>
            <div className="text-accent text-sm">{t.company}</div>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
