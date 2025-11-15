import teamPhoto from "@/assets/team-photo.png";

export const About = () => {
  return (
    <section className="py-20 sm:py-32 relative autoblur">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Team Photo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-glow opacity-30 blur-2xl" />
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-strong border border-border/50">
                <img 
                  src={teamPhoto} 
                  alt="CodeSpace Club Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Description */}
            <div className="relative p-6 sm:p-10 lg:p-12">
              <div className="relative z-10 space-y-6 sm:space-y-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight">
                  CodeSpace
                </h2>
                
                <div className="space-y-4 sm:space-y-6 text-foreground/90 text-base sm:text-lg leading-relaxed">
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
      </div>
    </section>
  );
};
