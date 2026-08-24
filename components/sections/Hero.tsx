import Link from "next/link";

import Icon from "@/components/atoms/Icon";
import OptimizedImage from "@/components/atoms/OptimizedImage";

const primaryCtaClasses =
  "inline-flex items-center justify-center gap-2 rounded-md bg-teal-700 px-4 py-2 text-base font-medium text-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700";

const secondaryCtaClasses =
  "inline-flex items-center justify-center gap-2 rounded-md border border-teal-700 bg-transparent px-4 py-2 text-base font-medium text-teal-800 transition-colors hover:bg-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700";

export default function Hero() {
  return (
    <section className="bg-teal-50" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Discover the Heritage of Pangasinan
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">
            Explore the natural wonders, cultural landmarks, traditions, and
            unforgettable destinations that make Pangasinan one of the
            Philippines&apos; most remarkable provinces.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/destinations" className={primaryCtaClasses}>
              Explore Destinations
              <Icon name="arrow-right" size={18} />
            </Link>
            <Link href="/about" className={secondaryCtaClasses}>
              Learn About Pangasinan
            </Link>
          </div>
        </div>

        <OptimizedImage
          src="/images/destinations/hundred-islands.jpg"
          alt="Islands scattered across the Lingayen Gulf at Hundred Islands National Park"
          width={1024}
          height={768}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          className="w-full rounded-xl shadow-md"
        />
      </div>
    </section>
  );
}
