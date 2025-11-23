import { useState, useEffect, FormEvent } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type Post = {
  id?: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  published_date: string;
  category: string;
  read_time: string;
};

interface PostFormProps {
  postToEdit?: Post | null;
  onSuccess: () => void;
}

const defaultState: Post = {
    slug: '',
    title: '',
    excerpt: '',
    content: '',
    author: '',
    published_date: new Date().toISOString().substring(0, 10),
    category: '',
    read_time: '',
};

export const PostForm = ({ postToEdit, onSuccess }: PostFormProps) => {
  const [post, setPost] = useState<Post>(defaultState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (postToEdit) {
        setPost({
            ...postToEdit,
            published_date: postToEdit.published_date ? new Date(postToEdit.published_date).toISOString().substring(0, 10) : new Date().toISOString().substring(0, 10)
        });
    } else {
        setPost(defaultState);
    }
  }, [postToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { id, ...postData } = postToEdit ? { ...post, id: postToEdit.id } : post;

    let error;
    if (postToEdit?.id) {
      const { error: updateError } = await supabase.from('posts').update(postData).eq('id', postToEdit.id);
      error = updateError;
    } else {
      const { error: insertError } = await supabase.from('posts').insert(postData);
      error = insertError;
    }

    if (error) {
      alert('Error: ' + error.message);
    } else {
      onSuccess();
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" value={post.title} onChange={handleChange} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="slug">URL Slug</Label>
        <Input id="slug" name="slug" value={post.slug} onChange={handleChange} placeholder="e.g., my-awesome-post-2025" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea id="excerpt" name="excerpt" value={post.excerpt} onChange={handleChange} rows={3} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea id="content" name="content" value={post.content} onChange={handleChange} rows={15} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
            <Label htmlFor="author">Author</Label>
            <Input id="author" name="author" value={post.author} onChange={handleChange} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="published_date">Publish Date</Label>
            <Input id="published_date" name="published_date" type="date" value={post.published_date} onChange={handleChange} required />
        </div>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input id="category" name="category" value={post.category} onChange={handleChange} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="read_time">Read Time</Label>
            <Input id="read_time" name="read_time" value={post.read_time} onChange={handleChange} placeholder="e.g., 5 min read" />
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Save Post'}
        </Button>
      </div>
    </form>
  );
};
