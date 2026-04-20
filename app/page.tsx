import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "US Structural Steel Detailing Services | Sembada",
  description:
    "Sembada delivers US-focused structural steel detailing, Tekla 3D modeling, and AISC-compliant shop drawings for fabricators, engineers, and contractors.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      <Hero />
      <Services />
      <Portfolio />
      <ContactForm />
      <Footer />
    </main>
  );
}
