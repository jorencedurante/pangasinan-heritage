import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import HeritageGrid from "@/components/organisms/HeritageGrid";
import Icon from "@/components/atoms/Icon";
import OptimizedImage from "@/components/atoms/OptimizedImage";
import Typography from "@/components/atoms/Typography";
import { getCategoryLabel } from "@/data/categories";
import { destinations } from "@/data/destinations";

interface DestinationPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export function generateMetadata({
  params,
}: DestinationPageProps): Metadata {
  const destination = destinations.find(
    (item) => item.slug === params.slug
  );

  if (!destination) {
    return { title: "Destination not found" };
  }

  return {
    title: destination.name,
    description: destination.shortDescription,
    openGraph: {
      title: destination.name,
      description: destination.shortDescription,
      type: "article",
    },
  };
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = destinations.find((item) => item.slug === params.slug);

  if (!destination) {
    notFound();
  }

  const relatedDestinations = destinations
    .filter(
      (item) =>
        item.category === destination.category &&
        item.slug !== destination.slug
    )
    .slice(0, 3);

  const gallery = destination.gallery ?? [destination.image];

  return (
    <article className="mx-auto max-w-6xl px-4 py-12">
      <Link
        href="/destinations"
        className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-teal-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
      >
        <Icon name="arrow-right" size={16} className="rotate-180" />
        Back to destinations
      </Link>

      <OptimizedImage
        src={destination.image}
        alt={destination.name}
        width={1200}
        height={600}
        priority
        sizes="(max-width: 1152px) 100vw, 1152px"
        className="mt-6 w-full rounded-xl shadow-md"
      />

      <header className="mt-8">
        <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800">
          {getCategoryLabel(destination.category)}
        </span>
        <Typography variant="h1" className="mt-3">
          {destination.name}
        </Typography>
        <p className="mt-2 flex items-center gap-1.5 text-gray-600">
          <Icon name="map-pin" size={16} />
          {destination.location}, {destination.municipality}, Pangasinan
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <section aria-labelledby="about-heading">
            <Typography variant="h2" id="about-heading">
              About this destination
            </Typography>
            <p className="mt-3 leading-relaxed text-gray-700">
              {destination.description}
            </p>
          </section>

          {destination.history && (
            <section aria-labelledby="history-heading">
              <Typography variant="h2" id="history-heading">
                History and background
              </Typography>
              <p className="mt-3 leading-relaxed text-gray-700">
                {destination.history}
              </p>
            </section>
          )}

          {destination.whyVisit && (
            <section aria-labelledby="why-visit-heading">
              <Typography variant="h2" id="why-visit-heading">
                Why visit
              </Typography>
              <p className="mt-3 leading-relaxed text-gray-700">
                {destination.whyVisit}
              </p>
            </section>
          )}

          {destination.activities && (
            <section aria-labelledby="activities-heading">
              <Typography variant="h2" id="activities-heading">
                Things to do
              </Typography>
              <ul className="mt-3 space-y-2">
                {destination.activities.map((activity) => (
                  <li
                    key={activity}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <Icon
                      name="star"
                      size={16}
                      className="mt-1 shrink-0 text-teal-700"
                    />
                    {activity}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section aria-labelledby="gallery-heading">
            <Typography variant="h2" id="gallery-heading">
              Photo gallery
            </Typography>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {gallery.map((image, index) => (
                <OptimizedImage
                  key={image}
                  src={image}
                  alt={`${destination.name} photo ${index + 1}`}
                  width={400}
                  height={300}
                  sizes="(max-width: 640px) 100vw, (max-width: 1152px) 33vw, 380px"
                  className="w-full rounded-lg"
                />
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6 lg:col-span-1">
          {destination.visitorInfo && (
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h2 className="flex items-center gap-2 font-semibold text-gray-900">
                <Icon name="clock" size={18} />
                Visitor information
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {destination.visitorInfo}
              </p>
            </div>
          )}

          {destination.accessibility && (
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h2 className="flex items-center gap-2 font-semibold text-gray-900">
                <Icon name="users" size={18} />
                Accessibility
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {destination.accessibility}
              </p>
            </div>
          )}
        </aside>
      </div>

      {relatedDestinations.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-14">
          <Typography variant="h2" id="related-heading">
            Related destinations
          </Typography>
          <div className="mt-6">
            <HeritageGrid destinations={relatedDestinations} />
          </div>
        </section>
      )}
    </article>
  );
}
