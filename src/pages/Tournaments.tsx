
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TournamentsHeader from '@/components/tournaments/TournamentsHeader';
import TournamentsList from '@/components/tournaments/TournamentsList';

const Tournaments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [gameFilter, setGameFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [feeFilter, setFeeFilter] = useState('all');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <TournamentsHeader 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          gameFilter={gameFilter}
          setGameFilter={setGameFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          feeFilter={feeFilter}
          setFeeFilter={setFeeFilter}
        />
        <TournamentsList 
          searchQuery={searchQuery}
          gameFilter={gameFilter}
          statusFilter={statusFilter}
          feeFilter={feeFilter}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Tournaments;
