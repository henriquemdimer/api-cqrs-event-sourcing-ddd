import type { EventHandler } from "./Handler";

export interface EventBus {
  registerHandler(handler: EventHandler): void;
  publish(event: Event): Promise<void>;
}
