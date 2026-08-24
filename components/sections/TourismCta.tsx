import Link from "next/link";

export default function TourismCta() {
  return (
    <section aria-labelledby="tourism-cta-heading" className="bg-teal-700">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2
            id="tourism-cta-heading"
            className="text-3xl font-bold tracking-tight text-white"
          >
            Ready to Explore Pangasinan?
          </h2>
          <p className="mt-2 max-w-xl text-teal-50">
            Start planning your trip today and discover why Pangasinan is one
            of the Philippines&apos; most remarkable provinces.
          </p>
        </div>

        <Link
          href="/destinations"
          className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 font-medium text-teal-800 transition-colors hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Explore Destinations
        </Link>
      </div>
    </section>
  );
}
