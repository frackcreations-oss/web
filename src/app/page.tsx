import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

import Comparison from "@/components/sections/Comparison";

import Benefits from "@/components/sections/Benefits";
import Portfolio from "@/components/sections/Portfolio";

import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";

import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />

      <Comparison />

      <Benefits />
      <div id="portfolio" className="relative bg-black">
        <Portfolio />
      </div>

      <Testimonials />
      <Process />

      <FAQ />

      <Footer />
    </main>
  );
}
