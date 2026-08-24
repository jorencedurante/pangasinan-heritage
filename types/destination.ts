export type DestinationCategory =
  | "natural-heritage"
  | "historical-heritage"
  | "religious-heritage"
  | "cultural-heritage"
  | "beaches-islands"
  | "eco-tourism";

export interface Destination {
  id: number;
  slug: string;
  name: string;
  location: string;
  municipality: string;
  category: DestinationCategory;
  shortDescription: string;
  description: string;
  history?: string;
  whyVisit?: string;
  activities?: string[];
  visitorInfo?: string;
  accessibility?: string;
  image: string;
  gallery?: string[];
  featured?: boolean;
}
