import type { User } from "server/domain/model/User";

export class UserDTO {
  public constructor(public username: string, public id: string) {}

  public static convert(user: User) {
    return {
      username: user.username,
      id: user.id
    }
  }
}
