import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowRight, PlusCircle, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/hooks/AuthContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PostForm } from "@/components/PostForm";

type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  published_date: string;
  category: string;
  read_time: string;
};

const Blogs = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { profile } = useAuth();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("published_date", { ascending: false });
    
    if (error) {
      console.error("Error fetching posts:", error);
    } else {
      setPosts(data as Post[]);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleAdd = () => {
    setEditingPost(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setIsDialogOpen(true);
  };

  const handleDelete = async (postId: number) => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    }
    const { error } = await supabase.from("posts").delete().eq("id", postId);
    if (error) {
      alert("Error deleting post: " + error.message);
    } else {
      fetchPosts(); // Refetch posts to update UI
    }
  };

  const handleFormSuccess = () => {
    setIsDialogOpen(false);
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <div className="flex justify-center items-center gap-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-primary tracking-tight">
                News & Updates
              </h1>
              {profile?.role === 'editor' && (
                <Button variant="outline" size="sm" onClick={handleAdd}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Post
                </Button>
              )}
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest club activities, workshops, tech insights, and achievements from the CodeSpace community
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {posts.map((post) => (
                <div key={post.id} className="group relative">
                  {profile?.role === 'editor' && (
                    <div className="absolute top-2 right-2 z-20 flex gap-2">
                      <Button size="icon" variant="outline" className="h-8 w-8 bg-background/50" onClick={(e) => { e.preventDefault(); handleEdit(post)}}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="destructive" className="h-8 w-8" onClick={(e) => { e.preventDefault(); handleDelete(post.id)}}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block h-full"
                  >
                    <div
                      className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 h-full transition-all duration-500 hover:scale-[1.02]"
                      style={{ background: "hsl(var(--glass-bg))" }}
                    >
                      <div className="relative z-10 space-y-4 sm:space-y-5 h-full flex flex-col">
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 self-start">
                          <span className="text-xs sm:text-sm font-bold text-primary">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground pt-4 border-t border-border/50">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5">
                              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              <span>{new Date(post.published_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingPost ? 'Edit Post' : 'Add New Post'}</DialogTitle>
          </DialogHeader>
          <PostForm postToEdit={editingPost} onSuccess={handleFormSuccess} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Blogs;
