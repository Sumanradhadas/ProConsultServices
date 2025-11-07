import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Hero_boardroom_collaboration_scene_68dc59e0.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6"
          data-testid="text-hero-title"
        >
          Guiding Businesses Toward
          <br />
          <span className="text-ring">Smarter Solutions</span>
        </h1>
        <p
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
          data-testid="text-hero-subtitle"
        >
          Expert consulting in business strategy, financial planning, digital
          transformation, and operations. We turn complex challenges into growth
          opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              data-testid="button-hero-contact"
              className="bg-ring hover:bg-ring/90 text-primary-foreground border border-ring/80 backdrop-blur-sm"
            >
              Get in Touch
            </Button>
          </Link>
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              data-testid="button-hero-services"
              className="bg-white/10 border-white/30 text-white backdrop-blur-md hover:bg-white/20"
            >
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
