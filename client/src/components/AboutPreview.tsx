import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import officeImage from "@assets/generated_images/Modern_office_collaboration_space_ee780eae.png";

export default function AboutPreview() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={officeImage}
              alt="Modern office collaboration"
              className="rounded-2xl shadow-lg w-full"
              data-testid="img-about-office"
            />
          </div>
          <div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
              data-testid="text-about-title"
            >
              Trusted Partner in Business Excellence
            </h2>
            <p
              className="text-base md:text-lg text-muted-foreground mb-8"
              data-testid="text-about-description"
            >
              At ProConsult Services, we combine deep industry expertise with
              innovative thinking to help businesses navigate complexity and
              achieve sustainable growth. Our client-centric approach ensures
              tailored solutions that deliver measurable results.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 text-center"
                  data-testid={`card-stat-${index}`}
                >
                  <div
                    className="text-4xl font-light text-primary mb-2"
                    data-testid={`text-stat-value-${index}`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm text-muted-foreground"
                    data-testid={`text-stat-label-${index}`}
                  >
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>

            <Link href="/about">
              <Button size="lg" data-testid="button-learn-more">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
