import { Hero } from '@/components/homepage/hero';
import { FeaturedTours } from '@/components/homepage/featured-tours';
import { Testimonials } from '@/components/homepage/testimonials';
import { CtaSection } from '@/components/homepage/cta-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedTours />
      <Testimonials />
      <CtaSection />
    </div>
  );
}
