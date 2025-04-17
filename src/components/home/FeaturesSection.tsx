
import React from 'react';
import { Shield, Trophy, BadgeCheck, CoinsStacked, LineChart, Clock } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-neon-blue" />,
    title: "Secure Verification",
    description: "Multi-step verification process for players and tournament organizers to ensure legitimacy and prevent fraud."
  },
  {
    icon: <Trophy className="h-10 w-10 text-neon-purple" />,
    title: "Transparent Tournaments",
    description: "Clear rules, real-time updates, and public leaderboards for maximum transparency in competition."
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-neon-green" />,
    title: "Trusted Organizers",
    description: "Organizers are thoroughly vetted and can earn reputation scores based on tournament execution."
  },
  {
    icon: <CoinsStacked className="h-10 w-10 text-neon-blue" />,
    title: "Secure Prize Pools",
    description: "Transparent prize pool management with secure distribution to winners using smart escrow system."
  },
  {
    icon: <LineChart className="h-10 w-10 text-neon-purple" />,
    title: "Performance Analytics",
    description: "Track your performance across tournaments with detailed statistics and growth trends."
  },
  {
    icon: <Clock className="h-10 w-10 text-neon-green" />,
    title: "Easy Scheduling",
    description: "Schedule tournaments with automatic time zone conversion and reminders for participants."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Platform Features
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform is designed with both tournament organizers and players in mind, 
            offering powerful tools to make esports tournaments transparent, secure, and fun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glassmorphism rounded-xl p-6 card-hover border-neon-blue/20 hover:border-neon-blue/60">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
