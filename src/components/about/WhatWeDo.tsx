import { motion } from "framer-motion";
import { Code, Users, Lightbulb, Rocket, Star, Flame, Zap, PenTool } from "lucide-react";

// TIMELINE DATA
const items = [
   {
      title: "Workshops",
      desc: "Hands-on sessions where members learn real-world tools, frameworks, and technologies by building along with mentors.",
      icon: Code,
      lineIcon: Star,
      color: "#6366F1",
      image: "https://t4.ftcdn.net/jpg/06/69/61/25/240_F_669612584_zLLNhSAd3FsLgvN5IVIWJVia9rBKbr1Z.jpg",
   },
   {
      title: "Tech Talks",
      desc: "We host speakers from top companies and startups to share insights about industry trends, career paths, and cutting-edge innovation.",
      icon: Lightbulb,
      lineIcon: Flame,
      color: "#F59E0B",
      image: "https://www.aaen.com.au/wp-content/uploads/2014/01/tech-talk.jpg",
   },
   {
      title: "Hackathons",
      desc: "Intense, fast-paced innovation marathons where teams turn ideas into functional prototypes within hours.",
      icon: Rocket,
      lineIcon: Zap,
      color: "#10B981",
      image: "https://futuramo.com/blog/wp-content/uploads/2023/05/html-system-website-concept.jpg",
   },
   {
      title: "Community Projects",
      desc: "We build real products together — open-source tools, websites, apps, and campus utilities that create real impact.",
      icon: Users,
      lineIcon: PenTool,
      color: "#EC4899",
      image: "https://europeanschool.ge/app/uploads/old_images/ib/galleries/2015-04/community.png",
   },
];

// Fade & Slide Animation
const slideVariant = (direction: "left" | "right") => ({
   hidden: { opacity: 0, x: direction === "left" ? -80 : 80 },
   show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
});

const WhatWeDo = () => {
   return (
      <section className="py-24 bg-background">
         <div className="container mx-auto px-4 max-w-5xl relative">

            {/* Heading */}
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center mb-24"
            >
               <h2 className="text-4xl font-bold text-primary mb-4">What We Do</h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A story-driven timeline showcasing the experiences and opportunities our club creates.
               </p>
            </motion.div>

            {/* Wrapper so heading NEVER overlaps */}
            <div className="relative pt-20">

               {/* Vertical Line (starts AFTER heading) */}
               <div
                  className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 
            bg-gradient-to-b from-primary/60 via-primary to-primary/60 
            animate-pulse rounded-full pointer-events-none"
               />

               {/* TIMELINE */}
               <div className="space-y-40 relative">
                  {items.map((item, index) => {
                     const Icon = item.icon;
                     const LineIcon = item.lineIcon;
                     const isLeft = index % 2 === 0;

                     return (
                        <motion.div
                           key={index}
                           variants={slideVariant(isLeft ? "left" : "right")}
                           initial="hidden"
                           whileInView="show"
                           viewport={{ once: true, amount: 0.3 }}
                           className={`relative flex flex-col md:flex-row items-center gap-10 ${isLeft ? "md:flex-row-reverse" : ""
                              }`}
                        >
                           {/* CENTER DOT */}
                           <div
                              className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full shadow-xl z-20 border-2 border-background"
                              style={{ backgroundColor: item.color }}
                           />

                           {/* EXTRA ICON ON LINE */}
                           <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5 }}
                              className="absolute left-1/2 -translate-x-1/2 -top-14 z-20"
                           >
                              <div
                                 className="p-3 rounded-full shadow-lg border border-border/20 bg-background"
                                 style={{ color: item.color }}
                              >
                                 <LineIcon className="w-6 h-6" />
                              </div>
                           </motion.div>

                           {/* IMAGE */}
                           <motion.div
                              whileHover={{ scale: 1.03 }}
                              transition={{ type: "spring", stiffness: 200 }}
                              className="w-full md:w-1/2"
                           >
                              <img
                                 src={item.image}
                                 alt={item.title}
                                 className="rounded-xl shadow-xl border border-border/40 object-cover w-full h-64 md:h-72"
                              />
                           </motion.div>

                           {/* TEXT CARD */}
                           <motion.div
                              whileHover={{ scale: 1.03 }}
                              className="w-full md:w-1/2 p-8 rounded-xl bg-card border border-border/40 
                               shadow-xl backdrop-blur-sm"
                           >
                              <div className="flex items-start gap-4">
                                 {/* ICON */}
                                 <div
                                    className="p-4 rounded-xl shadow border border-border/20"
                                    style={{
                                       color: item.color,
                                       backgroundColor: `${item.color}22`,
                                    }}
                                 >
                                    <Icon className="w-7 h-7" />
                                 </div>

                                 {/* CONTENT */}
                                 <div>
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                 </div>
                              </div>
                           </motion.div>
                        </motion.div>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};

export default WhatWeDo;
