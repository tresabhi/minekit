import type { GameStrings } from "../types/gameStrings";

export class GameStringAccessor {
  map: Map<string, string>;

  constructor(strings: GameStrings) {
    this.map = new Map(Object.entries(strings));
  }

  has(key: string) {
    return this.map.has(key);
  }

  get(key: string) {
    if (this.has(key)) return this.map.get(key)!;
    return key;
  }
}
