import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "ProConsult transformed our business strategy and helped us achieve 40% revenue growth in just one year. Their expertise is unmatched.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Inc.",
  },
  {
    quote:
      "The digital transformation roadmap they created was instrumental in modernizing our operations. Highly recommend their services.",
    author: "Michael Chen",
    role: "CTO",
    company: "Global Solutions",
  },
  {
    quote:
      "Outstanding financial planning support. ProConsult's insights helped us optimize costs and improve profitability significantly.",
    author: "Emily Rodriguez",
    role: "CFO",
    company: "Innovate Partners",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            data-testid="text-testimonials-title"
          >
            What Our Clients Say
          </h2>
          <p
            className="text-base md:text-lg text-muted-foreground"
            data-testid="text-testimonials-subtitle"
          >
            Trusted by industry leaders worldwide
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card
            className="p-8 md:p-12"
            data-testid={`card-testimonial-${currentIndex}`}
          >
            <Quote className="w-12 h-12 text-ring mb-6" />
            <p
              className="text-xl md:text-2xl mb-8 text-foreground"
              data-testid={`text-testimonial-quote-${currentIndex}`}
            >
              "{testimonials[currentIndex].quote}"
            </p>
            <div>
              <p
                className="font-semibold text-lg"
                data-testid={`text-testimonial-author-${currentIndex}`}
              >
                {testimonials[currentIndex].author}
              </p>
              <p
                className="text-muted-foreground"
                data-testid={`text-testimonial-role-${currentIndex}`}
              >
                {testimonials[currentIndex].role},{" "}
                {testimonials[currentIndex].company}
              </p>
            </div>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
