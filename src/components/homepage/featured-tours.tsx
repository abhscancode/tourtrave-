"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Heart } from "lucide-react";

const tours = [
  {
    title: "Enchanting Paris",
    price: "$1,200",
    originalPrice: "$1,450",
    image: "/images/tourimg1.jpg",
    hint: "paris eiffel tower",
    description: "Experience the romance and charm of the City of Light.",
    duration: "7 Days",
    rating: 4.8,
    reviews: 324,
    location: "Paris, France",
    discount: "15% Off",
    features: ["Free WiFi", "Breakfast", "Guide"],
    category: "Cultural"
  },
  {
    title: "Mystical Kyoto",
    price: "$1,800",
    originalPrice: "$2,100",
    image: "/images/tourimg2.jpg",
    hint: "kyoto shrine",
    description: "Discover ancient temples and serene gardens in Japan's cultural heart.",
    duration: "10 Days",
    rating: 4.9,
    reviews: 187,
    location: "Kyoto, Japan",
    discount: "20% Off",
    features: ["Tea Ceremony", "Temple Tour", "Garden Walk"],
    category: "Cultural"
  },
  {
    title: "Santorini Sunsets",
    price: "$2,500",
    originalPrice: "$2,800",
    image: "/images/tourimg3.jpg",
    hint: "santorini greece",
    description: "Witness the world-famous sunsets over the Aegean Sea.",
    duration: "5 Days",
    rating: 4.7,
    reviews: 456,
    location: "Santorini, Greece",
    discount: "10% Off",
    features: ["Sunset View", "Wine Tasting", "Beach Access"],
    category: "Romantic"
  },
  {
    title: "Adventure in Costa Rica",
    price: "$1,500",
    originalPrice: "$1,750",
    image: "/images/tourimg4.jpg",
    hint: "costa rica jungle",
    description: "Zip-line through rainforests and relax on pristine beaches.",
    duration: "8 Days",
    rating: 4.6,
    reviews: 289,
    location: "Costa Rica",
    discount: "12% Off",
    features: ["Zip Line", "Wildlife Tour", "Beach Time"],
    category: "Adventure"
  },
];

export function FeaturedTours() {
  const [likedTours, setLikedTours] = useState<Set<string>>(new Set());

  const toggleLike = (tourTitle: string) => {
    setLikedTours(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tourTitle)) {
        newSet.delete(tourTitle);
      } else {
        newSet.add(tourTitle);
      }
      return newSet;
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Tours</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular destinations with handpicked experiences and unbeatable value
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {tours.map((tour) => (
            <Card 
              key={tour.title} 
              className="group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-0 shadow-md bg-white min-h-[520px]"
            >
              <CardHeader className="p-0 relative">
                {/* Discount Badge */}
                {tour.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                    {tour.discount}
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium z-10">
                  {tour.category}
                </div>

                {/* Like Button */}
                <button
                  onClick={() => toggleLike(tour.title)}
                  className="absolute top-14 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full transition-all duration-200 hover:bg-white z-10"
                >
                  <Heart 
                    className={`w-4 h-4 transition-colors ${
                      likedTours.has(tour.title) 
                        ? 'text-red-500 fill-red-500' 
                        : 'text-gray-600 hover:text-red-500'
                    }`} 
                  />
                </button>

                <div className="relative overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={tour.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </CardHeader>

              <CardContent className="flex-grow p-6">
                {/* Location */}
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  {tour.location}
                </div>

                {/* Title */}
                <CardTitle className="text-xl mb-3 leading-tight">{tour.title}</CardTitle>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{tour.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Duration & Rating */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">{tour.rating}</span>
                    <span className="text-gray-500">({tour.reviews})</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 mt-auto">
                {/* Price */}
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">{tour.price}</span>
                    {tour.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{tour.originalPrice}</span>
                    )}
                  </div>
                  <span className="text-sm text-gray-600">per person</span>
                </div>

                {/* CTA Button */}
                <Link href="/checkout" passHref className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 transition-colors">
                    Book Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/tours">
            <Button variant="outline" size="lg" className="px-8 py-3">
              View All Tours
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}