import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Hackathon 2024: Breaking Records",
    excerpt: "Our annual hackathon saw unprecedented participation with over 200 students building innovative solutions.",
    author: "Tech Team",
    date: "March 10, 2024",
    category: "Events",
  },
  {
    title: "Introduction to Machine Learning Workshop",
    excerpt: "A comprehensive guide to getting started with ML frameworks and building your first neural network.",
    author: "AI Chapter",
    date: "March 5, 2024",
    category: "Workshops",
  },
  {
    title: "Web3 and Blockchain: The Future",
    excerpt: "Exploring decentralized technologies and how they're reshaping the digital landscape.",
    author: "Blockchain Team",
    date: "February 28, 2024",
    category: "Articles",
  },
  {
    title: "CodeSpace Wins University Tech Fest",
    excerpt: "Our team secured first place in the inter-college coding competition with groundbreaking projects.",
    author: "Competition Team",
    date: "February 20, 2024",
    category: "News",
  },
];

export const BlogSection = () => {
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
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 lg:p-10 transition-all duration-500"
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
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
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
                  <div className="pt-2">
                    <Button
                      variant="ghost"
                      className="text-primary p-0 h-auto font-semibold group"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground"
            >
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
