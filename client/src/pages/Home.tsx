import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import AboutPreview from "@/components/AboutPreview";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <TestimonialsCarousel />
      <CTASection />
      <Footer />
    </div>
  );
}
