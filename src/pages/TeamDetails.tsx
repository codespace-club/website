// src/pages/TeamDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import MembersGrid from "@/components/MembersGrid";

const TeamDetails: React.FC = () => {
   const { teamId } = useParams<{ teamId: string }>();
   const [teamName, setTeamName] = useState<string | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      let mounted = true;
      (async () => {
         try {
            const res = await fetch("/data/members.json");
            const data = await res.json();
            if (!mounted) return;
            const item = data.members.find((m: any) => m.teamId === teamId);
            setTeamName(item ? item.teamName : null);
         } catch (e) {
            setTeamName(null);
         } finally {
            if (mounted) setLoading(false);
         }
      })();
      return () => {
         mounted = false;
      };
   }, [teamId]);

   if (!teamId) return <div className="min-h-screen">Invalid team</div>;

   return (
      <div className="min-h-screen bg-background text-foreground">
         <Header />
         <main className="pt-24 sm:pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
                  <div className="text-center px-4">
                     <h1 className="text-4xl font-black text-primary tracking-tight">{loading ? "Team Members" : teamName || "Team Members"}</h1>
                     <p className="text-muted-foreground mt-2">All members — lead, co-lead and teammates.</p>
                     <div className="mt-2"><Link to="/team" className="text-sm text-primary hover:underline">← Back to Teams</Link></div>
                  </div>

                  <MembersGrid selectedTeam={teamId} showOnlyLeads={false} hideTeamBadge />
               </div>
            </div>
         </main>
         <Footer />
      </div>
   );
};

export default TeamDetails;
