import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Team = () => {
  const teamMembers = [
    { name: "President", role: "Leading the club", description: "Overseeing all club activities and initiatives" },
    { name: "Vice President", role: "Supporting leadership", description: "Assisting in club management" },
    { name: "Technical Head", role: "Technical guidance", description: "Managing technical projects and workshops" },
    { name: "Event Coordinator", role: "Event management", description: "Organizing and coordinating events" },
    { name: "Content Lead", role: "Content creation", description: "Managing social media and content" },
    { name: "Design Lead", role: "Creative design", description: "Handling all design requirements" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SVG Filter for glassmorphism */}
      <svg style={{ display: 'none' }}>
        <filter id="teamDisplacementFilter">
          <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="200" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <Header />
      <main className="pt-24 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 md:space-y-16 animate-fade-in">
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight">Our Team</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-semibold">Meet the people who make it all happen</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 text-center group hover:scale-[1.02] transition-all duration-500"
                  style={{
                    filter: 'drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))',
                    backdropFilter: 'brightness(1.1) blur(9px) url(#teamDisplacementFilter)',
                    WebkitBackdropFilter: 'brightness(1.1) blur(9px)',
                    background: 'hsl(var(--glass-bg))',
                  }}
                >
                  {/* Glassmorphic border effect */}
                  <div 
                    className="absolute inset-0 rounded-[28px] pointer-events-none"
                    style={{
                      boxShadow: 'inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)',
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-primary mx-auto flex items-center justify-center shadow-glow">
                      <span className="text-3xl sm:text-4xl font-bold text-white">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-foreground text-lg sm:text-xl font-bold">{member.name}</h3>
                      <p className="text-primary font-bold text-sm sm:text-base">{member.role}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium pt-2">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
