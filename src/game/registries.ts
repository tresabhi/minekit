import { vfs } from "./vfs";

type Registries = Record<string, Registry>;

interface Registry {
  default?: string;
  entries: Record<string, Entry>;
  protocol_id: number;
}

interface Entry {
  protocol_id: number;
}

const registries = await vfs.json<Registries>(
  "report/generated/reports/registries.json",
);

export function registry(name: string) {
  if (name in registries) return Object.keys(registries[name].entries);
  throw new Error(`Registry ${name} doesn't exist`);
}
