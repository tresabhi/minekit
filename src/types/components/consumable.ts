export interface ConsumableComponent {
  on_consume_effects?: OnConsumeEffect[];
  animation?: string;
  has_consume_particles?: boolean;
  sound?: string;
  consume_seconds?: number;
}

interface OnConsumeEffect {
  type: string;
  effects?: Effect[] | string;
  sound?: string;
  probability?: number;
}

interface Effect {
  duration: number;
  id: string;
  show_icon: boolean;
  amplifier?: number;
}
