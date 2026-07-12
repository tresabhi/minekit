import { sluggify } from "../astro/sluggify";
import locales from "../i18n/locales.json";
import type { DiscriminatedSlugs } from "../types/discriminatedSlugs";
import { registry } from "./registries";
import { unqualify } from "./unqualify";
import { vfs } from "./vfs";

export const blockSlugs: DiscriminatedSlugs = [];
export const itemSlugs: DiscriminatedSlugs = [];

const allSlugs = [blockSlugs, itemSlugs];

const strings = await vfs.strings(locales.default);

for (const id of registry("minecraft:block")) {
  const key = `block.minecraft.${unqualify(id)}`;
  const slug = sluggify(strings.get(key));
  blockSlugs.push({ id, slug });
}

for (const id of registry("minecraft:item")) {
  const unqualified = unqualify(id);
  const components = await vfs.components(unqualified);
  const itemName = components.component("minecraft:item_name");
  const name = strings.get(itemName.translate);
  const slug = sluggify(name);

  itemSlugs.push({ id, slug });
}

allSlugs.map((slugs) => {
  slugs.sort((a, b) => a.slug.localeCompare(b.slug, locales.default));
});
