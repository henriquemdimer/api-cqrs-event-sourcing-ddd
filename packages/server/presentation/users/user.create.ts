import type { Action } from "@core/domain/presentation/action";
import type { CommandBus } from "@core/infrastructure/bus/CommandBus";
import { CreateUserCommand } from "server/application/commands/CreateUserCommand";

export class CreateUserAction implements Action {
  public path = '/users';
  public method = 'POST';

  public constructor(private readonly commandBus: CommandBus) {
    this.execute = this.execute.bind(this);
  }

  public async execute() {
    this.commandBus.dispatch(new CreateUserCommand("vonderheimsk", "sadoakdokas", "aoskdoakdoka"));
    return "201 Created";
  }
}
