
import React from 'react';
import { LayoutDashboard, UserCheck, GamepadIcon, Award } from 'lucide-react';

const steps = [
  {
    icon: <UserCheck className="h-12 w-12 text-neon-blue" />,
    title: "Verify Your Identity",
    description: "Complete our quick verification process to confirm your identity and ensure fair play.",
    color: "border-neon-blue"
  },
  {
    icon: <LayoutDashboard className="h-12 w-12 text-neon-purple" />,
    title: "Create or Join Tournaments",
    description: "Organize your own tournament with custom rules or join existing competitions.",
    color: "border-neon-purple"
  },
  {
    icon: <GamepadIcon className="h-12 w-12 text-neon-green" />,
    title: "Compete and Track Progress",
    description: "Play matches, report scores, and track your progress in real-time through your dashboard.",
    color: "border-neon-green"
  },
  {
    icon: <Award className="h-12 w-12 text-neon-pink" />,
    title: "Win Prizes Securely",
    description: "Winners receive prizes directly through our secure payout system with full transparency.",
    color: "border-neon-pink"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              How It Works
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes it easy to get started with NeonArena, 
            whether you're hosting or participating in tournaments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`flex flex-col items-center p-6 rounded-xl glassmorphism ${step.color}`}>
                <div className="mb-4 relative">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-background to-muted blur-sm"></div>
                  <div className="relative">{step.icon}</div>
                </div>
                <span className="flex items-center justify-center w-8 h-8 bg-muted border border-border rounded-full text-sm font-bold mb-4">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-0 -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
