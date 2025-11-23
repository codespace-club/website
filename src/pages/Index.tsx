import { useRef } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const handleJoinUsClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero onJoinUsClick={handleJoinUsClick} />
      <About />
      <BlogSection />
      <ContactSection ref={contactRef} />
      <Footer />
    </div>
  );
};

export default Index;
