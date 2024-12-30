import type { Event } from './Event';

export interface EventHandler {
  name: string;
  handle(event: Event): Promise<void>;
}
