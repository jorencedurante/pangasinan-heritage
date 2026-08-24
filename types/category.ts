import type { IconName } from "@/components/atoms/Icon";
import type { DestinationCategory } from "./destination";

export interface Category {
  slug: DestinationCategory;
  name: string;
  href: string;
  icon: IconName;
}
