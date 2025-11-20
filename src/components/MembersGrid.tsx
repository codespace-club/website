// src/components/MembersGrid.tsx
import React, { useEffect, useState } from "react";
import MemberCard from "./MemberCard";

export interface MemberFull {
   id: string;
   name: string;
   role: string;
   teamId: string;
   teamName: string;
   bio: string;
   image: string;
   funFact?: string;
   isLead?: boolean;
   isCoLead?: boolean;
   social?: { linkedin?: string; github?: string; twitter?: string };
}

interface Props {
   selectedTeam?: string; // "all" or teamId
   showOnlyLeads?: boolean; // if true, show only Lead/Co-Lead
   hideTeamBadge?: boolean;
}

export default function MembersGrid({ selectedTeam = "all", showOnlyLeads = false, hideTeamBadge = false }: Props) {
   const [members, setMembers] = useState<MemberFull[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      let mounted = true;
      (async () => {
         try {
            const res = await fetch("/data/members.json");
            const data = await res.json();
            if (!mounted) return;
            setMembers(data.members || []);
         } catch (e) {
            console.error("Failed to load members.json", e);
         } finally {
            if (mounted) setLoading(false);
         }
      })();
      return () => {
         mounted = false;
      };
   }, []);

   if (loading) return <div className="text-center py-12">Loading members...</div>;

   // Filtering logic:
   // - If selectedTeam === "all" -> show only Leads & Co-Leads across all teams
   // - If a team is selected -> show ALL members of that team (including lead & colead)
   const filtered = members.filter((m) => {
      if (selectedTeam && selectedTeam !== "all") {
         return m.teamId === selectedTeam;
      } else {
         // all teams view -> only leads & co-leads
         return !!(m.isLead || m.isCoLead || /lead/i.test(m.role || ""));
      }
   });

   if (filtered.length === 0) {
      return <div className="text-center py-12 text-muted-foreground">No members found.</div>;
   }

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {filtered.map((m) => (
            <div key={m.id} className="h-full">
               <MemberCard member={m} hideTeamBadge={hideTeamBadge} showActions />
            </div>
         ))}
      </div>
   );
}
