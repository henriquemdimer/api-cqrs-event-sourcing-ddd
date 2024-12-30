import type { CommandHandler } from "@core/domain/bus/command/CommandHandler";
import type { CreateUserCommand } from "../commands/CreateUserCommand";
import type { UserRepository } from "server/domain/repository/UserRepository";
import type { EventBus } from "@core/infrastructure/bus/EventBus";

export class CreateUserCommandHandler implements CommandHandler {
  public name = "CreateUserCommandHandler";
  public constructor(private readonly userRepository: UserRepository, private readonly eventBus: EventBus) {}

  public async handle(command: CreateUserCommand) {
    const user = await this.userRepository.createUser(command.usernname, command.email, command.password);
    this.eventBus.publish(...user.pullEvents());
  }
}
