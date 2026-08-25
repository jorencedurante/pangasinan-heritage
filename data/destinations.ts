import { Destination } from "../types/destination";

export const destinations: Destination[] = [
  {
    id: 1,
    slug: "hundred-islands-national-park",
    name: "Hundred Islands National Park",
    location: "Lingayen Gulf",
    municipality: "Alaminos City",
    category: "beaches-islands",
    shortDescription:
      "A protected marine park made up of 123 islands scattered across the Lingayen Gulf.",
    description:
      "Hundred Islands National Park is the flagship destination of Pangasinan. Visitors go island hopping across its 123 limestone islands, swim in clear waters, explore caves, and enjoy snorkeling and kayaking around the coral reefs.",
    history:
      "Protected as early as 1940, Hundred Islands is celebrated as the first national park of the Philippines and remains the most recognizable natural landmark of the province.",
    whyVisit:
      "Few places in the country pack this much island scenery into a single boat ride, making it a must-see for first-time visitors.",
    activities: [
      "Island hopping boat tours",
      "Snorkeling and kayaking",
      "Zipline ride on Governors Island",
      "Picnics on island cottages",
    ],
    visitorInfo:
      "Boat tours depart from Lucap Wharf in Alaminos City. The dry season from November to May offers the calmest seas.",
    accessibility:
      "Developed islands have cottages and trails, but some areas involve stairs and uneven ground. Assistance is available at Lucap Wharf.",
    image: "/images/destinations/hundred_island.jpg",
    gallery: [
      "/images/destinations/hundred_island.jpg",
      "/images/destinations/hundred_island-2.jpg",

    ],
    featured: true,
  },
  {
    id: 2,
    slug: "cape-bolinao-lighthouse",
    name: "Cape Bolinao Lighthouse",
    location: "Barangay Patar",
    municipality: "Bolinao",
    category: "historical-heritage",
    shortDescription:
      "A century-old lighthouse standing on a hilltop overlooking the West Philippine Sea.",
    description:
      "Perched on a hill in Barangay Patar, the Cape Bolinao Lighthouse offers sweeping views of the coastline and remains a beloved landmark that reflects the maritime heritage of Bolinao.",
    history:
      "Completed in 1905 through Filipino, American, and British engineering, it is one of the tallest and oldest lighthouses in the Philippines.",
    whyVisit:
      "The tower viewpoint delivers one of the best sunset panoramas in the province.",
    activities: [
      "Climbing the lighthouse viewpoint",
      "Sunset photography",
      "Side trip to nearby Patar White Beach",
    ],
    visitorInfo:
      "The site is open daily with a small maintenance fee. Visit late afternoon for the best light.",
    accessibility:
      "The tower staircase is steep and narrow, which may be difficult for visitors with limited mobility.",
    image: "/images/destinations/bolinao-lighthouse.jpg",
    gallery: [
      "/images/destinations/bolinao-lighthouse.jpg",
      "/images/destinations/bolinao-lighthouse-2.jpg",
    ],
    featured: false,
  },
  {
    id: 3,
    slug: "balungao-hilltop-adventure-and-hot-spring",
    name: "Balungao Hilltop Adventure and Hot Spring",
    location: "Mount Balungao",
    municipality: "Balungao",
    category: "eco-tourism",
    shortDescription:
      "An adventure park on a dormant volcano featuring a zipline, ATV trails, and hot spring pools.",
    description:
      "Balungao Hilltop Adventure sits on the slopes of the dormant Mount Balungao in eastern Pangasinan. Thrill seekers ride the zipline and all-terrain vehicles along mountain trails before unwinding in naturally heated pools.",
    history:
      "Mount Balungao is a long-dormant volcano whose geothermal warmth feeds the hot springs at the foot of the hill.",
    whyVisit:
      "It combines adrenaline and relaxation in one destination, perfect for weekend trips.",
    activities: [
      "Zipline ride over the valley",
      "ATV trail rides",
      "Soaking in natural hot spring pools",
      "Hiking the hillside trails",
    ],
    visitorInfo:
      "Bring extra clothes for the hot springs. Mornings are cooler and less crowded.",
    accessibility:
      "Trails and facilities sit on sloped terrain; visitors with mobility concerns may prefer the pool area.",
    image: "/images/destinations/balungao-hilltop.jpg",
    gallery: [
      "/images/destinations/balungao-hilltop.jpg",
      "/images/destinations/balungao-hilltop-2.jpg",
    ],
    featured: false,
  },
  {
    id: 4,
    slug: "patar-white-beach",
    name: "Patar White Beach",
    location: "Barangay Patar",
    municipality: "Bolinao",
    category: "beaches-islands",
    shortDescription:
      "A long stretch of cream-colored sand framed by rock formations on the western coast of Bolinao.",
    description:
      "Patar White Beach is one of the most beautiful beaches in Pangasinan, known for its fine sand, clear shallow waters, and dramatic rock formations at its southern end.",
    whyVisit:
      "It offers a quieter alternative to crowded beaches while staying close to the Cape Bolinao Lighthouse.",
    activities: [
      "Swimming and beach picnics",
      "Exploring the rock formations",
      "Snorkeling in the shallow reefs",
    ],
    visitorInfo:
      "Cottages and small resorts line the beach. Weekdays are noticeably quieter than weekends.",
    accessibility:
      "The shoreline is flat and walkable, though some rock areas can be slippery.",
    image: "/images/destinations/patar-white-beach.jpg",
    gallery: [
      "/images/destinations/patar-white-beach.jpg",
      "/images/destinations/patar-white-beach-2.jpg",
    ],
    featured: true,
  },
  {
    id: 5,
    slug: "manaoag-church",
    name: "Manaoag Church",
    location: "Town Proper",
    municipality: "Manaoag",
    category: "religious-heritage",
    shortDescription:
      "A revered pilgrimage church enshrining the image of Our Lady of the Rosary of Manaoag.",
    description:
      "The Minor Basilica of Our Lady of the Rosary of Manaoag draws millions of devotees each year. Its hilltop position and towering facade make it the spiritual heart of the province.",
    history:
      "The shrine dates back to the early 17th century, when devotion to the Virgin Mary took root in the town that would grow around it.",
    whyVisit:
      "It is the most important pilgrimage site in Northern Luzon and an architectural landmark.",
    activities: [
      "Attending mass and novena prayers",
      "Lighting candles at the candle gallery",
      "Visiting the museum and bell tower",
    ],
    visitorInfo:
      "The basilica is open daily; feast day celebrations every October draw large crowds.",
    accessibility:
      "The main church floor is level and accessible, with ramps near the main entrances.",
    image: "/images/destinations/manaoag-church.jpg",
    gallery: [
      "/images/destinations/manaoag-church.jpg",
      "/images/destinations/manaoag-church-2.jpg",
    ],
    featured: true,
  },
  {
    id: 6,
    slug: "enchanted-cave",
    name: "Enchanted Cave",
    location: "Barangay Germinal",
    municipality: "Bolinao",
    category: "natural-heritage",
    shortDescription:
      "A limestone cave with a natural freshwater pool hidden beneath the hills of Bolinao.",
    description:
      "Enchanted Cave invites visitors to descend into a cool cavern where crystal-clear spring water fills a natural swimming pool surrounded by ancient rock formations.",
    whyVisit:
      "Swimming inside a cave is a rare experience, and the surrounding gardens make it easy to spend half a day here.",
    activities: [
      "Swimming in the cave pool",
      "Spelunking in nearby caves",
      "Relaxing in the garden huts",
    ],
    visitorInfo:
      "Life vests are available for rent. Bring aqua shoes as rocks inside the cave are slippery.",
    accessibility:
      "Entry involves descending rock steps into the cave, which may not suit all visitors.",
    image: "/images/destinations/enchanted-cave.jpg",
    gallery: ["/images/destinations/enchanted-cave.jpg"],
    featured: false,
  },
  {
    id: 7,
    slug: "balingasay-river",
    name: "Balingasay River",
    location: "Barangay Baleyadaan",
    municipality: "Bolinao",
    category: "eco-tourism",
    shortDescription:
      "A pristine river lined with mangroves and nipa palms, best experienced by boat.",
    description:
      "The Balingasay River is celebrated as one of the cleanest rivers in the region. A slow cruise reveals mangrove forests, birdlife, and glimpses of rural life along the banks.",
    whyVisit:
      "It is the calmest way to appreciate the ecosystems that sustain coastal Pangasinan.",
    activities: [
      "Guided river cruise",
      "Bird watching",
      "Riverside photography",
    ],
    visitorInfo:
      "Boats can be chartered through local operators; early mornings offer the best wildlife sightings.",
    accessibility:
      "Boarding requires stepping into a boat from a small dock, which may challenge some visitors.",
    image: "/images/destinations/balingasay-river.jpg",
    gallery: ["/images/destinations/balingasay-river.jpg",
             "/images/destinations/balingasay-river-2.jpg",
    ],
    featured: false,
  },
  {
    id: 8,
    slug: "urduja-house",
    name: "Urduja House",
    location: "Provincial Capitol Grounds",
    municipality: "Lingayen",
    category: "cultural-heritage",
    shortDescription:
      "The provincial guest house named after the legendary warrior-princess Urduja, showcasing Pangasinan culture.",
    description:
      "Urduja House welcomes dignitaries and visitors to the provincial capital. Its halls display artworks and artifacts that tell the story of Pangasinan's identity and traditions.",
    history:
      "The house takes its name from Princess Urduja, a legendary ruler often associated with the pre-colonial history of Pangasinan.",
    whyVisit:
      "It pairs well with the Capitol complex and Lingayen beach for a heritage walk through the capital.",
    activities: [
      "Viewing cultural artifacts and artwork",
      "Heritage walk around the Capitol grounds",
      "Evening stroll along Lingayen Beach",
    ],
    visitorInfo:
      "Public access may be limited during official functions; coordinate with the Provincial Tourism Office.",
    accessibility:
      "The ground floor and grounds are generally accessible, with paved paths around the estate.",
    image: "/images/destinations/urduja-house.jpg",
    gallery: ["/images/destinations/urduja-house.jpg"],
    featured: false,
  },
];
