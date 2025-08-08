"use client";
import React from "react";

// PUBLIC_INTERFACE
export default function Hero() {
  /** This is the animated hero section for the landing page. */
  return (
    <section
      className="flex flex-col items-center justify-center text-center py-32 relative overflow-hidden"
      style={{
        minHeight: "80vh",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-pulse opacity-40 bg-gradient-to-bl from-primary to-accent w-[800px] h-[800px] rounded-full filter blur-3xl absolute left-1/2 -top-1/2 -translate-x-1/2"></div>
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-text tracking-tight drop-shadow-xl">
        Analyze Agile <span className="text-primary">Effort</span> <br />
        <span className="text-accent">Instantly</span> & Intelligently
      </h1>
      <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
        Unleash AI-powered insights on your sprint, resource allocation, and
        project planning. Chat, visualize, and optimize your team’s performance
        — effortlessly.
      </p>
      <a
        href="#features"
        className="inline-block px-8 py-4 rounded-lg bg-primary text-white font-semibold text-base transition-all duration-300 shadow-fancy hover:bg-accent hover:text-secondary"
      >
        Explore Features
      </a>
    </section>
  );
}
