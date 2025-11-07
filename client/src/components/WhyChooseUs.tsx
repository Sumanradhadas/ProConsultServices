import { Card } from "@/components/ui/card";
import { Award, Target, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "15+ years of experience delivering exceptional results across industries",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Focus on measurable outcomes that directly impact your bottom line",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Tailored solutions designed specifically for your unique challenges",
  },
  {
    icon: Zap,
    title: "Agile Approach",
    description:
      "Flexible methodologies that adapt to changing business needs",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "$2.5B+", label: "Value Created" },
  { value: "50+", label: "Industries Served" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            data-testid="text-why-title"
          >
            Why Choose ProConsult
          </h2>
          <p
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-why-subtitle"
          >
            We combine deep expertise with innovative thinking to deliver
            exceptional value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-xl transition-all"
              data-testid={`card-why-${index}`}
            >
              <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                data-testid={`text-why-feature-title-${index}`}
              >
                {feature.title}
              </h3>
              <p
                className="text-muted-foreground"
                data-testid={`text-why-feature-description-${index}`}
              >
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`card-why-stat-${index}`}
            >
              <div
                className="text-4xl md:text-5xl font-light text-primary mb-2"
                data-testid={`text-why-stat-value-${index}`}
              >
                {stat.value}
              </div>
              <div
                className="text-sm text-muted-foreground"
                data-testid={`text-why-stat-label-${index}`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
