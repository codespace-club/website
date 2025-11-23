import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabaseClient';
import { User } from '@supabase/supabase-js';

interface Profile {
  role: string;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSessionAndProfile = async () => {
      // Use getSession to establish the initial session
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);

      if (session?.user) {
        const { data } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();
        setProfile(data as Profile);
      }
      setLoading(false);

      // Listen for future auth changes
      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          setUser(session?.user ?? null);
          if (session?.user) {
            const { data } = await supabase
              .from('profiles')
              .select('role')
              .eq('id', session.user.id)
              .single();
            setProfile(data as Profile);
          } else {
            setProfile(null);
          }
        }
      );

      return () => {
        authListener.subscription.unsubscribe();
      };
    }
    
    getSessionAndProfile();
  }, []);

  const value = {
    user,
    profile,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
