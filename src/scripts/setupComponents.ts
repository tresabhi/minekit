import { mkdir } from "node:fs/promises";
import { vfs } from "../game/vfs";

const readRoot = "report/generated/reports/minecraft/components/item";
const writeRoot = "src/generated/components";
const items = await vfs.dir(readRoot);

const observations = new Map<string, unknown[]>();

for (const item of items) {
  const name = item.replace(".json", "");
  const components = await vfs.components(name);

  for (const name in components.components) {
    const component = components.components[name];

    if (!observations.has(name)) {
      observations.set(name, []);
    }

    observations.get(name)!.push(component);
  }
}

await mkdir(writeRoot, { recursive: true });

for (const [name, samples] of observations) {
  break;
}
