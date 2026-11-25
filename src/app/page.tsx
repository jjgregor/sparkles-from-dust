import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero section with proper bottom spacing */}
      <div className="pb-0"></div>

      <Navbar />

      {/* Add separator between nav and hero */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-300/50 to-transparent my-4" />

      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}
