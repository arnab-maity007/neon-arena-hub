
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trophy, Users } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-black z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 via-transparent to-transparent z-0"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">ArenaX</span> Community?
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Whether you're looking to host competitive tournaments or showcase your gaming skills,
            ArenaX provides the platform you need to succeed in the esports ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button size="lg" className="gradient-button px-8" asChild>
              <Link to="/organiser-dashboard">
                <Trophy className="mr-2 h-5 w-5" />
                Host a Tournament
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 px-8" asChild>
              <Link to="/player-dashboard">
                <Users className="mr-2 h-5 w-5" />
                Join as Player
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground pt-4">
            Join thousands of tournament organizers and players already on the platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
