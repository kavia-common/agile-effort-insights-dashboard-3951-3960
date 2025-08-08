"use client";
import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import Features from "../components/Features";
const DemoChart = dynamic(() => import("../components/DemoChart"), { ssr: false });
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-background text-text leading-relaxed min-h-screen w-full">
      <Hero />
      <Features />
      <DemoChart />
      <Team />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
