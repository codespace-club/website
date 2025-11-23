import heroImage from "@/assets/team-photo.png";

const AboutHero = () => {
   return (
      <section className="relative py-20">
         <div className="absolute inset-0 bg-gradient-glow opacity-20 blur-3xl"></div>

         <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-primary mb-6">
               Our Journey Begins with Passion
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
               "Empowering tech enthusiasts to explore, innovate, and shape the future!"
            </p>

            <div className="mt-12 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-strong border border-border/50">
               <img
                  src={heroImage}
                  alt="CodeSpace Team"
                  className="w-full object-cover"
               />
            </div>
         </div>
      </section>
   );
};

export default AboutHero;
