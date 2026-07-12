import type { Strings } from "../types/strings";

const glob = import.meta.glob("../lang/*.json", { import: "default" });

export async function getStrings(locale: string) {
  const getter = glob[`../lang/${locale}.json`];
  const strings = await getter();
  return strings as Strings;
}
