import Icon from "@/components/atoms/Icon";
import { IconName } from "@/components/atoms/Icon";

interface WhyVisitPoint {
  icon: IconName;
  title: string;
  description: string;
}

const points: WhyVisitPoint[] = [
  {
    icon: "sun",
    title: "Stunning Natural Wonders",
    description:
      "From the islands of Alaminos to hidden caves and clean rivers, nature takes center stage.",
  },
  {
    icon: "book-open",
    title: "Deep History and Heritage",
    description:
      "Century-old churches, lighthouses, and landmarks tell stories spanning hundreds of years.",
  },
  {
    icon: "users",
    title: "Warm Pangasinan Hospitality",
    description:
      "Friendly communities, lively festivals, and honest local food welcome every visitor.",
  },
  {
    icon: "compass",
    title: "Adventures for Everyone",
    description:
      "Island hopping, ziplines, hot springs, and river cruises offer something for every traveler.",
  },
];

export default function WhyVisit() {
  return (
    <section
      aria-labelledby="why-visit-heading"
      className="border-y border-gray-200 bg-gray-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2
          id="why-visit-heading"
          className="text-3xl font-bold tracking-tight text-gray-900"
        >
          Why Visit Pangasinan
        </h2>
        <p className="mt-2 text-gray-600">
          Four reasons travelers keep coming back to the province.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                <Icon name={point.icon} size={22} />
              </span>
              <h3 className="mt-4 font-semibold text-gray-900">
                {point.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
