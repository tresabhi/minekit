import { readdir } from "node:fs/promises";
import { assertSSR } from "../astro/assertSSR";
import { secret } from "../secrets/secret";

class GameVFS {
  constructor(private base: string) {}

  path(relative: string) {
    return `${this.base}/${relative}`;
  }

  dir(path: string) {
    return readdir(this.path(path));
  }

  file(path: string) {
    return Bun.file(this.path(path));
  }

  json<Type>(path: string) {
    return this.file(path).json() as Promise<Type>;
  }
}

assertSSR();

export const vfs = new GameVFS(secret("GAME"));
