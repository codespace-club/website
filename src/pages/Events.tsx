import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, MapPin, ArrowRight, PlusCircle, Edit, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/hooks/AuthContext";
import { Button } from "@/components/ui/button";

// This type should match the structure of your 'events' table
type Event = {
  id: number;
  slug: string;
  title: string;
  description: string;
  // Add other fields from your table as needed
  event_date: string;
  time_details: string;
  location: string;
  category: string;
  status: "upcoming" | "past";
};

const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const { profile } = useAuth();

  const fetchEvents = async () => {
    const { data: events, error } = await supabase
      .from("events")
      .select("*")
      .order("event_date", { ascending: true });

    if (error) {
      console.error("Error fetching events:", error);
      return;
    }

    const now = new Date();
    const upcoming = events.filter((e) => new Date(e.event_date) >= now);
    const past = events.filter((e) => new Date(e.event_date) < now);
    
    setUpcomingEvents(upcoming);
    setPastEvents(past);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (eventId: number) => {
    if (!window.confirm("Are you sure you want to delete this event?")) {
      return;
    }
    const { error } = await supabase.from("events").delete().eq("id", eventId);
    if (error) {
      alert("Error deleting event: " + error.message);
    } else {
      fetchEvents(); // Refetch events to update the UI
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 animate-fade-in">
            <div className="text-center space-y-3 sm:space-y-4 px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight">Events</h1>
              <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Join us for exciting tech events, workshops, and competitions
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-primary rounded-full" />
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                    Upcoming Events
                  </h2>
                </div>
                {profile?.role === 'editor' && (
                  <Button variant="ghost" onClick={() => alert("Add event form not implemented yet.")}>
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Add Event
                  </Button>
                )}
              </div>

              {upcomingEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="group relative">
                      {profile?.role === 'editor' && (
                        <div className="absolute top-2 right-2 z-20 flex gap-2">
                          <Button size="icon" variant="outline" className="h-8 w-8 bg-background/50" onClick={(e) => { e.preventDefault(); alert("Edit form not implemented yet.")}}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="destructive" className="h-8 w-8" onClick={(e) => { e.preventDefault(); handleDelete(event.id)}}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                      <Link
                        to={`/events/${event.slug}`}
                        className="block h-full"
                      >
                        <div
                          className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 h-full transition-all duration-500 hover:scale-[1.02]"
                          style={{ background: 'hsl(var(--glass-bg))' }}
                        >
                           <div className="relative z-10 space-y-4 h-full flex flex-col">
                            <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 self-start">
                              <span className="text-xs sm:text-sm font-bold text-primary">
                                {event.category}
                              </span>
                            </div>
                            <div className="space-y-2 flex-grow">
                              <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {event.title}
                              </h3>
                              <p className="text-sm sm:text-base text-muted-foreground">
                                {event.description}
                              </p>
                            </div>
                            <div className="space-y-3 pt-2">
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                                <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{new Date(event.event_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{event.time_details}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all pt-2">
                              View Details
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p>No upcoming events at the moment. Check back soon!</p>
                </div>
              )}
            </div>

            {pastEvents.length > 0 && (
               <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-muted rounded-full" />
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                    Past Events
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {pastEvents.map((event) => (
                     <div key={event.id} className="group relative">
                      {profile?.role === 'editor' && (
                        <div className="absolute top-2 right-2 z-20 flex gap-2">
                           <Button size="icon" variant="outline" className="h-8 w-8 bg-background/50" onClick={(e) => { e.preventDefault(); alert("Edit form not implemented yet.")}}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="destructive" className="h-8 w-8" onClick={(e) => { e.preventDefault(); handleDelete(event.id)}}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                      <Link
                        to={`/events/${event.slug}`}
                        className="block h-full"
                      >
                        <div
                          className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 h-full transition-all duration-500 hover:scale-[1.02] opacity-80 hover:opacity-100"
                           style={{ background: 'hsl(var(--glass-bg))' }}
                        >
                           <div className="relative z-10 space-y-4 h-full flex flex-col">
                            <div className="inline-block px-3 py-1 rounded-full bg-muted/20 border border-muted/30 self-start">
                               <span className="text-xs sm:text-sm font-bold text-muted-foreground">
                                {event.category}
                              </span>
                            </div>
                            <div className="space-y-2 flex-grow">
                              <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {event.title}
                              </h3>
                              <p className="text-sm sm:text-base text-muted-foreground">
                                {event.description}
                              </p>
                            </div>
                            <div className="space-y-3 pt-2">
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                                <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                <span>{new Date(event.event_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                                <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary font-bold text-sm group-hover:gap-3 transition-all pt-2">
                              View Details
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
