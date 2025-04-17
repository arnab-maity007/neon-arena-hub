
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface TournamentsHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  gameFilter: string;
  setGameFilter: (game: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  feeFilter: string;
  setFeeFilter: (fee: string) => void;
}

const TournamentsHeader: React.FC<TournamentsHeaderProps> = ({
  searchQuery,
  setSearchQuery,
  gameFilter,
  setGameFilter,
  statusFilter,
  setStatusFilter,
  feeFilter,
  setFeeFilter
}) => {
  return (
    <div className="py-10 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Tournaments
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse and join upcoming esports tournaments or view past competitions.
            Use the filters below to find the perfect tournament for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search tournaments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-neon-blue/30 focus:border-neon-blue"
            />
          </div>
          
          <Select value={gameFilter} onValueChange={setGameFilter}>
            <SelectTrigger className="border-neon-blue/30">
              <SelectValue placeholder="Game Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Games</SelectItem>
              <SelectItem value="valorant">Valorant</SelectItem>
              <SelectItem value="lol">League of Legends</SelectItem>
              <SelectItem value="csgo">Counter-Strike 2</SelectItem>
              <SelectItem value="fortnite">Fortnite</SelectItem>
              <SelectItem value="dota2">Dota 2</SelectItem>
              <SelectItem value="apex">Apex Legends</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="grid grid-cols-2 gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="border-neon-blue/30">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="registration">Registration Open</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={feeFilter} onValueChange={setFeeFilter}>
              <SelectTrigger className="border-neon-blue/30">
                <SelectValue placeholder="Entry Fee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Fees</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentsHeader;
