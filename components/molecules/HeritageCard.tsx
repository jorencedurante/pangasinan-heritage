import Link from "next/link";

import Icon from "@/components/atoms/Icon";
import OptimizedImage from "@/components/atoms/OptimizedImage";
import { getCategoryLabel } from "@/data/categories";
import { Destination } from "@/types/destination";

interface HeritageCardProps {
  destination: Destination;
}

export default function HeritageCard({ destination }: HeritageCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <OptimizedImage
        src={destination.image}
        alt={destination.name}
        width={640}
        height={400}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="aspect-[16/9] w-full"
      />

      <div className="flex flex-col gap-3 p-5">
        <span className="self-start rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800">
          {getCategoryLabel(destination.category)}
        </span>

        <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>

        <p className="flex items-center gap-1.5 text-sm text-gray-500">
          <Icon name="map-pin" size={16} />
          {destination.location}, {destination.municipality}
        </p>

        <p className="text-sm leading-relaxed text-gray-600">
          {destination.shortDescription}
        </p>

        <Link
          href={`/destinations/${destination.slug}`}
          aria-label={`Learn more about ${destination.name}`}
          className="mt-auto inline-flex items-center gap-1.5 self-start rounded-md px-1 py-0.5 text-sm font-semibold text-teal-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
          Learn More
          <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </article>
  );
}
