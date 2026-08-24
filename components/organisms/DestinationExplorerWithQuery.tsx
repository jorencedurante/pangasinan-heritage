"use client";

import { useSearchParams } from "next/navigation";

import DestinationExplorer from "@/components/organisms/DestinationExplorer";
import { categories } from "@/data/categories";
import { destinations } from "@/data/destinations";
import { DestinationCategory } from "@/types/destination";

export default function DestinationExplorerWithQuery() {
  const searchParams = useSearchParams();
  const requestedCategory = searchParams.get("category") as
    | DestinationCategory
    | undefined;
  const isValidCategory = categories.some(
    (category) => category.slug === requestedCategory
  );
  const initialCategory =
    isValidCategory && requestedCategory ? requestedCategory : "all";

  return (
    <DestinationExplorer
      destinations={destinations}
      initialCategory={initialCategory}
    />
  );
}
