import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import WhatWeDo from "@/components/about/WhatWeDo";
import FutureVision from "@/components/about/FutureVision";
import TeamHighlight from "@/components/about/TeamHighlight";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24 sm:pt-32 space-y-32">
        <AboutHero />
        <TeamHighlight />
        <WhatWeDo />
        <OurStory />
        <FutureVision />
      </main>

      <Footer />
    </div>
  );
};

export default About;
