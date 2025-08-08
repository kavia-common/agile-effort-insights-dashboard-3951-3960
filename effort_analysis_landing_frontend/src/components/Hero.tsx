"use client";
import React from "react";

// PUBLIC_INTERFACE
export default function Hero() {
  /** This is the animated, fully responsive hero section for the landing page. */
  return (
    <section
      className="flex flex-col items-center justify-center text-center py-20 md:py-32 relative overflow-hidden"
      style={{
        minHeight: "65vh",
      }}
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="animate-pulse opacity-40 bg-gradient-to-bl from-primary to-accent w-[450px] h-[450px] sm:w-[700px] sm:h-[700px] md:w-[800px] md:h-[800px] rounded-full filter blur-3xl absolute left-1/2 -top-1/2 -translate-x-1/2"></div>
      </div>
      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-text tracking-tight drop-shadow-xl leading-tight">
          Analyze Agile <span className="text-primary">Effort</span>{" "}
          <br className="hidden md:block" />
          <span className="text-accent">Instantly</span>
          <span className="hidden xs:inline"> &amp; </span>
          <span className="hidden xs:inline">Intelligently</span>
          <span className="inline xs:hidden"> &amp; Intelligently</span>
        </h1>
        <p className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 mb-8 px-2">
          Unleash AI-powered insights on your sprint, resource allocation,
          and project planning. Chat, visualize, and optimize your team’s
          performance — effortlessly.
        </p>
        <a
          href="#features"
          className="inline-block px-5 sm:px-8 py-3 sm:py-4 rounded-lg bg-primary text-white font-semibold text-base transition-all duration-300 shadow-fancy hover:bg-accent hover:text-secondary"
        >
          Explore Features
        </a>
      </div>
    </section>
  );
}
