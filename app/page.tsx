import AboutPangasinan from "@/components/sections/AboutPangasinan";
import FeaturedDestinations from "@/components/sections/FeaturedDestinations";
import Hero from "@/components/sections/Hero";
import TourismCategories from "@/components/sections/TourismCategories";
import TourismCta from "@/components/sections/TourismCta";
import WhyVisit from "@/components/sections/WhyVisit";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <TourismCategories />
      <AboutPangasinan />
      <WhyVisit />
      <TourismCta />
    </>
  );
}
