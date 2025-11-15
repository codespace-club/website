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
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when element enters viewport from bottom
      const startScroll = windowHeight;
      const endScroll = 0;
      
      // Progress from 0 (not visible) to 1 (fully visible)
      const progress = Math.max(0, Math.min(1, (startScroll - rect.top) / (startScroll - endScroll)));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Transform from -100% to 0% based on scroll
  const translateX = -100 + (scrollProgress * 100);

  return (
    <footer className="mt-20 overflow-x-hidden">
      {/* Giant CODESPACE Text Section */}
      <div 
        ref={sectionRef}
        className="min-h-[35vh] sm:min-h-[45vh] lg:min-h-[55vh] flex items-center justify-start bg-background px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24 overflow-hidden"
      >
        <h2 
          className="text-[16vw] sm:text-[14vw] lg:text-[12vw] xl:text-[10vw] font-black italic text-primary leading-none tracking-tighter transition-transform duration-100 ease-out"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          CODESPACE
        </h2>
      </div>

      {/* Orange Content Section */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Left: Club Description */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-background">CodeSpace</h3>
              <p className="text-background text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
                At CodeSpace Club, we believe in the transformative power of coding.
                <br /><br />
                Whether you're a seasoned developer or a curious beginner, our community is the perfect place to ignite your passion and expand your skills.
              </p>
            </div>

            {/* Right: Social Links */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-background">Follow Us</h4>
              <ul className="space-y-2 sm:space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      className="flex items-center gap-2 sm:gap-3 text-background transition-colors group"
                    >
                      <span className="flex items-center justify-center">
                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </span>
                      <span className="text-sm sm:text-base lg:text-lg font-semibold underline">
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
