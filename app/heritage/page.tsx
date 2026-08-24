import type { Metadata } from "next";
import Link from "next/link";

import Icon from "@/components/atoms/Icon";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Heritage",
  description:
    "Explore the natural, historical, religious, and cultural heritage of Pangasinan.",
};

const heritageThemes = [
  {
    title: "Natural heritage",
    text: "Islands, caves, rivers, and springs shaped by thousands of years of geology and cared for by coastal communities.",
  },
  {
    title: "Historical heritage",
    text: "Spanish-era churches, a 1905 lighthouse, and World War II landmarks preserve the memory of pivotal chapters.",
  },
  {
    title: "Religious heritage",
    text: "Shrines like Manaoag draw millions of devotees and stand at the center of the province's spiritual life.",
  },
  {
    title: "Living culture",
    text: "Salt making, festivals, cuisine, and the Pangasinan language keep local identity alive every day.",
  },
];

export default function HeritagePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        The Heritage of Pangasinan
      </h1>
      <p className="mt-2 max-w-2xl text-gray-600">
        Heritage in Pangasinan is not confined to museums. It lives in
        coastlines and churches, in kitchens and festivals, and in the
        stories passed between generations.
      </p>

      <section aria-labelledby="themes-heading" className="mt-10">
        <h2 id="themes-heading" className="text-2xl font-bold text-gray-900">
          Four themes to explore
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {heritageThemes.map((theme) => (
            <div
              key={theme.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-gray-900">{theme.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                {theme.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="browse-heading" className="mt-12">
        <h2 id="browse-heading" className="text-2xl font-bold text-gray-900">
          Browse by category
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={category.href}
              className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-teal-300 hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                <Icon name={category.icon} size={22} />
              </span>
              <span className="flex-1 font-semibold text-gray-900 group-hover:text-teal-900">
                {category.name}
              </span>
              <Icon name="arrow-right" size={16} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
