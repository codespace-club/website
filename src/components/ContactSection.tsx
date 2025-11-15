import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactSection = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // Here you can integrate with your backend or email service
    console.log("Contact form submitted:", data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    form.reset();
  };

  return (
    <section className="py-20 sm:py-32 relative">
      {/* SVG Filter for glassmorphism */}
      <svg style={{ display: "none" }}>
        <filter id="contactDisplacementFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.01"
            numOctaves="2"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="200"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow opacity-15 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Contact Form */}
            <div
              className="relative overflow-hidden rounded-[28px] p-6 sm:p-10 lg:p-12 transition-all duration-500"
              style={{
                backdropFilter:
                  "brightness(1.1) blur(9px) url(#contactDisplacementFilter)",
                WebkitBackdropFilter: "brightness(1.1) blur(9px)",
                background: "hsl(var(--glass-bg))",
              }}
            >
              {/* Content */}
              <div className="relative z-10 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight">
                    Get in Touch
                  </h2>
                  <p className="text-foreground/80 text-sm sm:text-base">
                    Have questions? We'd love to hear from you. Send us a
                    message and we'll respond as soon as possible.
                  </p>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="bg-background/50 border-border/50 focus:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                              className="bg-background/50 border-border/50 focus:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how we can help you..."
                              {...field}
                              rows={5}
                              className="bg-background/50 border-border/50 focus:border-primary resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground transition-all duration-300"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            {/* Right: 3D Spline Placeholder */}
            <div
              className="relative overflow-hidden rounded-[28px] p-6 sm:p-10 lg:p-12 min-h-[400px] lg:min-h-[600px] flex items-center justify-center transition-all duration-500"
              style={{
                backdropFilter:
                  "brightness(1.1) blur(9px) url(#contactDisplacementFilter)",
                WebkitBackdropFilter: "brightness(1.1) blur(9px)",
                background: "hsl(var(--glass-bg))",
              }}
            >
              {/* Placeholder Content */}
              <div className="relative z-10 text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary flex items-center justify-center shadow-strong">
                  <div className="text-6xl">🎨</div>
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  3D Interactive Component
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base max-w-sm mx-auto">
                  Spline 3D component placeholder. This area will showcase an
                  interactive 3D experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
