import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import teamMember1 from "@assets/generated_images/Male_consultant_headshot_b10e2aae.png";
import teamMember2 from "@assets/generated_images/Female_consultant_headshot_one_436bb3cf.png";
import teamMember3 from "@assets/generated_images/Male_consultant_with_glasses_f7eb023f.png";
import teamMember4 from "@assets/generated_images/Senior_female_consultant_headshot_afb08c22.png";

const team = [
  {
    name: "David Mitchell",
    role: "Managing Partner",
    image: teamMember1,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rachel Thompson",
    role: "Senior Consultant",
    image: teamMember2,
    linkedin: "https://linkedin.com",
  },
  {
    name: "James Peterson",
    role: "Strategy Director",
    image: teamMember3,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Linda Martinez",
    role: "Operations Lead",
    image: teamMember4,
    linkedin: "https://linkedin.com",
  },
];

export default function TeamGrid() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            data-testid="text-team-title"
          >
            Meet Our Team
          </h2>
          <p
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-team-subtitle"
          >
            Experienced professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-6 text-center group hover:shadow-xl transition-all"
              data-testid={`card-team-${index}`}
            >
              <div className="mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  data-testid={`img-team-${index}`}
                />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                data-testid={`text-team-name-${index}`}
              >
                {member.name}
              </h3>
              <p
                className="text-muted-foreground mb-4"
                data-testid={`text-team-role-${index}`}
              >
                {member.role}
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid={`link-team-linkedin-${index}`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
