import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Exotic travel destination"
        fill
        className="absolute inset-0 object-cover"
        data-ai-hint="exotic landscape"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="relative z-10 p-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
          Discover Your Next Adventure
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Explore breathtaking destinations and create unforgettable memories with our curated travel packages. Your journey starts here.
        </p>
        <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
          Explore Tours
        </Button>
      </div>
    </section>
  )
}
