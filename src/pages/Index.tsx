import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClubDetails } from "@/components/ClubDetails";
import { ContactSection } from "@/components/ContactSection";
import { AnimatedFooter } from "@/components/AnimatedFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Page 1: Hero */}
      <Hero />
      {/* Page 2: Club Details */}
      <ClubDetails />
      {/* Page 3: 3D + Contact Form */}
      <ContactSection />
      {/* Page 4: Animated Footer */}
      <AnimatedFooter />
    </div>
  );
};

export default Index;
