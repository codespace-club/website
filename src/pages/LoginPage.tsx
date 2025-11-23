import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate('/'); // Redirect to homepage on successful login
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      {/* SVG Filter for glassmorphism */}
      <svg style={{ display: 'none' }}>
        <filter id="loginDisplacementFilter">
          <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="50" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div
          className="relative w-full max-w-md overflow-hidden rounded-[28px] p-8 sm:p-10"
          style={{
            filter: 'drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))',
            backdropFilter: 'brightness(1.1) blur(9px) url(#loginDisplacementFilter)',
            WebkitBackdropFilter: 'brightness(1.1) blur(9px)',
            background: 'hsl(var(--glass-bg))',
          }}
        >
          {/* Glassmorphic border effect */}
          <div
            className="absolute inset-0 rounded-[28px] pointer-events-none"
            style={{
              boxShadow: "inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-primary mb-6 text-center">Editor Login</h1>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-background/30"
                />
              </div>
              {error && <p className="text-red-500 text-sm pt-1">{error}</p>}
              <Button type="submit" className="w-full !mt-8" disabled={loading}>
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
