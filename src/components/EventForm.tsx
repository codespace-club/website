import { useState, useEffect, FormEvent } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Event = {
  id?: number;
  slug: string;
  title: string;
  description: string;
  full_description: string;
  event_date: string;
  time_details: string;
  location: string;
  venue: string;
  category: string;
  status: 'upcoming' | 'past';
  registration_link?: string;
};

interface EventFormProps {
  eventToEdit?: Event | null;
  onSuccess: () => void;
}

export const EventForm = ({ eventToEdit, onSuccess }: EventFormProps) => {
  const [event, setEvent] = useState<Event>({
    slug: '',
    title: '',
    description: '',
    full_description: '',
    event_date: '',
    time_details: '',
    location: '',
    venue: '',
    category: '',
    status: 'upcoming',
    registration_link: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (eventToEdit) {
      setEvent({
        ...eventToEdit,
        event_date: eventToEdit.event_date ? new Date(eventToEdit.event_date).toISOString().substring(0, 10) : ''
      });
    } else {
        // Reset to default for new event form
        setEvent({
            slug: '', title: '', description: '', full_description: '',
            event_date: '', time_details: '', location: '', venue: '',
            category: '', status: 'upcoming', registration_link: ''
        });
    }
  }, [eventToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEvent(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setEvent(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { id, ...eventData } = eventToEdit ? { ...event, id: eventToEdit.id } : event;

    let error;
    if (eventToEdit?.id) {
      const { error: updateError } = await supabase.from('events').update(eventData).eq('id', eventToEdit.id);
      error = updateError;
    } else {
      const { error: insertError } = await supabase.from('events').insert(eventData);
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
        <Input id="title" name="title" value={event.title} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">URL Slug</Label>
        <Input id="slug" name="slug" value={event.slug} onChange={handleChange} placeholder="e.g., my-awesome-event-2025" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Short Description</Label>
        <Textarea id="description" name="description" value={event.description} onChange={handleChange} rows={3} />
      </div>

       <div className="space-y-2">
        <Label htmlFor="full_description">Full Description</Label>
        <Textarea id="full_description" name="full_description" value={event.full_description} onChange={handleChange} rows={10} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
            <Label htmlFor="event_date">Event Date</Label>
            <Input id="event_date" name="event_date" type="date" value={event.event_date} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
            <Label htmlFor="time_details">Time Details</Label>
            <Input id="time_details" name="time_details" value={event.time_details} onChange={handleChange} placeholder="e.g., 9:00 AM - 5:00 PM" />
        </div>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" value={event.location} onChange={handleChange} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="venue">Venue</Label>
            <Input id="venue" name="venue" value={event.venue} onChange={handleChange} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input id="category" name="category" value={event.category} onChange={handleChange} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select name="status" value={event.status} onValueChange={(value) => handleSelectChange('status', value)}>
                <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="past">Past</SelectItem>
                </SelectContent>
            </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="registration_link">Registration Link</Label>
        <Input id="registration_link" name="registration_link" value={event.registration_link || ''} onChange={handleChange} />
      </div>

      <div className="flex justify-end pt-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
};
