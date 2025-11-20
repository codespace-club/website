import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { events } from "@/data/events";
import { motion } from "framer-motion";

const Events = () => {
  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const pastEvents = events.filter((event) => event.status === "past");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SVG Filter */}
      <svg style={{ display: "none" }}>
        <filter id="eventsDisplacementFilter">
          <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="200" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <Header />
      <main className="pt-24 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 animate-fade-in">
            {/* Page Header */}
            <div className="text-center space-y-3 sm:space-y-4 px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Events
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Join us for exciting tech events, workshops, and competitions
              </p>
            </div>

            {/* Search + Sort */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full max-w-md px-4 py-2 rounded-xl bg-muted/20 border border-muted/30"
              />
              <select className="px-3 py-2 rounded-xl bg-muted/20 border border-muted/30">
                <option>Sort by Date</option>
                <option>Sort by Category</option>
              </select>
            </div>

            {/* Upcoming Events */}
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  Upcoming Events
                </h2>
              </div>

              {upcomingEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {upcomingEvents.map((event, index) => (
                    <Link key={event.id} to={`/events/${event.id}`} className="block group">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 h-full transition-all duration-500 hover:scale-[1.02] hover:rotate-[0.5deg]"
                        style={{
                          filter: "drop-shadow(-8px -10px 46px rgba(0,0,0,0.37))",
                          backdropFilter: "brightness(1.1) blur(9px) url(#eventsDisplacementFilter)",
                          WebkitBackdropFilter: "brightness(1.1) blur(9px)",
                          background: "hsl(var(--glass-bg))",
                        }}
                      >
                        {/* Featured Badge */}
                        {index === 0 && (
                          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-500 text-xs font-bold">
                            Featured
                          </span>
                        )}

                        {/* Inner Border */}
                        <div
                          className="absolute inset-0 rounded-[28px] pointer-events-none"
                          style={{ boxShadow: "inset 6px 6px 0px -6px rgba(255,255,255,0.7), inset 0 0 8px 1px rgba(255,255,255,0.7)" }}
                        />

                        {/* Content */}
                        <div className="relative z-10 space-y-4 h-full flex flex-col">
                          <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 self-start">
                            <span className="text-xs sm:text-sm font-bold text-primary">{event.category}</span>
                          </div>

                          <div className="space-y-2 flex-grow">
                            <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">
                              {event.title}
                            </h3>
                            <p className="text-sm sm:text-base text-muted-foreground">{event.description}</p>
                          </div>

                          <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span>
                                {new Date(event.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                              <Clock className="w-4 h-4 text-primary" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span>{event.location}</span>
                            </div>
                          </div>

                          {/* Button-style View Details */}
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition font-bold text-primary text-sm">
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">No upcoming events at the moment. Check back soon!</div>
              )}
            </div>

            {/* Past Events */}
            {pastEvents.length > 0 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-muted rounded-full" />
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Past Events</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {pastEvents.map((event) => (
                    <Link key={event.id} to={`/events/${event.id}`} className="block group">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 h-full transition-all duration-500 hover:scale-[1.02] hover:rotate-[0.5deg] opacity-80 hover:opacity-100"
                        style={{
                          filter: "drop-shadow(-8px -10px 46px rgba(0,0,0,0.37))",
                          backdropFilter: "brightness(1.1) blur(9px) url(#eventsDisplacementFilter)",
                          background: "hsl(var(--glass-bg))",
                        }}
                      >
                        <div
                          className="absolute inset-0 rounded-[28px] pointer-events-none"
                          style={{ boxShadow: "inset 6px 6px 0px -6px rgba(255,255,255,0.7), inset 0 0 8px 1px rgba(255,255,255,0.7)" }}
                        />

                        <div className="relative z-10 space-y-4 h-full flex flex-col">
                          <div className="inline-block px-3 py-1 rounded-full bg-muted/20 border border-muted/30 self-start">
                            <span className="text-xs sm:text-sm font-bold text-muted-foreground">{event.category}</span>
                          </div>

                          <div className="space-y-2 flex-grow">
                            <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">
                              {event.title}
                            </h3>
                            <p className="text-sm sm:text-base text-muted-foreground">{event.description}</p>
                          </div>

                          <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span>
                                {new Date(event.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <span>{event.location}</span>
                            </div>
                          </div>

                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition font-bold text-muted-foreground group-hover:text-primary text-sm">
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
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
