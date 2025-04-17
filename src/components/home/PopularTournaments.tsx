
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Trophy, Calendar, ArrowRight } from 'lucide-react';

const tournaments = [
  {
    id: 1,
    title: "Valorant Champions Cup",
    game: "Valorant",
    image: "https://placehold.co/600x400/121212/00FFFF?text=Valorant+Cup&font=montserrat",
    prizePool: "$10,000",
    entryFee: "Free",
    participants: 128,
    date: "May 15, 2025",
    status: "Upcoming",
    registrationOpen: true
  },
  {
    id: 2,
    title: "League of Legends Battle",
    game: "League of Legends",
    image: "https://placehold.co/600x400/121212/8A2BE2?text=LoL+Battle&font=montserrat",
    prizePool: "$25,000",
    entryFee: "$5",
    participants: 64,
    date: "June 5, 2025",
    status: "Registration Open",
    registrationOpen: true
  },
  {
    id: 3,
    title: "CS:GO Masters",
    game: "Counter-Strike 2",
    image: "https://placehold.co/600x400/121212/39FF14?text=CS+Masters&font=montserrat",
    prizePool: "$15,000",
    entryFee: "$10",
    participants: 32,
    date: "April 30, 2025",
    status: "In Progress",
    registrationOpen: false
  }
];

const PopularTournaments = () => {
  return (
    <section className="py-20 relative">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Popular Tournaments
            </span>
          </h2>
          <Link to="/tournaments" className="flex items-center text-neon-blue hover:text-neon-purple transition-colors">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament) => (
            <Card key={tournament.id} className="tournament-card overflow-hidden bg-card border-neon-blue/20">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={tournament.image} 
                  alt={tournament.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 m-4">
                  <Badge className={`
                    ${tournament.status === 'Upcoming' ? 'bg-neon-blue/20 text-neon-blue' : 
                      tournament.status === 'Registration Open' ? 'bg-neon-green/20 text-neon-green' : 
                      'bg-neon-purple/20 text-neon-purple'}
                  `}>
                    {tournament.status}
                  </Badge>
                </div>
                <Badge className="absolute top-0 left-0 m-4 bg-black/50">
                  {tournament.game}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{tournament.title}</h3>
              </CardHeader>
              
              <CardContent className="space-y-4 pb-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Prize Pool</span>
                    <span className="font-semibold text-neon-green">{tournament.prizePool}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Entry Fee</span>
                    <span className="font-semibold">{tournament.entryFee}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{tournament.participants} teams</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{tournament.date}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                {tournament.registrationOpen ? (
                  <Button className="w-full gradient-button">
                    Register Now
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTournaments;
