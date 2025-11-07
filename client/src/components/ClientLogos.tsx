import { Card } from "@/components/ui/card";

const clients = [
  { name: "TechVision Inc.", letter: "TV" },
  { name: "Global Solutions", letter: "GS" },
  { name: "Innovate Partners", letter: "IP" },
  { name: "Enterprise Corp", letter: "EC" },
  { name: "Momentum Group", letter: "MG" },
  { name: "Visionary Labs", letter: "VL" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            data-testid="text-clients-title"
          >
            Trusted by Industry Leaders
          </h2>
          <p
            className="text-base md:text-lg text-muted-foreground"
            data-testid="text-clients-subtitle"
          >
            We're proud to partner with innovative companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="p-8 flex items-center justify-center aspect-square hover:shadow-xl transition-all group"
              data-testid={`card-client-${index}`}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-muted-foreground grayscale group-hover:grayscale-0 group-hover:text-ring transition-all">
                  {client.letter}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
