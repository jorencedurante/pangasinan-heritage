import { ElementType, ReactNode } from "react";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "small"
  | "caption";

interface TypographyProps {
  variant?: TypographyVariant;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  id?: string;
  className?: string;
  children: ReactNode;
}

const variantClasses: Record<TypographyVariant, string> = {
  display: "text-4xl font-bold tracking-tight sm:text-5xl",
  h1: "text-3xl font-bold tracking-tight sm:text-4xl",
  h2: "text-2xl font-bold tracking-tight sm:text-3xl",
  h3: "text-xl font-semibold",
  body: "text-base leading-relaxed",
  small: "text-sm leading-relaxed",
  caption: "text-xs text-gray-500",
};

const defaultTags: Record<TypographyVariant, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  small: "p",
  caption: "span",
};

export default function Typography({
  variant = "body",
  as,
  id,
  className = "",
  children,
}: TypographyProps) {
  const Tag = as ?? defaultTags[variant];

  return (
    <Tag id={id} className={`${variantClasses[variant]} ${className}`}>
      {children}
    </Tag>
  );
}
