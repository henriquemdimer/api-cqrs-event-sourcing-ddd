import type { EventHandler } from "@core/domain/bus/event/Handler";
import type { Event } from '@core/domain/bus/event/Event';

export class EventBus implements EventBus {
  private handlers: Map<string, EventHandler> = new Map<string, EventHandler>();

  public subscribe(handler: EventHandler) {
    this.handlers.set(handler.name, handler);
  }

  public async publish(...events: Event[]): Promise<void> {
    for(const event of events) {
      const handler = this.handlers.get(event.name);
      if(!handler) throw new Error(`Target handler \`${event.name}\` not found.`);

      await handler.handle(event);
    }
  }
}
