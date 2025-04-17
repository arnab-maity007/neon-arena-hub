
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Tournament Organizer",
    avatar: "https://placehold.co/200/1a1a1a/00FFFF?text=AJ&font=montserrat",
    quote: "NeonArena has revolutionized how I run tournaments. The verification system has eliminated cheating concerns, and the automated brackets save me hours of work.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Professional Gamer",
    avatar: "https://placehold.co/200/1a1a1a/8A2BE2?text=SW&font=montserrat",
    quote: "I've played in dozens of online tournaments, and NeonArena offers the best experience by far. The prize distribution is transparent, and I always know exactly where I stand.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Esports Team Manager",
    avatar: "https://placehold.co/200/1a1a1a/39FF14?text=DC&font=montserrat", 
    quote: "Managing our team's tournament schedule used to be a nightmare. With NeonArena, we have all upcoming events in one place with clear requirements and deadlines.",
    rating: 4
  },
  {
    name: "Maya Patel",
    role: "Amateur Player",
    avatar: "https://placehold.co/200/1a1a1a/FF10F0?text=MP&font=montserrat",
    quote: "As a new player, I was worried about scams and unfair tournaments. NeonArena's verification process gives me confidence that I'm playing in legitimate events.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Community Feedback
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear what tournament organizers and players have to say about their experience with NeonArena.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="border-neon-blue/30 bg-card h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-neon-blue fill-neon-blue' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-muted-foreground flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static transform-none mr-2" />
            <CarouselNext className="static transform-none ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
