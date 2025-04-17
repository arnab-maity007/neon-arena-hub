
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Calendar, Clock, UserCheck, Shield, AlertCircle } from 'lucide-react';

const PlayerDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h1 className="text-3xl font-bold mb-2">Player Dashboard</h1>
              <p className="text-muted-foreground">Manage your tournaments, track your performance, and view your stats.</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="outline" className="border-neon-blue text-neon-blue">
                <UserCheck className="mr-2 h-4 w-4" />
                Verification Status
              </Button>
              <Button className="gradient-button">
                Find Tournaments
              </Button>
            </div>
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="registered">Registered</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="py-6">
              <div className="grid gap-6">
                <Card className="border-neon-blue/30">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Valorant Champions Cup</CardTitle>
                        <CardDescription>Registration ends in 3 days</CardDescription>
                      </div>
                      <div className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-sm">
                        Upcoming
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-neon-blue" />
                        <div>
                          <p className="text-sm text-muted-foreground">Prize Pool</p>
                          <p className="font-medium">$10,000</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-neon-blue" />
                        <div>
                          <p className="text-sm text-muted-foreground">Date</p>
                          <p className="font-medium">May 15, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-neon-blue" />
                        <div>
                          <p className="text-sm text-muted-foreground">Time</p>
                          <p className="font-medium">2:00 PM UTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button className="gradient-button">Register Now</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-neon-blue/30">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Fortnite Championship</CardTitle>
                        <CardDescription>Registration ends in 5 days</CardDescription>
                      </div>
                      <div className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-sm">
                        Upcoming
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-neon-blue" />
                        <div>
                          <p className="text-sm text-muted-foreground">Prize Pool</p>
                          <p className="font-medium">$50,000</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-neon-blue" />
                        <div>
                          <p className="text-sm text-muted-foreground">Date</p>
                          <p className="font-medium">May 25, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-neon-blue" />
                        <div>
                          <p className="text-sm text-muted-foreground">Time</p>
                          <p className="font-medium">6:00 PM UTC</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button className="gradient-button">Register Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="registered" className="py-6">
              <div className="grid gap-6">
                <Card className="border-neon-purple/30">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>League of Legends Battle</CardTitle>
                        <CardDescription>Tournament starts in 12 days</CardDescription>
                      </div>
                      <div className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm">
                        Registered
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-neon-purple" />
                        <div>
                          <p className="text-sm text-muted-foreground">Prize Pool</p>
                          <p className="font-medium">$25,000</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-neon-purple" />
                        <div>
                          <p className="text-sm text-muted-foreground">Date</p>
                          <p className="font-medium">June 5, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-neon-purple" />
                        <div>
                          <p className="text-sm text-muted-foreground">Team</p>
                          <p className="font-medium">Team Neon (Captain)</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-3">
                      <Button variant="outline">View Details</Button>
                      <Button variant="destructive" className="bg-red-500/20 text-red-500 hover:bg-red-500/30">
                        <AlertCircle className="mr-2 h-4 w-4" />
                        Withdraw
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="completed" className="py-6">
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No completed tournaments yet</h3>
                <p className="text-muted-foreground mb-6">
                  Register and participate in tournaments to see your history here.
                </p>
                <Button className="gradient-button">Find Tournaments</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="achievements" className="py-6">
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No achievements yet</h3>
                <p className="text-muted-foreground mb-6">
                  Participate in tournaments to earn achievements and rewards.
                </p>
                <Button className="gradient-button">Find Tournaments</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlayerDashboard;
