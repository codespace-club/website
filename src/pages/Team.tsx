import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    { name: "President", role: "Leading the club", description: "Overseeing all club activities and initiatives" },
    { name: "Vice President", role: "Supporting leadership", description: "Assisting in club management" },
    { name: "Technical Head", role: "Technical guidance", description: "Managing technical projects and workshops" },
    { name: "Event Coordinator", role: "Event management", description: "Organizing and coordinating events" },
    { name: "Content Lead", role: "Content creation", description: "Managing social media and content" },
    { name: "Design Lead", role: "Creative design", description: "Handling all design requirements" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto space-y-12 md:space-y-16 animate-fade-in">
            <div className="text-center space-y-4 md:space-y-6 px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary">Our Team</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-semibold">Meet the people who make it all happen</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-[9px] [-webkit-backdrop-filter:blur(9px)] bg-background/10 border border-white/50 hover:border-primary/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,107,0,0.3)] text-center hover:scale-105 relative overflow-hidden rounded-3xl before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:shadow-[inset_6px_6px_0px_-6px_rgba(255,255,255,0.7),inset_0_0_8px_1px_rgba(255,255,255,0.7)] before:pointer-events-none"
                  style={{
                    filter: 'drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))',
                    backdropFilter: 'brightness(1.1) blur(9px)',
                    WebkitBackdropFilter: 'brightness(1.1) blur(9px)',
                  }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-28 h-28 rounded-full bg-gradient-primary mx-auto mb-6 flex items-center justify-center shadow-glow">
                      <span className="text-4xl font-bold text-white">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <CardTitle className="text-foreground text-xl font-bold">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-bold text-base mt-2">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground font-medium">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
