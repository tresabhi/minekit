import type { Tags } from "../types/tags";
import { vfs } from "./vfs";

const duplicateTags = new Map<string, string[]>();

async function traverse(root: string, parent: string) {
  const items = await vfs.dir(root);
  const hasDirectTags = items.some((item) => item.endsWith(".json"));

  for (const item of items) {
    if (item.endsWith(".json")) {
      const name = item.replace(".json", "");
      const id = `${parent}${name}`;
      console.log(id);
      const sanitizedRoot = root.replace(parent, "").slice(0, -1);

      if (duplicateTags.has(id)) {
        duplicateTags.get(id)!.push(sanitizedRoot);
      } else {
        duplicateTags.set(id, [sanitizedRoot]);
      }
    } else {
      await traverse(
        `${root}${item}/`,
        hasDirectTags ? `${parent}${item}/` : "",
      );
    }
  }
}

await traverse("client/data/minecraft/tags/", "");

for (const [id, roots] of duplicateTags) {
  if (roots.length === 1) continue;

  duplicateTags.delete(id);

  for (const root of roots) {
    const split = root.split("/");
    const immediateParent = split.at(-1)!;
    const remainingRoot = split.slice(0, -1).join("/");
    const newId = `${immediateParent}/${id}`;

    if (duplicateTags.has(newId)) {
      duplicateTags.get(newId)!.push(remainingRoot);
    } else {
      duplicateTags.set(newId, [remainingRoot]);
    }
  }
}

const tags = new Map<string, string[]>();

for (const [idRaw, roots] of duplicateTags) {
  if (roots.length !== 1) {
    throw new Error(`De-duplication not resolved in 1 iteration for ${idRaw}`);
  }

  const id = `#minecraft:${idRaw}`;
  const path = `${roots[0]}/${idRaw}.json`;
  const data = await vfs.json<Tags>(path);

  tags.set(id, data.values);
}
