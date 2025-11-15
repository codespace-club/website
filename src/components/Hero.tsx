import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/codespace-logo.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-10">

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile: Logo First */}
          <div className="flex justify-center lg:hidden animate-fade-in order-1">
            <img 
              src={logo} 
              alt="CodeSpace Club Logo" 
              className="w-64 h-64 object-contain scale-[2]"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary tracking-tight">
                CODESPACE
              </h1>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-lg font-semibold">
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

          {/* Desktop: Logo on Right */}
          <div className="hidden lg:flex justify-center lg:justify-end animate-fade-in order-3 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <img 
              src={logo} 
              alt="CodeSpace Club Logo" 
              className="w-[55rem] h-[55rem] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
