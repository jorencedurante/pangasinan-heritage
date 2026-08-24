import type { Metadata } from "next";

import DestinationExplorer from "@/components/organisms/DestinationExplorer";
import { categories } from "@/data/categories";
import { destinations } from "@/data/destinations";
import { DestinationCategory } from "@/types/destination";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Browse and search heritage destinations across Pangasinan by name, town, or category.",
};

interface DestinationsPageProps {
  searchParams: { category?: string };
}

export default function DestinationsPage({ searchParams }: DestinationsPageProps) {
  const requestedCategory = searchParams.category as
    | DestinationCategory
    | undefined;
  const isValidCategory = categories.some(
    (category) => category.slug === requestedCategory
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Heritage Destinations
      </h1>
      <p className="mt-2 max-w-2xl text-gray-600">
        Discover the natural wonders, historical landmarks, and cultural
        treasures of Pangasinan.
      </p>

      <div className="mt-8">
        <DestinationExplorer
          destinations={destinations}
          initialCategory={isValidCategory ? requestedCategory : "all"}
        />
      </div>
    </div>
  );
}
