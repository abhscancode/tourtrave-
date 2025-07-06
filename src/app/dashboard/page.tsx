import { Bookings } from "@/components/dashboard/bookings";
import { TourRecommender } from "@/components/dashboard/tour-recommender";

export default function DashboardPage() {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Customer Dashboard</h1>
      <div className="grid gap-12">
        <TourRecommender />
        <Bookings />
      </div>
    </div>
  );
}
