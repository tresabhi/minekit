import type { z } from "zod";
import { componentSchemas } from "../generated/components";

export type Component<T extends keyof typeof componentSchemas> = z.infer<
  (typeof componentSchemas)[T]
>;
