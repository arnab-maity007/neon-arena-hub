
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  AlertTriangle,
  CheckCircle, 
  User, 
  Calendar, 
  CreditCard,
  Trophy,
  Shield
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const faqs = [
  {
    question: "How do I create a tournament?",
    answer: "To create a tournament, you need to be registered and verified as a tournament organizer. Navigate to your Organiser Dashboard and click on 'Create Tournament'. Follow the step-by-step process to set up your tournament details, rules, prize pool, and schedule.",
    category: "organizers"
  },
  {
    question: "How do prizes get distributed?",
    answer: "Prize distribution is handled through our secure escrow system. Tournament organizers deposit the prize pool before the tournament begins. After the tournament concludes and results are verified, prizes are automatically distributed to winners' accounts according to the pre-set distribution structure.",
    category: "organizers"
  },
  {
    question: "What verification is required for organizers?",
    answer: "Tournament organizers must complete identity verification, which includes providing government ID and proof of connection to their stated organization. This helps ensure legitimacy and accountability for all tournaments hosted on our platform.",
    category: "organizers"
  },
  {
    question: "How do I register for a tournament?",
    answer: "To register for a tournament, browse the Tournaments page and select one that interests you. Click on 'Register Now' and follow the instructions. You may need to verify your gaming accounts and complete any tournament-specific requirements before your registration is confirmed.",
    category: "players"
  },
  {
    question: "How do I verify my gaming accounts?",
    answer: "Navigate to your Player Dashboard and select the 'Verification' tab. From there, you can link your gaming accounts (Steam, Riot, Epic, etc.) by following the authentication process for each platform. This verification helps prevent smurfing and ensures fair competition.",
    category: "players"
  },
  {
    question: "How do I report a player for cheating?",
    answer: "If you suspect a player of cheating during a tournament, you can report them through the tournament page. Click on the match details, then select 'Report Player'. Provide evidence such as screenshots or replay files. Our moderation team will review the report promptly.",
    category: "players"
  },
  {
    question: "What is your refund policy?",
    answer: "For tournament entry fees, refunds are available if requested at least 48 hours before the tournament starts. Platform fees are non-refundable. If a tournament is canceled by the organizer, all entry fees are automatically refunded to participants.",
    category: "payments"
  },
  {
    question: "How do I withdraw prize money?",
    answer: "Prize money won in tournaments is added to your NeonArena wallet. To withdraw funds, go to your Wallet section in your dashboard and select 'Withdraw'. You can transfer to your connected bank account or PayPal. Withdrawals are typically processed within 1-3 business days.",
    category: "payments"
  }
];

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Support Center
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Get help with tournament issues, account management, payments, or report suspicious activities.
              Our team is dedicated to providing a fair and secure environment for all users.
            </p>
          </div>

          <Tabs defaultValue="faq" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="faq">
                <HelpCircle className="mr-2 h-4 w-4" />
                FAQ
              </TabsTrigger>
              <TabsTrigger value="contact">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Us
              </TabsTrigger>
              <TabsTrigger value="report">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Report Issue
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="faq" className="py-6">
              <div className="mb-8">
                <Tabs defaultValue="all">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="players">
                      <User className="mr-2 h-4 w-4" />
                      For Players
                    </TabsTrigger>
                    <TabsTrigger value="organizers">
                      <Trophy className="mr-2 h-4 w-4" />
                      For Organizers
                    </TabsTrigger>
                    <TabsTrigger value="payments">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Payments
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="py-6">
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <Card key={index} className="border-neon-blue/20">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-start">
                              <HelpCircle className="h-5 w-5 mr-2 text-neon-blue flex-shrink-0 mt-0.5" />
                              <span>{faq.question}</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="players" className="py-6">
                    <div className="space-y-4">
                      {faqs.filter(faq => faq.category === "players").map((faq, index) => (
                        <Card key={index} className="border-neon-blue/20">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-start">
                              <HelpCircle className="h-5 w-5 mr-2 text-neon-blue flex-shrink-0 mt-0.5" />
                              <span>{faq.question}</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="organizers" className="py-6">
                    <div className="space-y-4">
                      {faqs.filter(faq => faq.category === "organizers").map((faq, index) => (
                        <Card key={index} className="border-neon-blue/20">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-start">
                              <HelpCircle className="h-5 w-5 mr-2 text-neon-blue flex-shrink-0 mt-0.5" />
                              <span>{faq.question}</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="payments" className="py-6">
                    <div className="space-y-4">
                      {faqs.filter(faq => faq.category === "payments").map((faq, index) => (
                        <Card key={index} className="border-neon-blue/20">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-start">
                              <HelpCircle className="h-5 w-5 mr-2 text-neon-blue flex-shrink-0 mt-0.5" />
                              <span>{faq.question}</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Can't find the answer you're looking for?
                </p>
                <Button className="gradient-button">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="contact" className="py-6">
              <Card className="border-neon-blue/30">
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>
                    Our support team is available 24/7 to assist with any issues or questions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-blue/20 text-neon-blue">
                            <Mail className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Email Support</h3>
                            <p className="text-muted-foreground">support@neonarena.com</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-blue/20 text-neon-blue">
                            <Phone className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Phone Support</h3>
                            <p className="text-muted-foreground">+1 (800) 123-4567</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-blue/20 text-neon-blue">
                            <MessageSquare className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Live Chat</h3>
                            <p className="text-muted-foreground">Available 24/7 in your dashboard</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-muted/30 rounded-lg border border-neon-blue/30">
                        <h3 className="font-semibold flex items-center mb-2">
                          <CheckCircle className="h-4 w-4 mr-2 text-neon-green" />
                          Typical Response Times
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex justify-between">
                            <span>Email Support:</span>
                            <span>Within 24 hours</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Phone Support:</span>
                            <span>No wait time during business hours</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Live Chat:</span>
                            <span>Typically under 5 minutes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                          <Input id="name" placeholder="Your full name" className="border-neon-blue/30" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                          <Input id="email" type="email" placeholder="Your email address" className="border-neon-blue/30" />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                          <Input id="subject" placeholder="What is your inquiry about?" className="border-neon-blue/30" />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                          <Textarea 
                            id="message" 
                            placeholder="Please describe your issue in detail" 
                            className="border-neon-blue/30 min-h-[150px]" 
                          />
                        </div>
                      </div>
                      <Button className="w-full gradient-button">
                        Send Message
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="report" className="py-6">
              <Card className="border-neon-blue/30">
                <CardHeader>
                  <CardTitle>Report an Issue</CardTitle>
                  <CardDescription>
                    Report suspicious tournaments, cheating, or other issues to help keep our platform safe and fair.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="reportType" className="block text-sm font-medium mb-1">Issue Type</label>
                        <select id="reportType" className="w-full rounded-md border border-neon-blue/30 bg-background p-2">
                          <option value="">Select an issue type</option>
                          <option value="cheating">Player Cheating</option>
                          <option value="scam">Suspicious Tournament/Scam</option>
                          <option value="behavior">Inappropriate Behavior</option>
                          <option value="technical">Technical Issue</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="reportUser" className="block text-sm font-medium mb-1">Username/Tournament</label>
                        <Input id="reportUser" placeholder="Enter username or tournament name" className="border-neon-blue/30" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="reportDetails" className="block text-sm font-medium mb-1">Details</label>
                      <Textarea 
                        id="reportDetails" 
                        placeholder="Please provide as much detail as possible about the issue" 
                        className="border-neon-blue/30 min-h-[150px]" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="reportEvidence" className="block text-sm font-medium mb-1">Evidence (Optional)</label>
                      <Input id="reportEvidence" type="file" className="border-neon-blue/30" />
                      <p className="text-xs text-muted-foreground mt-1">
                        Upload screenshots, videos, or other evidence (max 10MB).
                      </p>
                    </div>
                    
                    <div className="p-4 bg-muted/30 rounded-lg border border-neon-blue/30 flex items-start">
                      <Shield className="h-5 w-5 text-neon-blue mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">Our Commitment</h3>
                        <p className="text-sm text-muted-foreground">
                          All reports are taken seriously and investigated by our moderation team. We'll keep your report confidential
                          and take appropriate action when necessary. You may be contacted for additional information.
                        </p>
                      </div>
                    </div>
                    
                    <Button className="gradient-button">
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Submit Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
