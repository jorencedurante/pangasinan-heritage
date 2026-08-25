import type { Metadata } from "next";
import { ReactNode } from "react";

import Button from "@/components/atoms/Button";
import ColorSwatch from "@/components/atoms/ColorSwatch";
import Icon, { IconName } from "@/components/atoms/Icon";
import OptimizedImage from "@/components/atoms/OptimizedImage";
import Typography, { TypographyVariant } from "@/components/atoms/Typography";
import HeritageCard from "@/components/molecules/HeritageCard";
import NavigationItem from "@/components/molecules/NavigationItem";
import SearchForm from "@/components/molecules/SearchForm";
import HeaderNavigation from "@/components/organisms/HeaderNavigation";
import HeritageGrid from "@/components/organisms/HeritageGrid";
import { destinations } from "@/data/destinations";
import { theme } from "@/data/theme";

export const metadata: Metadata = {
  title: "Design System",
  description:
    "Atomic Design system documentation for the Pangasinan Heritage Digital Showcase.",
};

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="mt-3 overflow-x-auto rounded-lg bg-gray-900 p-4 text-xs leading-relaxed text-gray-100">
      <code>{children}</code>
    </pre>
  );
}

function DocSection({
  level,
  title,
  usage,
  responsive,
  code,
  children,
}: {
  level: string;
  title: string;
  usage: string;
  responsive: ReactNode;
  code: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={`${title.replace(/\s+/g, "-").toLowerCase()}-heading`} className="border-t border-gray-200 pt-10">
      <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
        {level}
      </p>
      <Typography variant="h2" id={`${title.replace(/\s+/g, "-").toLowerCase()}-heading`} className="mt-1">
        {title}
      </Typography>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        {children}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Usage context
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{usage}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Responsive logic
          </h3>
          <div className="mt-2 space-y-1 text-sm leading-relaxed text-gray-600">
            {responsive}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Code reference
          </h3>
          <CodeBlock>{code}</CodeBlock>
        </div>
      </div>
    </section>
  );
}

const iconNames: IconName[] = [
  "map-pin", "calendar", "camera", "sun", "clock", "mail",
  "globe", "star", "users", "compass", "book-open", "arrow-right",
  "search", "menu", "x",
];

const typographySamples: { variant: TypographyVariant; label: string; text: string }[] = [
  { variant: "display", label: "Display heading", text: "Discover Pangasinan" },
  { variant: "h1", label: "H1", text: "Heritage Destinations" },
  { variant: "h2", label: "H2", text: "Featured Destinations" },
  { variant: "h3", label: "H3", text: "Hundred Islands National Park" },
  { variant: "body", label: "Body", text: "Body text is set at a readable size with generous line height." },
  { variant: "small", label: "Small text", text: "Small text supports secondary details." },
  { variant: "caption", label: "Caption", text: "Caption text labels and metadata" },
];

