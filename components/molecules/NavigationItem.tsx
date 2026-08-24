"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItemProps {
  label: string;
  href: string;
}

export default function NavigationItem({ label, href }: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
        isActive
          ? "bg-teal-100 text-teal-900"
          : "text-gray-700 hover:bg-teal-50 hover:text-teal-800"
      }`}
    >
      {label}
    </Link>
  );
}
