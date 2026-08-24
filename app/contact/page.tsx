import type { Metadata } from "next";

import ContactForm from "@/components/molecules/ContactForm";
import Icon from "@/components/atoms/Icon";
import { theme } from "@/data/theme";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Pangasinan Provincial Tourism Office for inquiries and travel assistance.",
};

const contactDetails = [
  { icon: "map-pin" as const, label: "Office", value: "Provincial Capitol, Lingayen, Pangasinan" },
  { icon: "mail" as const, label: "Email", value: "tourism@pangasinan.gov.ph" },
  { icon: "globe" as const, label: "Website", value: "pangasinan.gov.ph" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Contact Us
      </h1>
      <p className="mt-2 max-w-2xl text-gray-600">
        Questions about destinations, tours, or partnerships? Reach out to the{" "}
        {theme.client}.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Office details</h2>
          <dl className="mt-4 space-y-4">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                  <Icon name={detail.icon} size={18} />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {detail.label}
                  </dt>
                  <dd className="text-sm text-gray-900">{detail.value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs leading-relaxed text-gray-500">
            Contact details are placeholders for this academic prototype.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">Send a message</h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
