export const About = () => {
  return (
    <section className="py-20 sm:py-32 relative">
      {/* SVG Filter for glassmorphism */}
      <svg style={{ display: 'none' }}>
        <filter id="aboutDisplacementFilter">
          <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="200" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div 
            className="relative overflow-hidden rounded-[28px] p-8 sm:p-12 lg:p-16 transition-all duration-500"
            style={{
              backdropFilter: 'brightness(1.1) blur(9px) url(#aboutDisplacementFilter)',
              WebkitBackdropFilter: 'brightness(1.1) blur(9px)',
              background: 'hsl(var(--glass-bg))',
            }}
          >
            {/* Content */}
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight">
                CodeSpace
              </h2>
              
              <div className="space-y-6 text-foreground/90 text-base sm:text-lg leading-relaxed">
                <p className="font-semibold">
                  At CodeSpace, we are more than just a tech club; we are a{" "}
                  <span className="text-primary font-bold">vibrant community</span> of tech enthusiasts 
                  where innovation meets passion.
                </p>
                
                <p>
                  Our mission is to create a space where students can learn, grow, and excel together. 
                  Whether it's mastering a new programming language, competing in hackathons, or collaborating 
                  on groundbreaking projects, CodeSpace is the perfect place to turn your passion into reality!
                </p>
                
                <p className="font-semibold text-primary/90">
                  Join us and become part of a community where creativity, collaboration, and technology 
                  come together to shape the future.
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
    </section>
  );
};
