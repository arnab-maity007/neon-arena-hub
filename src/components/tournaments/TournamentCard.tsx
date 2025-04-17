
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Trophy, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Tournament {
  id: number;
  title: string;
  game: string;
  image: string;
  prizePool: string;
  entryFee: string;
  participants: number;
  maxParticipants: number;
  date: string;
  time: string;
  status: string;
  registrationOpen: boolean;
  organizer: string;
  platformFee?: string;
}

interface TournamentCardProps {
  tournament: Tournament;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ tournament }) => {
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Upcoming':
        return 'bg-neon-blue/20 text-neon-blue';
      case 'Registration Open':
        return 'bg-neon-green/20 text-neon-green';
      case 'In Progress':
        return 'bg-neon-purple/20 text-neon-purple';
      case 'Completed':
        return 'bg-muted-foreground/20 text-muted-foreground';
      default:
        return 'bg-neon-blue/20 text-neon-blue';
    }
  };

  return (
    <Card className="tournament-card overflow-hidden bg-card border-neon-blue/20">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={tournament.image} 
          alt={tournament.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 right-0 m-4">
          <Badge className={getStatusColor(tournament.status)}>
            {tournament.status}
          </Badge>
        </div>
        <Badge className="absolute top-0 left-0 m-4 bg-black/50">
          {tournament.game}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{tournament.title}</h3>
        <p className="text-sm text-muted-foreground">Organized by {tournament.organizer}</p>
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
            {tournament.platformFee && (
              <span className="text-xs text-muted-foreground">+{tournament.platformFee} platform fee</span>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{tournament.participants}/{tournament.maxParticipants}</span>
          </div>
          <div className="flex items-center">
            <Trophy className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>Top 3 win</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{tournament.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{tournament.time}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        {tournament.registrationOpen ? (
          <Button className="w-full gradient-button" asChild>
            <Link to={`/tournaments/${tournament.id}`}>
              Register Now
            </Link>
          </Button>
        ) : (
          <Button variant="outline" className="w-full" asChild>
            <Link to={`/tournaments/${tournament.id}`}>
              View Details
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default TournamentCard;
