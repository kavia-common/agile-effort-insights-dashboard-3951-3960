import React from "react";

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 9V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5" />
        <rect width="16" height="8" x="4" y="9" rx="2" />
      </svg>
    ),
    title: "AI-Powered Analysis",
    desc: "Leverage advanced LLM and CrewAI agents to evaluate your Excel sprint data with deep learning insights.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10c0 4-1.5 7.5-4 10M12 2C8.3 4.3 6 8 6 12c0 4 2.3 7.7 6 10" />
      </svg>
    ),
    title: "Automated Visualizations",
    desc: "Auto-generate stunning charts using Seaborn & Matplotlib for crystal-clear sprint effort insights.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect width="20" height="14" x="2" y="7" rx="2" />
        <path d="M16 3v4M8 3v4" />
      </svg>
    ),
    title: "Deep-Dive Reports",
    desc: "In-depth reporting for efficiency, resource optimization and sprint planning—powered by conversational AI.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M21 21v-4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Chat-Driven Workflow",
    desc: "Interact with insights, ask for custom visualizations, and refine your analyses—all in a chat interface.",
  },
];

// PUBLIC_INTERFACE
export default function Features() {
  /** This component displays feature highlight tiles, fully responsive. */
  return (
    <section id="features" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-center text-text mb-7 sm:mb-12">
        Key Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-secondary rounded-2xl p-6 xs:p-8 shadow-fancy hover:shadow-2xl transition-all duration-300 border border-primary/20 flex flex-col items-center text-center min-h-[250px]"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg sm:text-xl text-primary font-semibold mb-1 xs:mb-2">
              {feature.title}
            </h3>
            <p className="text-text opacity-80 text-sm xs:text-base">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
