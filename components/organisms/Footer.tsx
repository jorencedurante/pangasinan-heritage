import CollapsibleFooterNav from "@/components/molecules/CollapsibleFooterNav";
import { navigationItems } from "@/data/navigation";
import { theme } from "@/data/theme";

const secondaryLinks = [
  { label: "Design System", href: "/design-system" },
];

export default function Footer() {
  const footerLinks = [...navigationItems, ...secondaryLinks];

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-bold text-teal-800">
              {theme.shortName}
            </p>
            <p className="mt-1 max-w-sm text-sm text-gray-600">
              {theme.tagline}
            </p>
            <p className="mt-3 text-sm text-gray-600">{theme.client}</p>
          </div>

          <CollapsibleFooterNav links={footerLinks} />
        </div>

        <p className="mt-8 border-t border-gray-200 pt-4 text-xs leading-relaxed text-gray-500">
          This website is an academic prototype created for educational
          purposes and is not an official Pangasinan Provincial Government
          website.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          © {new Date().getFullYear()} {theme.client}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
