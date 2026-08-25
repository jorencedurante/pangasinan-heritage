"use client";

import Link from "next/link";
import { useId, useState } from "react";

import Icon from "@/components/atoms/Icon";
import { NavLink } from "@/types/navigation";

interface CollapsibleFooterNavProps {
  links: NavLink[];
}

export default function CollapsibleFooterNav({
  links,
}: CollapsibleFooterNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-gray-700 hover:text-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
      >
        Quick Links
        <span
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <Icon name="arrow-right" size={16} className="rotate-90" />
        </span>
      </button>

      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav
          aria-label="Footer navigation"
          className="flex flex-col gap-2 overflow-hidden pt-4"
        >
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={isOpen ? 0 : -1}
              className="rounded-md text-sm font-medium text-gray-700 hover:text-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
