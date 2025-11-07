import { Card } from "@/components/ui/card";
import { Briefcase, TrendingUp, Cpu, Users, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Strategy",
    description:
      "We help organizations define clear strategic objectives and create actionable roadmaps for sustainable growth.",
    features: [
      "Market analysis and competitive intelligence",
      "Strategic planning and roadmap development",
      "Business model innovation",
      "Growth strategy optimization",
    ],
  },
  {
    icon: TrendingUp,
    title: "Financial Planning",
    description:
      "Comprehensive financial analysis and planning services to maximize profitability and ensure long-term financial health.",
    features: [
      "Financial modeling and forecasting",
      "Cost optimization strategies",
      "Investment analysis and planning",
      "Risk management frameworks",
    ],
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description:
      "Guide your organization through digital modernization with proven methodologies and cutting-edge solutions.",
    features: [
      "Technology assessment and roadmap",
      "Process automation and optimization",
      "Digital culture development",
      "Change management support",
    ],
  },
  {
    icon: Users,
    title: "HR & Operations",
    description:
      "Build high-performing teams and optimize operational processes for maximum efficiency and employee satisfaction.",
    features: [
      "Organizational design and structure",
      "Talent acquisition and development",
      "Performance management systems",
      "Operational excellence initiatives",
    ],
  },
];

export default function ServiceDetail() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            data-testid="text-service-detail-title"
          >
            Our Consulting Services
          </h2>
          <p
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-service-detail-subtitle"
          >
            Comprehensive solutions tailored to your unique business challenges
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 md:p-12 hover:shadow-xl transition-all"
              data-testid={`card-service-detail-${index}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <div className="bg-primary/10 rounded-full p-4 w-fit mb-6">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-semibold mb-4"
                    data-testid={`text-service-detail-name-${index}`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-muted-foreground"
                    data-testid={`text-service-detail-description-${index}`}
                  >
                    {service.description}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="font-semibold mb-4">What We Offer:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start gap-3"
                        data-testid={`text-service-feature-${index}-${fIndex}`}
                      >
                        <CheckCircle className="w-5 h-5 text-ring flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
