const roadmap = [
   { year: "2024", goal: "Launch AI & ML special interest groups." },
   { year: "2025", goal: "Host the biggest inter-college tech fest on campus." },
   { year: "2026", goal: "Build a student-led open-source incubator." },
];

const FutureVision = () => {
   return (
      <section className="py-20 bg-background">
         <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-primary text-center mb-8">
               Looking Ahead
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
               Our journey doesn’t end here. We are constantly exploring new ideas,
               designing impactful projects, and creating opportunities for the next generation
               of innovators.
            </p>

            <div className="space-y-8">
               {roadmap.map((item, idx) => (
                  <div
                     key={idx}
                     className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition bg-card/40"
                  >
                     <h3 className="text-xl font-bold text-primary">{item.year}</h3>
                     <p className="text-muted-foreground mt-1">{item.goal}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default FutureVision;
