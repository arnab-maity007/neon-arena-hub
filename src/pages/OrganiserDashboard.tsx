
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Sparkles, BarChart3, Trophy, Users, Clock, Calendar, Edit, Eye, Settings } from 'lucide-react';

const OrganiserDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h1 className="text-3xl font-bold mb-2">Organiser Dashboard</h1>
              <p className="text-muted-foreground">Create and manage esports tournaments with ease.</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button className="gradient-button">
                <Plus className="mr-2 h-4 w-4" />
                Create Tournament
              </Button>
            </div>
          </div>

          <Tabs defaultValue="active" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="active" className="py-6">
              <div className="grid gap-6">
                <Card className="border-neon-blue/30">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center">
                          Valorant Pro League
                          <Sparkles className="ml-2 h-4 w-4 text-neon-blue" />
                        </CardTitle>
                        <CardDescription>Registration ends in 5 days</CardDescription>
                      </div>
                      <div className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm">
                        Registration Open
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-neon-blue" />
                        <div>
                          <p className="text-sm text-muted-foreground">Prize Pool</p>
                          <p className="font-medium">$5,000</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-neon-blue" />
                        <div>
                          <p className="text-sm text-muted-foreground">Registrations</p>
                          <p className="font-medium">38/64</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-neon-blue" />
                        <div>
                          <p className="text-sm text-muted-foreground">Start Date</p>
                          <p className="font-medium">May 20, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-neon-blue" />
                        <div>
                          <p className="text-sm text-muted-foreground">Status</p>
                          <p className="font-medium">Registration Phase</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-3">
                      <Button variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button variant="outline">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-neon-blue/30">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Apex Legends Tournament</CardTitle>
                        <CardDescription>Tournament starts in 2 days</CardDescription>
                      </div>
                      <div className="bg-neon-purple/20 text-neon-purple px-3 py-1 rounded-full text-sm">
                        Ready to Start
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-neon-blue" />
                        <div>
                          <p className="text-sm text-muted-foreground">Prize Pool</p>
                          <p className="font-medium">$3,000</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-neon-blue" />
                        <div>
                          <p className="text-sm text-muted-foreground">Registrations</p>
                          <p className="font-medium">16/16 (Full)</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-neon-blue" />
                        <div>
                          <p className="text-sm text-muted-foreground">Start Date</p>
                          <p className="font-medium">April 25, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-neon-blue" />
                        <div>
                          <p className="text-sm text-muted-foreground">Status</p>
                          <p className="font-medium">Registration Closed</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-3">
                      <Button variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button variant="outline">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="past" className="py-6">
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No past tournaments yet</h3>
                <p className="text-muted-foreground mb-6">
                  Create and complete tournaments to see your history here.
                </p>
                <Button className="gradient-button">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Tournament
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="py-6">
              <div className="grid gap-6">
                <Card className="border-neon-blue/30">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5 text-neon-blue" />
                      Tournament Analytics
                    </CardTitle>
                    <CardDescription>
                      Track registration trends, participation rates, and more.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        You need to host at least one tournament to view analytics.
                      </p>
                      <Button className="gradient-button">
                        <Plus className="mr-2 h-4 w-4" />
                        Create Tournament
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrganiserDashboard;
