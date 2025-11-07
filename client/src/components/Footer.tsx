import { Link } from "wouter";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4" data-testid="text-footer-brand">
              ProConsult Services
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="text-footer-tagline">
              Guiding businesses toward smarter solutions with proven expertise
              and innovative thinking.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-company">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <span
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    data-testid="link-footer-about"
                  >
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    data-testid="link-footer-services"
                  >
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/clients">
                  <span
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    data-testid="link-footer-clients"
                  >
                    Clients
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-services">Services</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Business Strategy</li>
              <li className="text-muted-foreground">Financial Planning</li>
              <li className="text-muted-foreground">Digital Transformation</li>
              <li className="text-muted-foreground">HR & Operations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-contact">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span data-testid="text-footer-email">contact@proconsult.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span data-testid="text-footer-phone">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span data-testid="text-footer-address">New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground space-y-2">
          <p data-testid="text-footer-copyright">
            © 2025 ProConsult Services. All rights reserved.
          </p>
          <p>
            Designed & Developed by{" "}
            <a
              href="https://webglowx.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-ring transition-colors font-medium"
              data-testid="link-webglow-footer"
            >
              WebGlow
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
