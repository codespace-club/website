import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

interface PersonSocials {
   email?: string;
   linkedin?: string;
   twitter?: string;
   github?: string;
}

interface Person {
   name: string;
   title: string;
   bio: string;
   image: string;
   socials: PersonSocials;
}

const people: Person[] = [
   {
      name: "Dr. Prem Chand Vashist",
      title: "Head of Department - Computer Science and Information Technology",
      bio: "A visionary educator with 15+ years of experience shaping future technologists.",
      image: "https://www.onthisday.com/images/people/adolf-hitler.jpg?w=360",
      socials: {
         email: "hod.it@glbitm.ac.in",
         linkedin: "https://linkedin.com",
         twitter: "https://twitter.com",
      },
   },
   {
      name: "Ms. Kavya Goswami",
      title: "Club Coordinator",
      bio: "Ms. Kavya Goswami, a professor at GLBITM, provides invaluable support and guidance to CodeSpace Club. With her encouragement, the club has developed into a hub for innovation, learning, and student-led initiatives.",
      image: "https://www.rollingstone.com/wp-content/uploads/2025/08/GettyImages-2219551859-1.jpg?w=1581&h=1054&crop=1",
      socials: {
         email: "kavya.goswami@glbitm.ac.in",
         linkedin: "https://linkedin.com",
         twitter: "https://twitter.com",
      },
   },
];

const TeamHighlight = () => {
   return (
      <section className="py-20 px-4">
         <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
               Meet the People Who Lead the Way
            </h2>

            <div className="grid lg:grid-cols-1 gap-10">
               {people.map((p) => (
                  <Card
                     key={p.name}
                     className="overflow-hidden shadow-md hover:shadow-xl transition-all border border-border/40"
                  >
                     <CardContent className="p-0">
                        <div className="grid sm:grid-cols-2 p-6 gap-8">

                           {/* IMAGE */}
                           <div className="rounded-lg overflow-hidden h-72 shadow-inner">
                              <img
                                 src={p.image}
                                 alt={p.name}
                                 className="w-full h-full object-cover"
                                 onError={(e) =>
                                    (e.currentTarget.src = "/placeholder.svg")
                                 }
                              />
                           </div>

                           {/* TEXT SECTION */}
                           <div className="space-y-4 flex flex-col justify-center">
                              <div>
                                 <h3 className="text-2xl font-bold">{p.name}</h3>
                                 <p className="text-primary font-semibold">{p.title}</p>
                              </div>

                              <p className="text-muted-foreground">{p.bio}</p>

                              {/* SOCIAL ICONS */}
                              <div className="flex gap-4 pt-2">
                                 {p.socials.email && (
                                    <a href={`mailto:${p.socials.email}`} aria-label="Email">
                                       <Mail className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
                                    </a>
                                 )}
                                 {p.socials.linkedin && (
                                    <a
                                       href={p.socials.linkedin}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       aria-label="LinkedIn"
                                    >
                                       <Linkedin className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
                                    </a>
                                 )}
                                 {p.socials.twitter && (
                                    <a
                                       href={p.socials.twitter}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       aria-label="Twitter"
                                    >
                                       <Twitter className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
                                    </a>
                                 )}
                              </div>
                           </div>

                        </div>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   );
};

export default TeamHighlight;
