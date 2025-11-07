import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
          data-testid="text-cta-title"
        >
          Ready to Transform Your Business?
        </h2>
        <p
          className="text-lg md:text-xl mb-12 opacity-90"
          data-testid="text-cta-description"
        >
          Let's discuss how our expertise can drive your success. Schedule a
          free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-ring hover:bg-ring/90 text-primary-foreground border border-ring/80"
              data-testid="button-cta-contact"
            >
              Contact Us Today
            </Button>
          </Link>
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              data-testid="button-cta-services"
            >
              Explore Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
