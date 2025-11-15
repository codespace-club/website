import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[12rem] sm:text-[16rem] lg:text-[20rem] font-extrabold text-primary/10 tracking-tight select-none">
          CODESPACE
        </h2>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: 3D Spline Placeholder */}
          <div className="flex justify-center lg:justify-start animate-fade-in">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-glow opacity-30 blur-3xl rounded-full" />
              <div className="relative w-full h-full backdrop-blur-glass bg-[hsl(var(--glass-bg))] rounded-3xl border-2 border-[hsl(var(--glass-border))] shadow-strong flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">3D</span>
                  </div>
                  <p className="text-muted-foreground font-semibold">Spline Component</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="backdrop-blur-glass bg-[hsl(var(--glass-bg))] rounded-3xl border-2 border-[hsl(var(--glass-border))] shadow-strong p-8 sm:p-10">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/20 border-white/30 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/20 border-white/30 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background/20 border-white/30 text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
