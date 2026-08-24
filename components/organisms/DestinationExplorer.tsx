"use client";

import { useMemo, useState } from "react";

import HeritageGrid from "@/components/organisms/HeritageGrid";
import SearchForm from "@/components/molecules/SearchForm";
import { Destination, DestinationCategory } from "@/types/destination";

type CategoryFilter = DestinationCategory | "all";

interface DestinationExplorerProps {
  destinations: Destination[];
  initialCategory?: CategoryFilter;
}

export default function DestinationExplorer({
  destinations,
  initialCategory = "all",
}: DestinationExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>(initialCategory);

  function handleSearch(nextQuery: string, nextCategory: CategoryFilter) {
    setQuery(nextQuery);
    setCategory(nextCategory);
  }

  const filteredDestinations = useMemo(() => {
    const needle = query.toLowerCase();

    return destinations.filter((destination) => {
      const matchesQuery =
        needle === "" ||
        destination.name.toLowerCase().includes(needle) ||
        destination.municipality.toLowerCase().includes(needle) ||
        destination.location.toLowerCase().includes(needle);

      const matchesCategory =
        category === "all" || destination.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [destinations, query, category]);

  return (
    <div>
      <div id="search" className="scroll-mt-6">
        <SearchForm
          initialCategory={initialCategory}
          onSearch={handleSearch}
        />
      </div>

      <p className="mt-6 text-sm text-gray-600" aria-live="polite">
        Showing {filteredDestinations.length} of {destinations.length}{" "}
        destinations
      </p>

      <div className="mt-4">
        {filteredDestinations.length > 0 ? (
          <HeritageGrid destinations={filteredDestinations} />
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
            <p className="font-medium text-gray-900">No destinations found</p>
            <p className="mt-1 text-sm text-gray-600">
              Try a different keyword or choose another category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
