import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Find Your Next Destination?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Join Skyworld today to get personalized recommendations and manage your bookings all in one place. Your next great story is just a click away.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/dashboard" passHref>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          </Link>
          <Link href="#" passHref>
            <Button size="lg" variant="outline">Learn More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
