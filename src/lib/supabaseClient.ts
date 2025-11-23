import { createClient } from '@supabase/supabase-js'

// Import environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Basic validation to ensure variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and anon key are required.')
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
