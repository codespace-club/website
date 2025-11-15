import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-30 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary tracking-tight">
                CODESPACE
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-lg font-semibold">
                A hub for tech enthusiasts to explore, innovate, and create the future together!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground transition-all duration-300 group"
              >
                Join Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-glow opacity-50 blur-2xl" />
              <div className="relative backdrop-blur-glass bg-[hsl(var(--glass-bg))] p-12 rounded-full border-2 border-[hsl(var(--glass-border))] shadow-strong">
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-primary flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold text-white">CS</div>
                    <div className="text-sm sm:text-base font-semibold text-white/90 mt-2">CLUB</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
