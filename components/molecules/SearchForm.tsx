"use client";

import { FormEvent, useState } from "react";

import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import { categories } from "@/data/categories";
import { DestinationCategory } from "@/types/destination";

type CategoryFilter = DestinationCategory | "all";

interface SearchFormProps {
  initialCategory?: CategoryFilter;
  onSearch?: (query: string, category: CategoryFilter) => void;
}

export default function SearchForm({
  initialCategory = "all",
  onSearch,
}: SearchFormProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>(initialCategory);

  const hasActiveFilters = query.trim() !== "" || category !== "all";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch?.(query.trim(), category);
  }

  function handleClear() {
    setQuery("");
    setCategory("all");
    onSearch?.("", "all");
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Search destinations"
      className="flex w-full flex-col gap-3 sm:flex-row"
    >
      <div className="flex-1">
        <label htmlFor="search-query" className="mb-1 block text-sm font-medium text-gray-700">
          Search destinations
        </label>
        <input
          id="search-query"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Name, town, or place..."
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        />
      </div>

      <div>
        <label htmlFor="search-category" className="mb-1 block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          id="search-category"
          value={category}
          onChange={(event) =>
            setCategory(event.target.value as CategoryFilter)
          }
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:w-auto"
        >
          <option value="all">All categories</option>
          {categories.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-end gap-2">
        <Button type="submit">
          <Icon name="search" size={16} />
          Search
        </Button>
        {hasActiveFilters && (
          <Button type="button" variant="ghost" onClick={handleClear}>
            Clear
          </Button>
        )}
      </div>
    </form>
  );
}