export default function DesignSystemPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Atomic Design System
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Living documentation of the components used across the Pangasinan
          Heritage Digital Showcase, organized by Brad Frost&apos;s Atomic
          Design methodology: atoms combine into molecules, molecules into
          organisms, and organisms into page sections.
        </p>
      </header>

      <div className="space-y-12">
        {/* ATOMS */}
        <DocSection
          level="Atom"
          title="Button"
          usage="Primary actions such as submitting forms. For navigation, use styled links instead so semantics stay correct."
          responsive={
            <>
              <p><strong>Mobile:</strong> full-width friendly inside stacked layouts.</p>
              <p><strong>Tablet / Desktop:</strong> inline width within horizontal flows.</p>
              <p>Touch target stays comfortable at every size.</p>
            </>
          }
          code={'<Button variant="primary">Explore Destinations</Button>'}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" size="small">Small</Button>
            <Button variant="primary" size="large">Large</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </DocSection>

        <DocSection
          level="Atom"
          title="Typography"
          usage="Consistent type scale for headings and body copy while keeping semantic HTML tags in control of the caller."
          responsive={
            <>
              <p><strong>Mobile:</strong> smaller sizes from the base scale.</p>
              <p><strong>Desktop:</strong> larger steps at sm: breakpoints.</p>
              <p>Line heights keep long paragraphs readable.</p>
            </>
          }
          code={'<Typography variant="h2">Featured Destinations</Typography>'}
        >
          <dl className="space-y-4">
            {typographySamples.map((sample) => (
              <div key={sample.variant} className="border-b border-gray-100 pb-4 last:border-none last:pb-0">
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {sample.label} ({sample.variant})
                </dt>
                <dd className="mt-1">
                  <Typography variant={sample.variant}>{sample.text}</Typography>
                </dd>
              </div>
            ))}
          </dl>
        </DocSection>

        <DocSection
          level="Atom"
          title="Color Tokens"
          usage="The brand palette is defined once in data/theme.ts and documented here. Values match Tailwind equivalents so utility classes and tokens stay in sync."
          responsive={
            <>
              <p><strong>Mobile:</strong> swatches stack in one column.</p>
              <p><strong>Desktop:</strong> seven tokens fit in a single row.</p>
              <p>All text/background pairings meet WCAG AA contrast.</p>
            </>
          }
          code={"theme.colors.primary // #0f766e"}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            <ColorSwatch name="primary" hex={theme.colors.primary} />
            <ColorSwatch name="secondary" hex={theme.colors.secondary} />
            <ColorSwatch name="accent" hex={theme.colors.accent} />
            <ColorSwatch name="background" hex={theme.colors.background} />
            <ColorSwatch name="surface" hex={theme.colors.surface} />
            <ColorSwatch name="text" hex={theme.colors.text} />
            <ColorSwatch name="mutedText" hex={theme.colors.mutedText} />
          </div>
        </DocSection>

        <DocSection
          level="Atom"
          title="Icon"
          usage="Decorative inline SVG icons. They are hidden from screen readers because adjacent text carries the meaning."
          responsive={
            <>
              <p><strong>Mobile:</strong> sizes adapt via the size prop.</p>
              <p><strong>Desktop:</strong> identical rendering.</p>
              <p>Stroke uses currentColor so text color classes tint them.</p>
            </>
          }
          code={'<Icon name="map-pin" className="text-teal-700" />'}
        >
          <ul className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-8">
            {iconNames.map((name) => (
              <li key={name} className="flex flex-col items-center gap-2 rounded-lg border border-gray-100 p-3">
                <Icon name={name} className="text-gray-800" />
                <span className="text-center text-xs text-gray-500">{name}</span>
              </li>
            ))}
          </ul>
        </DocSection>

        <DocSection
          level="Atom"
          title="Image (OptimizedImage)"
          usage="Wraps next/image with lazy loading by default, explicit dimensions against layout shift, optional priority for above-the-fold heroes, and responsive sizes."
          responsive={
            <>
              <p><strong>Mobile:</strong> serves smaller candidates via sizes.</p>
              <p><strong>Desktop:</strong> larger candidates on wide viewports.</p>
              <p>object-cover crops without distortion.</p>
            </>
          }
          code={'<OptimizedImage src="/images/x.jpg" alt="Descriptive alt" width={640} height={400} priority />'}
        >
          <OptimizedImage
            src="/images/destinations/hundred_island.jpg"
            alt="Islands scattered across the Lingayen Gulf"
            width={480}
            height={280}
            sizes="(max-width: 1152px) 100vw, 1100px"
            priority
            className="w-full rounded-lg"
          />
        </DocSection>

        {/* MOLECULES */}
        <DocSection
          level="Molecule"
          title="HeritageCard"
          usage="Destination previews in heritage grids, featured sections, and related destination lists. Receives a full Destination object; no content is hardcoded."
          responsive={
            <>
              <p><strong>Mobile:</strong> image above content, full column width, vertical card.</p>
              <p><strong>Tablet:</strong> two columns in the parent grid.</p>
              <p><strong>Desktop:</strong> three columns; h-full keeps cards equal height.</p>
            </>
          }
          code={'<HeritageCard key={destination.id} destination={destination} />'}
        >
          <div className="max-w-sm">
            <HeritageCard destination={destinations[0]} />
          </div>
        </DocSection>

        <DocSection
          level="Molecule"
          title="SearchForm"
          usage="Accessible search and category filtering for the destinations listing. Visible labels, keyboard operable, with clear functionality."
          responsive={
            <>
              <p><strong>Mobile:</strong> fields stack vertically for easy touch input.</p>
              <p><strong>sm and up:</strong> input, select, and buttons share one row.</p>
              <p>The Clear button appears only when filters are active.</p>
            </>
          }
          code={'<SearchForm initialCategory="all" onSearch={handleSearch} />'}
        >
          <SearchForm />
        </DocSection>

        <DocSection
          level="Molecule"
          title="NavigationItem"
          usage="One navigation link that highlights itself using the current route. Used by both desktop and mobile navigation."
          responsive={
            <>
              <p><strong>Mobile:</strong> stacked vertically inside the collapsible menu.</p>
              <p><strong>Desktop:</strong> laid out horizontally in the header.</p>
              <p>aria-current=page announces the active page to screen readers.</p>
            </>
          }
          code={'<NavigationItem label="Destinations" href="/destinations" />'}
        >
          <nav aria-label="Navigation item preview" className="flex flex-wrap gap-2">
            <NavigationItem label="Home" href="/" />
            <NavigationItem label="Destinations" href="/destinations" />
            <NavigationItem label="Contact" href="/contact" />
          </nav>
        </DocSection>

        {/* ORGANISMS */}
        <DocSection
          level="Organism"
          title="HeritageGrid"
          usage="Responsive CSS Grid that lays out any array of destinations through HeritageCard. Powers the homepage, listing page, and related destinations."
          responsive={
            <>
              <p><strong>Mobile:</strong> 1 column.</p>
              <p><strong>Tablet (sm):</strong> 2 columns.</p>
              <p><strong>Desktop (lg):</strong> 3 columns with consistent gap-6 spacing.</p>
            </>
          }
          code={'<HeritageGrid destinations={destinations} />'}
        >
          <HeritageGrid destinations={destinations.slice(0, 3)} />
        </DocSection>

        <DocSection
          level="Organism"
          title="HeaderNavigation"
          usage="Global header with brand link, desktop menu, search shortcut, and an accessible hamburger menu for mobile. The only client-side island in the header."
          responsive={
            <>
              <p><strong>Mobile:</strong> logo plus hamburger; menu expands below with aria-expanded state.</p>
              <p><strong>Desktop (md):</strong> horizontal navigation replaces the hamburger.</p>
              <p>The menu closes automatically after navigating.</p>
            </>
          }
          code="<HeaderNavigation />"
        >
          <HeaderNavigation />
        </DocSection>
      </div>
    </div>
  );
}
