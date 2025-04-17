
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CheckCircle, Lock, Database, UserCheck, FileCheck } from 'lucide-react';

const Verification = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Verification & Security
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              At NeonArena, we prioritize transparency and security. Our verification system ensures 
              legitimate tournaments and players, creating a trusted environment for esports competitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="glassmorphism border-neon-blue/30">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Shield className="h-6 w-6 text-neon-blue mr-2" />
                  <CardTitle>For Tournament Organisers</CardTitle>
                </div>
                <CardDescription>
                  Our verification ensures that tournament organisers are legitimate and accountable.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-blue/20 text-neon-blue">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Identity Verification</h3>
                    <p className="text-muted-foreground">
                      Organisers must provide government ID and proof of connection to their stated organization.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-blue/20 text-neon-blue">
                      <Lock className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Secure Prize Pool Management</h3>
                    <p className="text-muted-foreground">
                      Tournament prize pools are held in secure escrow until distribution criteria are met.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-blue/20 text-neon-blue">
                      <Database className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Transparent Records</h3>
                    <p className="text-muted-foreground">
                      All tournament results, prize distributions, and organiser ratings are publicly available.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-neon-purple/30">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <UserCheck className="h-6 w-6 text-neon-purple mr-2" />
                  <CardTitle>For Players</CardTitle>
                </div>
                <CardDescription>
                  Player verification helps prevent cheating and ensures fair competition.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-purple/20 text-neon-purple">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Account Verification</h3>
                    <p className="text-muted-foreground">
                      Link your gaming accounts (Steam, Riot, Epic, etc.) to verify ownership and prevent smurfing.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-purple/20 text-neon-purple">
                      <Lock className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Secure Personal Information</h3>
                    <p className="text-muted-foreground">
                      Your personal data is encrypted and only used for verification purposes. We never share it with third parties.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-purple/20 text-neon-purple">
                      <FileCheck className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Anti-Cheat Measures</h3>
                    <p className="text-muted-foreground">
                      Our platform integrates with game anti-cheat systems to ensure all matches are fair and competitive.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Verification Process</h2>
            <div className="space-y-10">
              <div className="relative pl-12 pb-10 border-l-2 border-neon-blue/50">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-neon-blue text-white">1</div>
                <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
                <p className="text-muted-foreground">
                  Sign up with your email and password, and verify your email address.
                </p>
              </div>
              
              <div className="relative pl-12 pb-10 border-l-2 border-neon-purple/50">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-neon-purple text-white">2</div>
                <h3 className="text-xl font-semibold mb-2">Complete Your Profile</h3>
                <p className="text-muted-foreground">
                  Add your basic information, including name, country, and preferred games.
                </p>
              </div>
              
              <div className="relative pl-12 pb-10 border-l-2 border-neon-green/50">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-neon-green text-white">3</div>
                <h3 className="text-xl font-semibold mb-2">Link Gaming Accounts</h3>
                <p className="text-muted-foreground">
                  Connect your gaming accounts to verify ownership and game statistics.
                </p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-neon-blue text-white">4</div>
                <h3 className="text-xl font-semibold mb-2">ID Verification (for Tournament Organizers)</h3>
                <p className="text-muted-foreground">
                  Tournament organizers must complete additional verification steps, including government ID.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Verification;
