import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";
import CTASection from "@/components/CTASection";

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
            data-testid="text-services-page-title"
          >
            Consulting Services
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground"
            data-testid="text-services-page-subtitle"
          >
            Comprehensive solutions designed to address your most critical
            business challenges and unlock new opportunities for growth.
          </p>
        </div>
      </section>

      <ServiceDetail />
      <CTASection />
      <Footer />
    </div>
  );
}
