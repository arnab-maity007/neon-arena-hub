
import React from 'react';
import TournamentCard, { Tournament } from './TournamentCard';

// Sample data for tournaments
const allTournaments: Tournament[] = [
  {
    id: 1,
    title: "Valorant Champions Cup",
    game: "Valorant",
    image: "https://placehold.co/600x400/121212/00FFFF?text=Valorant+Cup&font=montserrat",
    prizePool: "$10,000",
    entryFee: "Free",
    participants: 64,
    maxParticipants: 128,
    date: "May 15, 2025",
    time: "2:00 PM UTC",
    status: "Upcoming",
    registrationOpen: true,
    organizer: "ESL Gaming",
    platformFee: "2%"
  },
  {
    id: 2,
    title: "League of Legends Battle",
    game: "League of Legends",
    image: "https://placehold.co/600x400/121212/8A2BE2?text=LoL+Battle&font=montserrat",
    prizePool: "$25,000",
    entryFee: "$5",
    participants: 32,
    maxParticipants: 64,
    date: "June 5, 2025",
    time: "5:00 PM UTC",
    status: "Registration Open",
    registrationOpen: true,
    organizer: "Riot Games",
    platformFee: "2%"
  },
  {
    id: 3,
    title: "CS:GO Masters",
    game: "Counter-Strike 2",
    image: "https://placehold.co/600x400/121212/39FF14?text=CS+Masters&font=montserrat",
    prizePool: "$15,000",
    entryFee: "$10",
    participants: 16,
    maxParticipants: 32,
    date: "April 30, 2025",
    time: "3:00 PM UTC",
    status: "In Progress",
    registrationOpen: false,
    organizer: "FACEIT",
    platformFee: "2%"
  },
  {
    id: 4,
    title: "Fortnite Championship",
    game: "Fortnite",
    image: "https://placehold.co/600x400/121212/FF10F0?text=Fortnite+Champs&font=montserrat",
    prizePool: "$50,000",
    entryFee: "$15",
    participants: 75,
    maxParticipants: 100,
    date: "May 25, 2025",
    time: "6:00 PM UTC",
    status: "Registration Open",
    registrationOpen: true,
    organizer: "Epic Games",
    platformFee: "2%"
  },
  {
    id: 5,
    title: "Dota 2 International Qualifiers",
    game: "Dota 2",
    image: "https://placehold.co/600x400/121212/00FFFF?text=Dota+2+Qualifiers&font=montserrat",
    prizePool: "$20,000",
    entryFee: "$8",
    participants: 45,
    maxParticipants: 64,
    date: "June 15, 2025",
    time: "1:00 PM UTC",
    status: "Upcoming",
    registrationOpen: true,
    organizer: "Valve",
    platformFee: "2%"
  },
  {
    id: 6,
    title: "Apex Legends Pro Series",
    game: "Apex Legends",
    image: "https://placehold.co/600x400/121212/8A2BE2?text=Apex+Pro+Series&font=montserrat",
    prizePool: "$12,000",
    entryFee: "Free",
    participants: 30,
    maxParticipants: 30,
    date: "May 10, 2025",
    time: "7:00 PM UTC",
    status: "In Progress",
    registrationOpen: false,
    organizer: "EA Sports",
    platformFee: "2%"
  },
  {
    id: 7,
    title: "Rocket League Championship",
    game: "Rocket League",
    image: "https://placehold.co/600x400/121212/39FF14?text=Rocket+League&font=montserrat",
    prizePool: "$8,000",
    entryFee: "$5",
    participants: 24,
    maxParticipants: 32,
    date: "June 20, 2025",
    time: "4:00 PM UTC",
    status: "Upcoming",
    registrationOpen: true,
    organizer: "Psyonix",
    platformFee: "2%"
  },
  {
    id: 8,
    title: "Overwatch 2 Pro Cup",
    game: "Overwatch",
    image: "https://placehold.co/600x400/121212/FF10F0?text=Overwatch+Cup&font=montserrat",
    prizePool: "$18,000",
    entryFee: "$10",
    participants: 12,
    maxParticipants: 16,
    date: "May 30, 2025",
    time: "3:30 PM UTC",
    status: "Registration Open",
    registrationOpen: true,
    organizer: "Blizzard",
    platformFee: "2%"
  },
  {
    id: 9,
    title: "Rainbow Six Invitational",
    game: "Rainbow Six Siege",
    image: "https://placehold.co/600x400/121212/00FFFF?text=R6+Invitational&font=montserrat",
    prizePool: "$30,000",
    entryFee: "$12",
    participants: 16,
    maxParticipants: 16,
    date: "July 5, 2025",
    time: "5:00 PM UTC",
    status: "Upcoming",
    registrationOpen: true,
    organizer: "Ubisoft",
    platformFee: "2%"
  }
];

interface TournamentsListProps {
  searchQuery: string;
  gameFilter: string;
  statusFilter: string;
  feeFilter: string;
}

const TournamentsList: React.FC<TournamentsListProps> = ({
  searchQuery,
  gameFilter,
  statusFilter,
  feeFilter
}) => {
  const filteredTournaments = allTournaments.filter(tournament => {
    // Search query filter
    if (searchQuery && !tournament.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Game filter
    if (gameFilter !== 'all' && tournament.game.toLowerCase() !== gameFilter.toLowerCase()) {
      return false;
    }
    
    // Status filter
    if (statusFilter !== 'all') {
      const statusMap: Record<string, string> = {
        'upcoming': 'Upcoming',
        'registration': 'Registration Open',
        'in-progress': 'In Progress',
        'completed': 'Completed'
      };
      
      if (tournament.status !== statusMap[statusFilter]) {
        return false;
      }
    }
    
    // Fee filter
    if (feeFilter !== 'all') {
      if (feeFilter === 'free' && tournament.entryFee !== 'Free') {
        return false;
      }
      if (feeFilter === 'paid' && tournament.entryFee === 'Free') {
        return false;
      }
    }
    
    return true;
  });

  return (
    <div className="py-10">
      <div className="container px-4 mx-auto">
        {filteredTournaments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTournaments.map(tournament => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No tournaments found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search query to find more tournaments.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TournamentsList;
