import React from "react";

// Example agent avatars: would be replaced with real faces/logos in production
const agents = [
  {
    name: "PlannerBot",
    role: "Sprint Strategist",
    avatar: (
      <span className="inline-block w-20 h-20 rounded-full bg-primary text-secondary text-3xl font-bold flex items-center justify-center">
        PB
      </span>
    ),
    desc: "AI agent specialized in breaking down and estimating agile sprints.",
  },
  {
    name: "VizGenie",
    role: "Data Visualizer",
    avatar: (
      <span className="inline-block w-20 h-20 rounded-full bg-accent text-secondary text-3xl font-bold flex items-center justify-center">
        VG
      </span>
    ),
    desc: "Turns your raw effort data into beautiful, insightful graphs and reports.",
  },
  {
    name: "Chatlyzer",
    role: "AI Chat Analyst",
    avatar: (
      <span className="inline-block w-20 h-20 rounded-full bg-secondary text-primary border-4 border-primary text-3xl font-bold flex items-center justify-center">
        C
      </span>
    ),
    desc: "Conversational interface for querying, refining, and understanding results.",
  },
  {
    name: "OptiMise",
    role: "Optimization Expert",
    avatar: (
      <span className="inline-block w-20 h-20 rounded-full bg-primary text-accent text-3xl font-bold flex items-center justify-center">
        OM
      </span>
    ),
    desc: "Pinpoints inefficiencies, and recommends adjustments—automatically.",
  },
];

// PUBLIC_INTERFACE
export default function Team() {
  /** Component for displaying agent or team showcase, now fully responsive. */
  return (
    <section id="agents" className="max-w-7xl mx-auto px-3 sm:px-6 py-12">
      <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-center mb-7 sm:mb-12 text-text">
        Meet Your AI Crew
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-center">
        {agents.map((a) => (
          <div
            key={a.name}
            className="bg-secondary shadow-fancy rounded-2xl p-6 xs:p-8 w-full max-w-xs mx-auto flex flex-col items-center border border-primary/20
              hover:scale-[1.035] transition-transform duration-250"
          >
            {a.avatar}
            <h3 className="mt-3 xs:mt-4 text-lg xs:text-xl font-semibold text-primary">
              {a.name}
            </h3>
            <span className="text-accent font-medium mb-1 xs:mb-2">{a.role}</span>
            <p className="text-text opacity-80 text-sm xs:text-base text-center">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
