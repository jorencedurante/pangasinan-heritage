import type { Metadata } from "next";
import { Suspense } from "react";

import DestinationExplorerWithQuery from "@/components/organisms/DestinationExplorerWithQuery";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Browse and search heritage destinations across Pangasinan by name, town, or category.",
};

export default function DestinationsPage() {
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
        <Suspense fallback={null}>
          <DestinationExplorerWithQuery />
        </Suspense>
      </div>
    </div>
  );
}
