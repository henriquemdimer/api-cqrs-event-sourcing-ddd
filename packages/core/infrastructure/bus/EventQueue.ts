import type { Event } from "@core/domain/bus/event/Event";

export class EventQueue {
  private queue: Event[] = [];

  public pushEvent(...events: Event[]) {
    this.queue.push(...events);
  }

  public pullEvents() {
    const events = this.queue;
    this.queue = [];

    return events;
  }
}
