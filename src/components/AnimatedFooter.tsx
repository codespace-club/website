import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
];

export const AnimatedFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Large Animated Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2
          className={`text-[12rem] sm:text-[16rem] lg:text-[24rem] font-extrabold text-primary/20 tracking-tight select-none transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          CODESPACE
        </h2>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="backdrop-blur-glass bg-[hsl(var(--glass-bg))] rounded-3xl border-2 border-[hsl(var(--glass-border))] shadow-strong p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">CODESPACE CLUB</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We believe in the transformative power of technology. Join us in shaping the future, one line of code at a time.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 backdrop-blur-sm border border-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border/50 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} CodeSpace Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
