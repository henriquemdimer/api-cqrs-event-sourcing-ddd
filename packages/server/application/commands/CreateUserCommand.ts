import type { Command } from "@core/domain/bus/command/Command";

export class CreateUserCommand implements Command {
  public handlerName = "CreateUserCommandHandler"

  public constructor(
    public usernname: string,
    public email: string,
    public password: string
  ) {}
}
