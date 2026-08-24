import HeritageGrid from "@/components/organisms/HeritageGrid";
import { destinations } from "@/data/destinations";

export default function FeaturedDestinations() {
  const featuredDestinations = destinations.filter(
    (destination) => destination.featured
  );

  return (
    <section aria-labelledby="featured-destinations-heading">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2
          id="featured-destinations-heading"
          className="text-3xl font-bold tracking-tight text-gray-900"
        >
          Featured Destinations
        </h2>
        <p className="mt-2 text-gray-600">
          Must-visit spots handpicked by the Provincial Tourism Office.
        </p>

        <div className="mt-8">
          <HeritageGrid destinations={featuredDestinations} />
        </div>
      </div>
    </section>
  );
}
