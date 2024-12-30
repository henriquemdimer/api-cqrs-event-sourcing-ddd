import type { Event } from "@core/domain/bus/event/Event";
import type { User } from "server/domain/entities/User";

export class UserCreatedEvent implements Event {
  public name = "UserCreatedEventHandler";

  public constructor(
    public user: User,
  ) {}
}
