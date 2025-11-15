import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

export const BlogSection = () => {
  // Show only first 4 posts on home page
  const featuredPosts = blogPosts.slice(0, 4);
  
  return (
    <section className="py-20 sm:py-32 relative">
      {/* SVG Filter for glassmorphism */}
      <svg style={{ display: "none" }}>
        <filter id="blogDisplacementFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.01"
            numOctaves="2"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="200"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Background Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4 px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight">
              News & Updates
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest club activities, workshops, and tech insights
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="block group autoblur"
              >
                <div
                  className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    filter: "drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))",
                    backdropFilter:
                      "brightness(1.1) blur(9px) url(#blogDisplacementFilter)",
                    WebkitBackdropFilter: "brightness(1.1) blur(9px)",
                    background: "hsl(var(--glass-bg))",
                  }}
                >
                {/* Glassmorphic border effect */}
                <div
                  className="absolute inset-0 rounded-[28px] pointer-events-none"
                  style={{
                    boxShadow:
                      "inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 space-y-4 sm:space-y-5">
                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
                    <span className="text-xs sm:text-sm font-bold text-primary">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all pt-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center pt-4">
            <Link to="/blogs">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground"
              >
                View All Posts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
