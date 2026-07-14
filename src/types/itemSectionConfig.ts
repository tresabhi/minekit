import type { ComponentAccessor } from "../game/componentAccessor";
import type { ItemSectionProps } from "./itemSectionProps";

export interface ItemSectionConfig {
  name: string;
  renderer: (props: ItemSectionProps) => unknown;

  shouldRender: (
    context: ItemSectionShouldRenderContext,
  ) => boolean | Promise<boolean>;
}

export interface ItemSectionShouldRenderContext {
  id: string;
  components: ComponentAccessor;
}
