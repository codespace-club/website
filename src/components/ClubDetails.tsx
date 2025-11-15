export const ClubDetails = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight">
              About Us
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-semibold">
              Learn more about our mission and vision
            </p>
          </div>

          <div className="backdrop-blur-glass bg-[hsl(var(--glass-bg))] rounded-3xl border-2 border-[hsl(var(--glass-border))] p-8 sm:p-12 lg:p-16 shadow-strong space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Our Story</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                CodeSpace Club was founded with a vision to create a community where technology enthusiasts can come together,
                learn from each other, and build amazing things. We believe in the power of collaboration and innovation.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">What We Do</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We organize workshops, hackathons, coding competitions, and tech talks featuring industry experts. Our members
                work on real-world projects, contribute to open source, and develop skills that prepare them for successful careers in technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
