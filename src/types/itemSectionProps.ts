import type { ComponentAccessor } from "../game/componentAccessor";
import type { WithLocale } from "./withLocale";

export interface ItemSectionProps extends WithLocale {
  id: string;
  unqualified: string;
  components: ComponentAccessor;
}
