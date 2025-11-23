const timeline = [
   { year: "2022", event: "CodeSpace was founded by 10 passionate students." },
   { year: "2022", event: "Hosted our first hackathon with 150+ participants." },
   { year: "2023", event: "Expanded the active members across departments." },
   { year: "2023", event: "Launched community projects & open-source initiatives." },
];

const OurStory = () => {
   return (
      <section className="container mx-auto px-4 max-w-4xl">
         <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Story</h2>
            <p className="text-muted-foreground text-lg">
               At CodeSpace, we believe in creating an inclusive and supportive environment where students can explore different areas of programming, whether it's web development, app development, AI, machine learning, or competitive coding. Our club organizes numerous events throughout the year to encourage learning and collaboration.
            </p>
         </div>

         <div className="space-y-10 border-l border-primary/40 pl-8">
            {timeline.map((item, idx) => (
               <div key={idx} className="relative">
                  <div className="absolute -left-4 top-1 w-3 h-3 bg-primary rounded-full"></div>
                  <h3 className="text-xl font-bold">{item.year}</h3>
                  <p className="text-muted-foreground mt-1">{item.event}</p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default OurStory;
