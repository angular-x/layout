import { UiScreenSizes } from "../../../ui";
import { LayoutSlot } from "./layout-slot.type";

export type LayoutSlotSettings = Partial<
  Record<LayoutSlot, Record<string, Partial<Record<UiScreenSizes, { active?: boolean; value?: string }>>>>
>;