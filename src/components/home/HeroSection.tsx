
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trophy, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden py-20 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-black z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/20 via-transparent to-transparent z-0"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">The Future of </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Esports Tournaments
            </span>
            <span className="text-white"> Starts Here</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Join the most transparent, secure, and player-focused esports tournament platform. 
            Whether you're a tournament organizer or a competitive player, NeonArena has you covered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="gradient-button px-8 py-6 text-lg" asChild>
              <Link to="/organiser-dashboard">
                <Trophy className="mr-2 h-5 w-5" />
                Host a Tournament
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 px-8 py-6 text-lg" asChild>
              <Link to="/player-dashboard">
                <Users className="mr-2 h-5 w-5" />
                Join as Player
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-neon-blue">200+</span>
              <span className="text-muted-foreground text-sm">Tournaments</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-neon-purple">5K+</span>
              <span className="text-muted-foreground text-sm">Players</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-neon-green">$1M+</span>
              <span className="text-muted-foreground text-sm">Prize Pool</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
    </div>
  );
};

export default HeroSection;
