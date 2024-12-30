import type { User } from "../model/User";

export interface UserRepository {
  getUserById(id: string): Promise<User>;
  createUser(username: string, email: string, password: string): Promise<User>;
  save(user: User): Promise<string>;
}
