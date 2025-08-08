"use client";
import React, { useState } from "react";

// PUBLIC_INTERFACE
export default function ContactForm() {
  /** Contact form for collecting user inquiries on landing page. */
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1400); // Simulate a network response for demo
  }
  return (
    <section id="contact" className="max-w-lg mx-auto my-16 bg-secondary shadow-fancy rounded-2xl p-10 border border-primary/20">
      <h2 className="text-2xl font-bold text-primary mb-4">Let&apos;s Connect</h2>
      <p className="text-accent mb-7">Interested in optimizing your agile processes? Drop your message—we&apos;ll reach out soon!</p>
      {status === "success" ? (
        <div className="text-green-400 text-center font-semibold my-12">
          Thank you. Your message was received!
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="name"
            required
            className="rounded-lg border border-primary/40 bg-background/70 px-4 py-3 text-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            aria-label="Your Name"
          />
          <input
            type="email"
            name="email"
            required
            className="rounded-lg border border-primary/40 bg-background/70 px-4 py-3 text-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            aria-label="Your Email"
          />
          <textarea
            name="message"
            required
            className="rounded-lg border border-primary/40 bg-background/70 px-4 py-3 h-28 text-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
            placeholder="How can we help you?"
            value={form.message}
            onChange={handleChange}
            aria-label="Your Message"
          />
          <button
            type="submit"
            className="rounded-lg bg-primary text-white font-bold py-3 mt-2 transition-all hover:bg-accent hover:text-secondary shadow-fancy"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
}
