import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTASection from "@/components/CTASection";

export default function Clients() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
            data-testid="text-clients-page-title"
          >
            Our Clients & Success Stories
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground"
            data-testid="text-clients-page-subtitle"
          >
            We're honored to work with forward-thinking organizations that are
            committed to excellence and continuous improvement.
          </p>
        </div>
      </section>

      <ClientLogos />
      <TestimonialsCarousel />
      <CTASection />
      <Footer />
    </div>
  );
}
