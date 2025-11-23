import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink as CustomNavLink } from "@/components/NavLink";
import { useAuth } from "@/hooks/AuthContext";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "./ui/button";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "EVENTS", path: "/events" },
  { name: "TEAM", path: "/team" },
  { name: "BLOGS", path: "/blogs" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

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
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out w-[90%] sm:w-auto
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
              rounded-full px-4 py-3 md:px-8
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
            {/* Navigation */}
            <div className="flex items-center justify-center space-x-0.5 sm:space-x-1 relative z-10 w-full">
              {navItems.map((item) => (
                <CustomNavLink
                  key={item.path}
                  to={item.path}
                  end
                  className="px-2 sm:px-3 md:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-bold text-muted-foreground 
                    transition-all duration-300 ease-out"
                  activeClassName="text-primary bg-white/15 scale-105"
                >
                  {item.name}
                </CustomNavLink>
              ))}
              {!loading && (
                <div className="ml-2">
                  {user ? (
                    <Button onClick={handleLogout} variant="ghost" size="sm" className="rounded-full text-xs">Logout</Button>
                  ) : (
                    <CustomNavLink
                      to="/login"
                      className="px-4 py-2 rounded-full text-xs font-bold text-muted-foreground transition-all duration-300 ease-out"
                      activeClassName="text-primary bg-white/15"
                    >
                      LOGIN
                    </CustomNavLink>
                  )}
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
