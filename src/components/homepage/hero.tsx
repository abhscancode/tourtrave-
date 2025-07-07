'use client';

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Users, ArrowRight, Play } from "lucide-react";

const carouselData = [
  {
    video: "/videos/tourvid2.mp4",
    title: "Explore the Hidden Gems",
    subtitle: "Travel beyond the ordinary and uncover places you've only dreamed of.",
    location: "Bali, Indonesia",
    rating: 4.9,
    reviews: 2847,
    price: "From $899"
  },
  {
    video: "/videos/tourvid3.mp4",
    title: "Dive Into New Adventures",
    subtitle: "Snorkel, hike, and fly—every moment is a story waiting to be told.",
    location: "Maldives",
    rating: 4.8,
    reviews: 1923,
    price: "From $1,299"
  },
  {
    video: "/videos/tourvid4.mp4",
    title: "Create Unforgettable Memories",
    subtitle: "From sunsets to city lights, make each trip one to remember.",
    location: "Santorini, Greece",
    rating: 4.9,
    reviews: 3156,
    price: "From $749"
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const { video, title, subtitle, location, rating, reviews, price } = carouselData[currentIndex];

  return (
    <section className="relative h-[70vh] min-h-[600px] w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        key={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Simple Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm font-medium">
          <MapPin className="w-4 h-4" />
          {location}
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
          {subtitle}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-6 mb-8 text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span className="text-white/70">({reviews.toLocaleString()} reviews)</span>
          </div>
          <div className="text-white/70">|</div>
          <div className="font-medium">{price}</div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-base rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Explore Tours
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-black hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-lg backdrop-blur-sm"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Video
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}