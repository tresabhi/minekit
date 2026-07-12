export interface Components {
  components: Partial<ComponentsMap>;
}
export type ComponentName = keyof ComponentsMap;

export interface ComponentsMap {
  "minecraft:item_name": ItemNameComponent;
  "minecraft:food": FoodComponent;
}

interface ItemNameComponent {
  translate: string;
}

interface FoodComponent {
  can_always_eat?: boolean;
  nutrition: number;
  saturation: number;
}
