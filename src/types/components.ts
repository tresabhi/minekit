import type { ConsumableComponent } from "./components/consumable";
import type { FoodComponent } from "./components/food";
import type { ItemNameComponent } from "./components/item_name";

export interface Components {
  components: Partial<ComponentsMap>;
}
export type ComponentName = keyof ComponentsMap;

export interface ComponentsMap {
  "minecraft:consumable": ConsumableComponent;
  "minecraft:food": FoodComponent;
  "minecraft:item_name": ItemNameComponent;
}
