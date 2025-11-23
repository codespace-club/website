import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, ArrowLeft, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import NotFound from "./NotFound";

type Event = {
  id: number;
  slug: string;
  title: string;
  category: string;
  event_date: string;
  time_details: string;
  location: string;
  venue: string;
  attendees: number;
  registration_link: string;
  status: 'upcoming' | 'past';
  full_description: string;
  highlights: string[];
  sponsors: { name: string }[];
  guests: { name: string; role: string }[];
};

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("slug", id)
        .single();

      if (error) {
        console.error("Error fetching event:", error);
      } else {
        setEvent(data);
      }
      setLoading(false);
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading event details...</p>
      </div>
    );
  }

  if (!event) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            <Link to="/events">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Events
              </Button>
            </Link>

            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30">
              <span className="text-sm font-bold text-primary">
                {event.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-primary tracking-tight leading-tight">
              {event.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{new Date(event.event_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>{event.time_details}</span>
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

            {event.status === "upcoming" && event.registration_link && (
              <div>
                <a href={event.registration_link} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary text-primary-foreground">
                    Register Now
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
            <div
              className="relative overflow-hidden rounded-[28px] p-8 sm:p-12"
              style={{ background: "hsl(var(--glass-bg))" }}
            >
              <div className="relative z-10 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">About This Event</h2>
                <div className="text-base sm:text-lg text-foreground/90 leading-relaxed space-y-4">
                  {event.full_description.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="pt-6 border-t border-border/50">
                  <h3 className="text-xl font-bold text-foreground mb-3">Venue Details</h3>
                  <p className="text-foreground/90">{event.venue}</p>
                </div>
              </div>
            </div>

            {event.highlights && event.highlights.length > 0 && (
              <div className="relative overflow-hidden rounded-[28px] p-8 sm:p-12" style={{ background: "hsl(var(--glass-bg))" }}>
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

            {event.sponsors && event.sponsors.length > 0 && (
              <div className="relative overflow-hidden rounded-[28px] p-8 sm:p-12" style={{ background: "hsl(var(--glass-bg))" }}>
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

            {event.guests && event.guests.length > 0 && (
              <div className="relative overflow-hidden rounded-[28px] p-8 sm:p-12" style={{ background: "hsl(var(--glass-bg))" }}>
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
      <Footer />
    </div>
  );
};

export default EventDetails;
