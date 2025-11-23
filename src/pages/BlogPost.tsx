import { useState, useEffect } from "react";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import NotFound from "./NotFound";

type Post = {
  id: number;
  slug: string;
  title: string;
  content: string;
  category: string;
  author: string;
  published_date: string;
  read_time: string;
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", id)
        .single();
      
      if (error) {
        console.error("Error fetching post:", error);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <Link to="/blogs">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blogs
              </Button>
            </Link>

            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30">
              <span className="text-sm font-bold text-primary">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-primary tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{new Date(post.published_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{post.read_time}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative overflow-hidden rounded-[28px] p-8 sm:p-12 lg:p-16"
              style={{ background: "hsl(var(--glass-bg))" }}
            >
              <article className="relative z-10 prose prose-invert max-w-none">
                <div className="text-base sm:text-lg text-foreground/90 leading-relaxed space-y-6">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-foreground/90">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </div>

            <div className="mt-12 flex justify-center">
              <Link to="/blogs">
                <Button variant="outline" size="lg" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  View All Posts
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

export default BlogPost;
