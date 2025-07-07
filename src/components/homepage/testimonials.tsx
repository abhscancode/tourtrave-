import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alicia Roberts",
    avatar: "AR",
    image: "https://placehold.co/100x100.png",
    hint: "woman portrait",
    title: "An unforgettable experience!",
    quote: "The trip to Paris was perfectly organized. Skyworld handled everything, letting us enjoy the magic of the city stress-free. Highly recommended!",
  },
  {
    name: "Ben Carter",
    avatar: "BC",
    image: "https://placehold.co/100x100.png",
    hint: "man smiling",
    title: "Exceeded all expectations.",
    quote: "I've traveled a lot, but the Kyoto tour was special. The guides were knowledgeable and the itinerary was a perfect mix of culture and exploration.",
  },
  {
    name: "Chloe Davis",
    avatar: "CD",
    image: "https://placehold.co/100x100.png",
    hint: "woman travel",
    title: "Customer service is top-notch.",
    quote: "The team at Skyworld was incredibly helpful in customizing our trip. Their attention to detail made our Santorini vacation a dream come true.",
  },
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Travelers Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card relative overflow-hidden pt-6">
              <Quote className="absolute -top-2 -left-2 h-16 w-16 text-primary/5" />
              <CardHeader className="relative">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                    ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
