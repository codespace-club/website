// src/pages/MemberDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface MemberFull {
   id: string;
   name: string;
   role: string;
   teamId: string;
   teamName: string;
   bio: string;
   image: string;
   funFact?: string;
   social?: { linkedin?: string; github?: string; twitter?: string };
}

const MemberDetails: React.FC = () => {
   const { id } = useParams<{ id: string }>();
   const [member, setMember] = useState<MemberFull | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      let mounted = true;
      (async () => {
         try {
            const res = await fetch("/data/members.json");
            const data = await res.json();
            if (!mounted) return;
            const found = data.members.find((m: any) => String(m.id) === String(id));
            setMember(found || null);
         } catch (e) {
            console.error(e);
            setMember(null);
         } finally {
            if (mounted) setLoading(false);
         }
      })();
      return () => {
         mounted = false;
      };
   }, [id]);

   if (loading) return <div className="min-h-screen text-center py-12">Loading...</div>;
   if (!member) return <div className="min-h-screen text-center py-12">Member not found</div>;

   return (
      <div className="min-h-screen bg-background text-foreground">
         <Header />
         <main className="pt-24 sm:pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-3xl mx-auto space-y-6">
                  <div className="text-center">
                     <img src={member.image} alt={member.name} className="w-36 h-36 rounded-full mx-auto object-cover" />
                     <h1 className="text-3xl font-bold mt-4">{member.name}</h1>
                     <p className="text-primary font-semibold">{member.role}</p>
                     {member.teamName && <p className="text-muted-foreground mt-1">{member.teamName}</p>}
                  </div>

                  <div className="bg-panel p-6 rounded-2xl">
                     <h2 className="text-xl font-semibold mb-2">Bio</h2>
                     <p className="text-sm text-muted-foreground">{member.bio}</p>

                     <div className="mt-4">
                        
                     </div>

                     {member.funFact && (
                        <div className="mt-4">
                           <h3 className="text-md font-semibold">Fun Fact</h3>
                           <p className="text-sm">{member.funFact}</p>
                        </div>
                     )}

                     <div className="mt-4 flex gap-3">
                        {member.social?.linkedin && (<a href={member.social.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">LinkedIn</a>)}
                        {member.social?.github && (<a href={member.social.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">GitHub</a>)}
                        {member.social?.twitter && (<a href={member.social.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">Twitter</a>)}
                     </div>

                     <div className="mt-6">
                        <Link to={`/team/${member.teamId}`} className="text-sm text-primary hover:underline">View Team →</Link>
                     </div>
                  </div>
               </div>
            </div>
         </main>
         <Footer />
      </div>
   );
};

export default MemberDetails;
