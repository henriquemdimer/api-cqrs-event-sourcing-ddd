import { resolve } from "bun";
import { User } from "server/domain/model/User";
import type { UserRepository } from "server/domain/repository/UserRepository";

export class InMemoryUserRepository implements UserRepository {
  private users: Map<string, User> = new Map<string, User>();

  public getUserById(id: string) {
    return new Promise<User>((resolve, reject) => {
      const user = this.users.get(id);
      if(!user) reject(new Error('User not found.'));

      resolve(user as User);
    })
  }

  public createUser(username: string, email: string, password: string): Promise<User> {
      return new Promise<User>(async (resolve) => {
        const user = User.create(Math.floor(Math.random() * 999999).toString(), username, email, password);
        await this.save(user);

        resolve(user);
      })
  }

  public save(user: User): Promise<string> {
    return new Promise<string>((resolve) => {
      this.users.set(user.id, user);
      resolve(user.id);
    })
  }
}
