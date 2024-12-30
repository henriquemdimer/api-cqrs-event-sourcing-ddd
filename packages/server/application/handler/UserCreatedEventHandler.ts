import type { EventHandler } from "@core/domain/bus/event/Handler";
import type { UserCreatedEvent } from "../events/UserCreatedEvent";

export class UserCreatedEventHandler implements EventHandler {
  public name = "UserCreatedEventHandler";

  public async handle(event: UserCreatedEvent): Promise<void> {
      console.log(`User created with ID=${event.user.id}`);
  }
}
