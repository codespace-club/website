import { Calendar, Clock, MapPin, ArrowLeft, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";
import { events } from "@/data/events";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 relative">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {/* Back Button */}
            <Link to="/events">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Events
              </Button>
            </Link>

            {/* Category Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30">
              <span className="text-sm font-bold text-primary">
                {event.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-primary tracking-tight leading-tight">
              {event.title}
            </h1>

            {/* Event Meta Info */}
            <div className="flex flex-wrap gap-6 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{event.location}</span>
              </div>
              {event.attendees && (
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>{event.attendees} attendees</span>
                </div>
              )}
            </div>

            {/* Registration Button for Upcoming Events */}
            {event.status === "upcoming" && event.registrationLink && (
              <div>
                <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary text-primary-foreground">
                    Register Now
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
            {/* Description */}
            <div
              className="relative overflow-hidden rounded-[28px] p-8 sm:p-12"
              style={{
                filter: "drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))",
                backdropFilter: "brightness(1.1) blur(9px)",
                WebkitBackdropFilter: "brightness(1.1) blur(9px)",
                background: "hsl(var(--glass-bg))",
              }}
            >
              <div
                className="absolute inset-0 rounded-[28px] pointer-events-none"
                style={{
                  boxShadow: "inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
                }}
              />
              
              <div className="relative z-10 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">About This Event</h2>
                <div className="text-base sm:text-lg text-foreground/90 leading-relaxed space-y-4">
                  {event.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Venue Details */}
                <div className="pt-6 border-t border-border/50">
                  <h3 className="text-xl font-bold text-foreground mb-3">Venue Details</h3>
                  <p className="text-foreground/90">{event.venue}</p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            {event.highlights && event.highlights.length > 0 && (
              <div
                className="relative overflow-hidden rounded-[28px] p-8 sm:p-12"
                style={{
                  filter: "drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))",
                  backdropFilter: "brightness(1.1) blur(9px)",
                  WebkitBackdropFilter: "brightness(1.1) blur(9px)",
                  background: "hsl(var(--glass-bg))",
                }}
              >
                <div
                  className="absolute inset-0 rounded-[28px] pointer-events-none"
                  style={{
                    boxShadow: "inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
                  }}
                />
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Event Highlights</h2>
                  </div>
                  <ul className="space-y-3 text-base sm:text-lg text-foreground/90">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Sponsors */}
            {event.sponsors && event.sponsors.length > 0 && (
              <div
                className="relative overflow-hidden rounded-[28px] p-8 sm:p-12"
                style={{
                  filter: "drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))",
                  backdropFilter: "brightness(1.1) blur(9px)",
                  WebkitBackdropFilter: "brightness(1.1) blur(9px)",
                  background: "hsl(var(--glass-bg))",
                }}
              >
                <div
                  className="absolute inset-0 rounded-[28px] pointer-events-none"
                  style={{
                    boxShadow: "inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
                  }}
                />
                
                <div className="relative z-10 space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Our Sponsors</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {event.sponsors.map((sponsor, index) => (
                      <div
                        key={index}
                        className="p-6 rounded-2xl bg-background/30 border border-border/30 flex items-center justify-center"
                      >
                        <span className="text-lg font-semibold text-foreground">{sponsor.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Special Guests */}
            {event.guests && event.guests.length > 0 && (
              <div
                className="relative overflow-hidden rounded-[28px] p-8 sm:p-12"
                style={{
                  filter: "drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))",
                  backdropFilter: "brightness(1.1) blur(9px)",
                  WebkitBackdropFilter: "brightness(1.1) blur(9px)",
                  background: "hsl(var(--glass-bg))",
                }}
              >
                <div
                  className="absolute inset-0 rounded-[28px] pointer-events-none"
                  style={{
                    boxShadow: "inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
                  }}
                />
                
                <div className="relative z-10 space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Special Guests</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {event.guests.map((guest, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="text-xl font-bold text-primary">{guest.name}</h3>
                        <p className="text-base text-foreground/80">{guest.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-center">
              <Link to="/events">
                <Button variant="outline" size="lg" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  View All Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
