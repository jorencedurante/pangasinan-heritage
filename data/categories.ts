import { Category } from "../types/category";
import { DestinationCategory } from "../types/destination";

export const categories: Category[] = [
  {
    slug: "natural-heritage",
    name: "Natural Heritage",
    href: "/destinations?category=natural-heritage",
    icon: "sun",
  },
  {
    slug: "historical-heritage",
    name: "Historical Heritage",
    href: "/destinations?category=historical-heritage",
    icon: "book-open",
  },
  {
    slug: "religious-heritage",
    name: "Religious Heritage",
    href: "/destinations?category=religious-heritage",
    icon: "star",
  },
  {
    slug: "cultural-heritage",
    name: "Cultural Heritage",
    href: "/destinations?category=cultural-heritage",
    icon: "users",
  },
  {
    slug: "beaches-islands",
    name: "Beaches & Islands",
    href: "/destinations?category=beaches-islands",
    icon: "map-pin",
  },
  {
    slug: "eco-tourism",
    name: "Eco-Tourism",
    href: "/destinations?category=eco-tourism",
    icon: "compass",
  },
];

export function getCategoryLabel(slug: DestinationCategory): string {
  return categories.find((category) => category.slug === slug)?.name ?? slug;
}
