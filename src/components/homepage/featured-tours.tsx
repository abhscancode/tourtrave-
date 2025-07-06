import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tours = [
  {
    title: "Enchanting Paris",
    price: "$1,200",
    image: "https://placehold.co/600x400.png",
    hint: "paris eiffel tower",
    description: "Experience the romance and charm of the City of Light."
  },
  {
    title: "Mystical Kyoto",
    price: "$1,800",
    image: "https://placehold.co/600x400.png",
    hint: "kyoto shrine",
    description: "Discover ancient temples and serene gardens in Japan's cultural heart."
  },
  {
    title: "Santorini Sunsets",
    price: "$2,500",
    image: "https://placehold.co/600x400.png",
    hint: "santorini greece",
    description: "Witness the world-famous sunsets over the Aegean Sea."
  },
   {
    title: "Adventure in Costa Rica",
    price: "$1,500",
    image: "https://placehold.co/600x400.png",
    hint: "costa rica jungle",
    description: "Zip-line through rainforests and relax on pristine beaches."
  },
];

export function FeaturedTours() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Tours</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <Card key={tour.title} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                 <Image
                  src={tour.image}
                  alt={tour.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={tour.hint}
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-xl mb-2">{tour.title}</CardTitle>
                <p className="text-muted-foreground">{tour.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6 pt-0">
                <p className="text-lg font-bold text-primary">{tour.price}</p>
                <Link href="/checkout" passHref>
                    <Button>Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
