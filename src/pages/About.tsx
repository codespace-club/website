import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SVG Filter for glassmorphism */}
      <svg style={{ display: 'none' }}>
        <filter id="aboutPageDisplacementFilter">
          <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="200" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl pointer-events-none" />

      <Header />
      <main className="pt-24 sm:pt-32 pb-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 animate-fade-in">
            <div className="text-center space-y-3 sm:space-y-4 px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight">About Us</h1>
              <p className="text-base sm:text-xl text-muted-foreground">Learn more about our mission and vision</p>
            </div>

            <div 
              className="relative overflow-hidden rounded-[28px] p-6 sm:p-10 lg:p-14 group hover:scale-[1.01] transition-all duration-500"
              style={{
                filter: 'drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))',
                backdropFilter: 'brightness(1.1) blur(9px) url(#aboutPageDisplacementFilter)',
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
              <div className="relative z-10 space-y-8 sm:space-y-10">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary">Our Story</h2>
                  <p className="text-foreground/90 text-sm sm:text-base leading-relaxed">
                    CodeSpace Club was founded with a vision to create a community where technology enthusiasts can come together,
                    learn from each other, and build amazing things. We believe in the power of collaboration and innovation.
                  </p>
                </div>
                
                <div className="h-px bg-gradient-primary opacity-30" />

                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary">What We Do</h2>
                  <p className="text-foreground/90 text-sm sm:text-base leading-relaxed">
                    We organize workshops, hackathons, coding competitions, and tech talks featuring industry experts. Our members
                    work on real-world projects, contribute to open source, and develop skills that prepare them for successful careers in technology.
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="flex gap-4 pt-4">
                  <div className="h-1 w-16 bg-gradient-primary rounded-full" />
                  <div className="h-1 w-12 bg-gradient-primary rounded-full opacity-60" />
                  <div className="h-1 w-8 bg-gradient-primary rounded-full opacity-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
