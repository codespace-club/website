import { forwardRef } from "react";
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
import LazySpline from "@/components/LazySpline";

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

export const ContactSection = forwardRef<HTMLDivElement>((_props, ref) => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    const subject = `Contact Form Message from ${data.name}`;
    const body = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0A%0D%0AMessage:%0D%0A${data.message}`;
    window.location.href = `mailto:Codespace.it@glbitm.ac.in?subject=${encodeURIComponent(subject)}&body=${body}`;
    toast.success("Opening your email client...");
    form.reset();
  };

  return (
    <section ref={ref} className="py-20 sm:py-32 relative">
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left: Contact Form */}
            <div className="relative p-6 sm:p-10 lg:p-12 order-2 lg:order-1">
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

            {/* Right: 3D Spline Component */}
            <div className="relative overflow-hidden h-[400px] lg:h-auto order-1 lg:order-2">
              <div className="absolute inset-0 scale-110 -right-1/2">
                <LazySpline scene="https://prod.spline.design/SG1r5oLOEtmjaRwC/scene.splinecode" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
