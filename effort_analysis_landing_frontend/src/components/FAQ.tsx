"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "How do I use Effort Analysis?",
    answer:
      "Simply upload your sprint data in Excel format, and interact with the AI chat to generate automated effort insights, visualizations, and optimization suggestions.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, your data is never shared and is handled with strict privacy practices.",
  },
  {
    question: "Can I customize the analysis?",
    answer:
      "Absolutely! You can use the chat to specify particular queries, time periods, or custom charts and get real-time responses.",
  },
  {
    question: "What makes Effort Analysis different?",
    answer:
      "Combining LLM models, CrewAI agents, and a chat interface allows deeply interactive and actionable analysis—unique in the agile analytics space.",
  },
];

// PUBLIC_INTERFACE
export default function FAQ() {
  /** Frequently asked questions accordion section */
  const [opened, setOpened] = useState<number | null>(0);
  return (
    <section id="faq" className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-text">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto divide-y divide-primary/20 rounded-xl bg-secondary shadow-fancy">
        {faqs.map((faq, i) => (
          <div key={i} className="">
            <button
              className="w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center"
              onClick={() => setOpened(opened === i ? null : i)}
              aria-expanded={opened === i}
              aria-controls={`faq-${i}`}
            >
              <span className="text-lg font-medium text-primary">{faq.question}</span>
              <span className="ml-4 text-accent text-xl">{opened === i ? "-" : "+"}</span>
            </button>
            <div
              id={`faq-${i}`}
              className={`px-6 pb-5 transition-all duration-300 text-text ${
                opened === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
              aria-hidden={opened !== i}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
