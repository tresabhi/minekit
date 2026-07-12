import type {
  ComponentName,
  Components,
  ComponentsMap,
} from "../types/components";

export class ComponentAccessor {
  components: Partial<ComponentsMap>;

  constructor(
    components: Components,
    private context: string,
  ) {
    this.components = components.components;
  }

  component<Name extends ComponentName>(name: Name): ComponentsMap[Name] {
    const component = this.components[name];

    if (component !== undefined) {
      return component;
    }

    throw new Error(`Component ${name} not found in ${this.context}`);
  }
}
