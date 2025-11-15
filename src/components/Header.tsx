import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "EVENTS", path: "/events" },
  { name: "TEAM", path: "/team" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SVG Filter for Glassmorphism */}
      <svg style={{ display: 'none' }}>
        <filter id="displacementFilter">
          <feTurbulence 
            type="turbulence" 
            baseFrequency="0.01" 
            numOctaves="2" 
            result="turbulence" 
          />
          <feDisplacementMap 
            in="SourceGraphic"
            in2="turbulence"    
            scale="50" 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
      </svg>

      <header
        className={`fixed z-50 transition-all duration-500 ease-out
          ${isMobileMenuOpen ? "top-4 left-4 right-4" : "top-4 md:left-1/2 md:-translate-x-1/2 left-4 right-4 md:right-auto md:w-auto"}
          ${isScrolled || isHovered ? "scale-100" : "scale-95"}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav className="relative">
          {/* Dynamic Island Container */}
          <div 
            className={`
              relative overflow-hidden
              transition-all duration-500 ease-out
              ${isMobileMenuOpen ? "rounded-3xl px-6 py-6 md:px-8" : "rounded-full px-6 py-3 md:px-8"}
              border border-white/50
              backdrop-blur-[9px] [-webkit-backdrop-filter:blur(9px)]
              bg-background/10
              shadow-[0_-8px_46px_rgba(0,0,0,0.37)]
              before:content-[''] before:absolute before:inset-0 before:rounded-[inherit]
              before:shadow-[inset_6px_6px_0px_-6px_rgba(255,255,255,0.7),inset_0_0_8px_1px_rgba(255,255,255,0.7)]
              hover:shadow-[0_0_40px_rgba(255,107,0,0.3)]
              ${isScrolled ? "brightness-110" : "brightness-100"}
            `}
            style={{
              filter: 'drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))',
              backdropFilter: 'brightness(1.1) blur(9px) url(#displacementFilter)',
              WebkitBackdropFilter: 'brightness(1.1) blur(9px)',
            }}
          >
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 relative z-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end
                  className="px-6 py-2.5 rounded-full text-sm font-bold text-muted-foreground 
                    transition-all duration-300 ease-out
                    hover:text-foreground hover:bg-white/10 hover:scale-105"
                  activeClassName="text-primary bg-white/15 shadow-glow scale-105"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-full text-foreground 
                hover:bg-white/10 transition-all duration-300 hover:scale-110 relative z-10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-6 animate-fade-in relative z-10">
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-6 py-3.5 rounded-full text-base font-bold text-muted-foreground 
                        transition-all duration-300 hover:text-foreground hover:bg-white/10 hover:scale-105"
                      activeClassName="text-primary bg-white/15 scale-105"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
