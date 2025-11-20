// src/components/MemberCard.tsx
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export interface MemberMini {
   id: string;
   name: string;
   role: string;
   teamId?: string;
   teamName?: string;
   bio?: string;
   image?: string;
   funFact?: string;
   social?: { linkedin?: string; github?: string; twitter?: string };
   isLead?: boolean;
   isCoLead?: boolean;
}

interface Props {
   member: MemberMini;
   hideTeamBadge?: boolean;
   showActions?: boolean;
}

export default function MemberCard({ member, hideTeamBadge = false, showActions = true }: Props) {
   return (
      <Card className="overflow-hidden rounded-2xl shadow-md h-full flex flex-col">
         <CardHeader className="p-2">
            <div className="w-full h-44 rounded-xl overflow-hidden bg-muted-foreground/5">
               <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
               />
            </div>
         </CardHeader>

         <CardContent className="flex flex-col flex-1 p-5 text-center">
            <h3 className="text-lg font-semibold truncate">{member.name}</h3>
            <p className="text-primary font-medium text-sm mt-1 truncate">{member.role}</p>

            {!hideTeamBadge && member.teamName && (
               <div className="mt-2">
                  <Badge variant="secondary">{member.teamName}</Badge>
               </div>
            )}

            {member.bio && (
               <p className="text-sm text-muted-foreground mt-3" style={{
                  display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden"
               }}>
                  {member.bio}
               </p>
            )}

            <div className="mt-3 flex items-center justify-between text-sm">
               <span className="inline-flex items-center gap-2">

               </span>

               <span className="flex items-center gap-2">
                  {member.social?.linkedin && (
                     <a href={member.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">
                        <Linkedin className="w-4 h-4" />
                     </a>
                  )}
                  {member.social?.github && (
                     <a href={member.social.github} target="_blank" rel="noreferrer" className="hover:text-primary">
                        <Github className="w-4 h-4" />
                     </a>
                  )}
                  {member.social?.twitter && (
                     <a href={member.social.twitter} target="_blank" rel="noreferrer" className="hover:text-primary">
                        <Twitter className="w-4 h-4" />
                     </a>
                  )}
               </span>
            </div>

            <div className="mt-auto pt-4">
               {showActions && (
                  <div className="flex gap-3 justify-center">
                     <Link to={`/member/${member.id}`} className="text-sm font-semibold text-primary hover:underline">
                        View Profile
                     </Link>
                     {member.teamId && (
                        <Link to={`/team/${member.teamId}`} className="text-sm font-semibold text-muted-foreground hover:underline">
                           View Team
                        </Link>
                     )}
                  </div>
               )}
            </div>
         </CardContent>
      </Card>
   );
}
