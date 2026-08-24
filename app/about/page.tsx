import type { Metadata } from "next";
import Link from "next/link";

import Icon from "@/components/atoms/Icon";

export const metadata: Metadata = {
  title: "About Pangasinan",
  description:
    "Learn about the province of Pangasinan: its history, culture, natural attractions, and local traditions.",
};

const facts = [
  { label: "Region", value: "Ilocos Region (Region I), Luzon" },
  { label: "Capital", value: "Lingayen" },
  { label: "Coastline", value: "Lingayen Gulf and the West Philippine Sea" },
  { label: "Known for", value: "Salt making, islands, heritage churches" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        About Pangasinan
      </h1>

      <section aria-labelledby="overview-heading" className="mt-8">
        <h2 id="overview-heading" className="text-2xl font-bold text-gray-900">
          Province overview
        </h2>
        <p className="mt-3 leading-relaxed text-gray-700">
          Pangasinan is a coastal province on the northwestern side of Luzon.
          Its name is rooted in the word <em>asin</em>, or salt, honoring the
          salt-making tradition that has shaped its coastal communities for
          generations. From the white beaches of Bolinao to the farmlands of
          the interior, the province blends sea, plains, and hills.
        </p>
      </section>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {fact.label}
            </dt>
            <dd className="mt-1 text-sm text-gray-900">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <section aria-labelledby="culture-heading" className="mt-10">
        <h2 id="culture-heading" className="text-2xl font-bold text-gray-900">
          Culture and traditions
        </h2>
        <p className="mt-3 leading-relaxed text-gray-700">
          The Pangasinan language thrives alongside Ilocano and Filipino,
          carried through songs, poetry, and everyday conversation. Town
          fiestas celebrate everything from bangus to bagoong, while
          craftsmanship, cuisine, and devotion remain central to community
          life across the province&apos; towns and cities.
        </p>
      </section>

      <section aria-labelledby="nature-heading" className="mt-10">
        <h2 id="nature-heading" className="text-2xl font-bold text-gray-900">
          Natural attractions
        </h2>
        <p className="mt-3 leading-relaxed text-gray-700">
          The Lingayen Gulf shelters the famous Hundred Islands, while the
          western coast hides caves, white beaches, and clean rivers. Inland,
          dormant Mount Balungao feeds natural hot springs that draw visitors
          seeking both adventure and rest.
        </p>
      </section>

      <section aria-labelledby="history-heading" className="mt-10">
        <h2 id="history-heading" className="text-2xl font-bold text-gray-900">
          Historical significance
        </h2>
        <p className="mt-3 leading-relaxed text-gray-700">
          Pangasinan&apos;s shoreline has long been a crossroads of trade and
          history. Spanish-era churches still stand in many towns, and the
          shores of Lingayen Gulf played a pivotal role during World War II,
          remembered today through markers along the capital beachfront.
        </p>
      </section>

      <Link
        href="/destinations"
        className="mt-10 inline-flex items-center justify-center gap-2 rounded-md bg-teal-700 px-4 py-2 text-base font-medium text-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
      >
        Explore Destinations
        <Icon name="arrow-right" size={18} />
      </Link>
    </div>
  );
}
