import Link from "next/link";

import Icon from "@/components/atoms/Icon";

export default function AboutPangasinan() {
  return (
    <section aria-labelledby="about-pangasinan-heading">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="max-w-3xl">
          <h2
            id="about-pangasinan-heading"
            className="text-3xl font-bold tracking-tight text-gray-900"
          >
            About Pangasinan
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Pangasinan is a province rich in history, culture, and natural
            beauty. Situated on the northwestern coast of Luzon along the
            Lingayen Gulf, its very name is rooted in the word{" "}
            <em>asin</em>, or salt, honoring the salt-making tradition that
            has shaped its coastal communities for generations. From the
            hundred islands of Alaminos to the heritage churches of its old
            towns, Pangasinan offers every visitor a warm and unforgettable
            Filipino experience.
          </p>

          <Link
            href="/about"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-teal-700 px-4 py-2 text-base font-medium text-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            Learn More
            <Icon name="arrow-right" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
