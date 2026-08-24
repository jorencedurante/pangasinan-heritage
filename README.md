# Pangasinan Heritage Digital Showcase

A responsive and accessible tourism website showcasing the cultural and
natural heritage of Pangasinan, developed for the Pangasinan Provincial
Tourism Office (academic prototype).

## Technology

- Next.js 14 (App Router)
- React 18 (Server Components by default)
- TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install     # install dependencies
npm run dev     # start the development server at http://localhost:3000
npm run build   # create an optimized production build
npm start       # serve the production build
```

## Project Structure

```text
pangasinan-heritage/
├── app/                  # App Router pages and layouts
│   ├── page.tsx          # Homepage (thin composition of sections)
│   ├── destinations/     # Listing + [slug] detail pages (statically generated)
│   ├── heritage/         # Heritage overview
│   ├── about/            # About Pangasinan
│   ├── contact/          # Contact form prototype
│   └── design-system/    # Living Atomic Design documentation
├── components/
│   ├── atoms/            # Button, Typography, Icon, OptimizedImage, ColorSwatch
│   ├── molecules/        # HeritageCard, SearchForm, NavigationItem, ContactForm
│   ├── organisms/        # HeaderNavigation, Footer, HeritageGrid, DestinationExplorer
│   └── sections/         # Hero, FeaturedDestinations, TourismCategories, ...
├── data/                 # Content layer (destinations, categories, navigation, theme)
├── types/                # Shared TypeScript interfaces
└── public/images/        # Static images served from /images
```

## Atomic Design

The UI follows Brad Frost's Atomic Design methodology:

- **Atoms** are the smallest building blocks (buttons, icons, typography).
- **Molecules** combine atoms into simple units (a card, a search field).
- **Organisms** compose molecules into self-contained sections (header,
  grid).
- **Sections** arrange organisms into full homepage regions.

Pages stay thin: `app/page.tsx` only lists sections, while all markup lives
in reusable components. Visit `/design-system` to see every component with
usage context and code samples.

## Content Management

All destination content lives in `data/destinations.ts`, decoupled from UI.
Components receive typed `Destination` objects as props, so migrating to a
headless CMS later only requires replacing the data source.

## Notes

- This website is an academic prototype created for educational purposes
  and is not an official Pangasinan Provincial Government website.
- Destination photos should be placed in
  `public/images/destinations/` using the file names referenced in
  `data/destinations.ts`.
