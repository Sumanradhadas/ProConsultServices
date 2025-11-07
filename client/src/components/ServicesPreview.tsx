import { Card } from "@/components/ui/card";
import { Briefcase, TrendingUp, Cpu, Users } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Strategy",
    description:
      "Strategic planning and execution to align your business goals with market opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Financial Planning",
    description:
      "Comprehensive financial analysis and planning to optimize profitability and growth.",
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description:
      "Modernize operations with cutting-edge technology and digital solutions.",
  },
  {
    icon: Users,
    title: "HR & Operations",
    description:
      "Streamline processes and build high-performing teams for operational excellence.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            data-testid="text-services-title"
          >
            Our Core Services
          </h2>
          <p
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-services-subtitle"
          >
            We deliver tailored solutions across key business domains to drive
            sustainable growth and competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 md:p-10 hover:shadow-xl transition-all hover:-translate-y-1 group"
              data-testid={`card-service-${index}`}
            >
              <div className="bg-primary/10 rounded-full p-3 w-fit mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3
                className="text-xl md:text-2xl font-semibold mb-3"
                data-testid={`text-service-title-${index}`}
              >
                {service.title}
              </h3>
              <p
                className="text-muted-foreground"
                data-testid={`text-service-description-${index}`}
              >
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
