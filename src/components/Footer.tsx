import { Github, Linkedin, Instagram } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Twitter", href: "#", icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ) },
  { name: "Github", href: "#", icon: Github },
];

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <footer className="mt-20">
      {/* Giant CODESPACE Text Section */}
      <div 
        ref={sectionRef}
        className="min-h-[30vh] sm:min-h-[40vh] lg:min-h-[50vh] flex items-center justify-start bg-background px-6 sm:px-12 lg:px-20 py-12 sm:py-16 lg:py-20 overflow-hidden"
      >
        <h2 
          className={`text-[12vw] sm:text-[10vw] lg:text-[8vw] xl:text-[7vw] font-black italic text-primary leading-none tracking-tighter transition-all duration-1000 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          CODESPACE
        </h2>
      </div>

      {/* Orange Content Section */}
      <div className="bg-primary">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Club Description */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-background">CodeSpace</h3>
              <p className="text-background text-base sm:text-lg leading-relaxed font-medium">
                At CodeSpace Club, we believe in the transformative power of coding.
                <br /><br />
                Whether you're a seasoned developer or a curious beginner, our community is the perfect place to ignite your passion and expand your skills.
              </p>
            </div>

            {/* Right: Social Links */}
            <div className="space-y-6">
              <h4 className="text-xl sm:text-2xl font-bold text-background">Follow Us</h4>
              <ul className="space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      className="flex items-center gap-3 text-background hover:text-background/80 transition-colors group"
                    >
                      <span className="flex items-center justify-center">
                        <social.icon className="w-5 h-5" />
                      </span>
                      <span className="text-base sm:text-lg font-semibold underline group-hover:no-underline">
                        {social.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
