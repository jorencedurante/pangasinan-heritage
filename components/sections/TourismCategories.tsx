import Link from "next/link";

import Icon from "@/components/atoms/Icon";
import { categories } from "@/data/categories";

export default function TourismCategories() {
  return (
    <section aria-labelledby="explore-categories-heading" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2
          id="explore-categories-heading"
          className="text-3xl font-bold tracking-tight text-gray-900"
        >
          Explore by Category
        </h2>
        <p className="mt-2 text-gray-600">
          Find heritage experiences that match your interest.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-teal-300 hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                <Icon name={category.icon} size={22} />
              </span>
              <span className="flex-1 font-semibold text-gray-900 group-hover:text-teal-900">
                {category.name}
              </span>
              <Icon
                name="arrow-right"
                size={16}
                className="text-gray-400 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
