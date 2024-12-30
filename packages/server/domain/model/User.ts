import { EventQueue } from "@core/infrastructure/bus/EventQueue";
import { UserCreatedEvent } from "server/application/events/UserCreatedEvent";

export class User extends EventQueue {
  public static create(id: string, username: string, email: string, password: string) {
    const user = new User(id, username, email, password);
    user.pushEvent(new UserCreatedEvent(user));

    return user;
  }

  private constructor(
    public id: string,
    public username: string,
    public email: string,
    public password: string,
  ) {
    super();
  }
}
