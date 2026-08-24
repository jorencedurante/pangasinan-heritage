"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Icon from "@/components/atoms/Icon";
import NavigationItem from "@/components/molecules/NavigationItem";
import { navigationItems } from "@/data/navigation";
import { theme } from "@/data/theme";

export default function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="rounded-md text-xl font-bold text-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
          {theme.shortName}
        </Link>

        <div className="flex items-center gap-1">
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navigationItems.map((item) => (
              <NavigationItem
                key={item.href}
                label={item.label}
                href={item.href}
              />
            ))}
          </nav>

          <Link
            href="/destinations#search"
            aria-label="Search destinations"
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            <Icon name="search" />
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 md:hidden"
          >
            <Icon name={isMenuOpen ? "x" : "menu"} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="flex flex-col gap-1 border-t border-gray-200 px-4 pb-4 pt-2 md:hidden"
        >
          {navigationItems.map((item) => (
            <NavigationItem
              key={item.href}
              label={item.label}
              href={item.href}
            />
          ))}
        </nav>
      )}
    </header>
  );
}
