import HeritageCard from "@/components/molecules/HeritageCard";
import { Destination } from "@/types/destination";

interface HeritageGridProps {
  destinations: Destination[];
}

export default function HeritageGrid({ destinations }: HeritageGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination) => (
        <HeritageCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
}
