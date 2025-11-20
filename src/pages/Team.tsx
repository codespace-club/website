// src/pages/Team.tsx
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import MembersGrid from "@/components/MembersGrid";
import { Button } from "@/components/ui/button";

const TEAMS = [
   { id: "all", name: "All", icon: "👥" },
   { id: "technical", name: "Technical", icon: "💻" },
   { id: "editorial", name: "Editorial", icon: "🧭" },
   { id: "design", name: "Design", icon: "🎨" },
   { id: "content", name: "Content", icon: "✍️" },
   { id: "event-management", name: "Event", icon: "📅" },
   { id: "pr", name: "PR", icon: "📢" }
];

const Team: React.FC = () => {
   const [selectedTeam, setSelectedTeam] = useState<string>("all");

   return (
      <div className="min-h-screen bg-background text-foreground">
         {/* SVG Filter for glassmorphism (kept) */}
         <svg style={{ display: "none" }}>
            <filter id="teamDisplacementFilter">
               <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence" />
               <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="200" xChannelSelector="R" yChannelSelector="G" />
            </filter>
         </svg>

         <Header />
         <main className="pt-24 sm:pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
                  <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 px-4">
                     <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight">Our Team</h1>
                     <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-semibold">
                        Meet the people who make it all happen
                     </p>
                  </div>

                  {/* ToggleGroup-like pills */}
                  <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                     {TEAMS.map((t) => {
                        const active = selectedTeam === t.id;
                        return (
                           <Button
                              key={t.id}
                              variant={active ? "default" : "outline"}
                              className={`rounded-full px-4 ${active ? "scale-105" : ""}`}
                              onClick={() => setSelectedTeam(t.id)}
                           >
                              <span className="mr-2">{t.icon}</span>
                              {t.name}
                           </Button>
                        );
                     })}
                  </div>

                  {/* MembersGrid: default (all) shows leads & co-leads; selecting team shows full team */}
                  <MembersGrid selectedTeam={selectedTeam} showOnlyLeads={false} hideTeamBadge={false} />
               </div>
            </div>
         </main>
         <Footer />
      </div>
   );
};

export default Team;
