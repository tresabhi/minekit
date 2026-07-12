import type { ComponentName } from "../types/components";

interface ItemSection {
  include_on_component: ComponentName;
}

type ItemSections = Record<string, ItemSection>;

export const itemSections = {
  food: {
    include_on_component: "minecraft:food",
  },
} satisfies ItemSections;
