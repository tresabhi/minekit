export type WellKnownSecret = "VERSION_MANIFEST" | "GAME";

export function secret(name: WellKnownSecret) {
  if (name in import.meta.env) {
    return import.meta.env[name]!;
  }

  throw new Error(`Secret ${name} not found`);
}
