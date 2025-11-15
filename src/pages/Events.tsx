import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, MapPin } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Web Development Workshop",
      date: "March 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Tech Lab, Building A",
      description: "Learn modern web development with React and TypeScript",
    },
    {
      title: "Hackathon 2024",
      date: "March 22-23, 2024",
      time: "24 Hours",
      location: "Main Auditorium",
      description: "24-hour coding marathon with exciting prizes",
    },
    {
      title: "AI/ML Seminar",
      date: "March 30, 2024",
      time: "3:00 PM - 6:00 PM",
      location: "Conference Hall",
      description: "Exploring the future of Artificial Intelligence",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SVG Filter for glassmorphism */}
      <svg style={{ display: 'none' }}>
        <filter id="eventsDisplacementFilter">
          <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="200" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <Header />
      <main className="pt-24 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 animate-fade-in">
            <div className="text-center space-y-3 sm:space-y-4 px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight">Events</h1>
              <p className="text-base sm:text-xl text-muted-foreground">Join us for exciting tech events and workshops</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 group hover:scale-[1.02] transition-all duration-500"
                  style={{
                    filter: 'drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))',
                    backdropFilter: 'brightness(1.1) blur(9px) url(#eventsDisplacementFilter)',
                    WebkitBackdropFilter: 'brightness(1.1) blur(9px)',
                    background: 'hsl(var(--glass-bg))',
                  }}
                >
                  {/* Glassmorphic border effect */}
                  <div 
                    className="absolute inset-0 rounded-[28px] pointer-events-none"
                    style={{
                      boxShadow: 'inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)',
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-primary">{event.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{event.description}</p>
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                        <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                        <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
