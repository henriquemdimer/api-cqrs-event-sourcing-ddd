import type { QueryHandler } from "@core/domain/bus/queries/QueryHandler";
import type { FindUserQuery } from "../queries/FindUserQuery";
import type { UserRepository } from "server/domain/repository/UserRepository";
import { UserDTO } from "server/dto/User";

export class FindUserQueryHandler implements QueryHandler {
  public name = "FindUserQueryHandler";

  public constructor(private readonly userRepository: UserRepository) {}

  public async handle(query: FindUserQuery): Promise<UserDTO> {
    const user = await this.userRepository.getUserById(query.id);
    return UserDTO.convert(user);
  }
}
