import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamGrid from "@/components/TeamGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
            data-testid="text-about-page-title"
          >
            About ProConsult Services
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground mb-8"
            data-testid="text-about-page-mission"
          >
            We are a team of experienced consultants dedicated to helping
            businesses achieve their full potential through strategic guidance,
            innovative solutions, and unwavering commitment to excellence.
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Founded in 2010, ProConsult Services has grown to become a trusted
            partner for organizations seeking transformative change. Our
            approach combines deep industry knowledge with proven methodologies
            to deliver sustainable results that matter.
          </p>
        </div>
      </section>

      <WhyChooseUs />
      <TeamGrid />
      <CTASection />
      <Footer />
    </div>
  );
}
