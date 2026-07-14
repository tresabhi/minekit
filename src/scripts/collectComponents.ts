import { argv } from "bun";
import { writeFile } from "node:fs/promises";
import { vfs } from "../game/vfs";
import type { ComponentName } from "../types/components";

const type = argv[2];

const root = "report/generated/reports/minecraft/components/item";
const items = await vfs.dir(root);
const collection: unknown[] = [];

for (const item of items) {
  const name = item.replace(".json", "");
  const components = await vfs.components(name);

  if (!components.has(type as ComponentName)) continue;

  collection.push({
    "mcidx:name": name,
    ...components.get(type as ComponentName),
  });
}

await writeFile("temp/components.json", JSON.stringify(collection, null, 2));
