import type { Command } from "@core/domain/bus/command/Command";
import type { CommandBus as ICommandBus } from "@core/domain/bus/command/CommandBus";
import type { CommandHandler } from "@core/domain/bus/command/CommandHandler";

export class CommandBus implements ICommandBus {
  private handlers: Map<string, CommandHandler> = new Map<string, CommandHandler>();

  public registerHandler(handler: CommandHandler) {
    this.handlers.set(handler.name, handler);
  }

  public async dispatch(command: Command): Promise<void> {
    const handler = this.handlers.get(command.handlerName);
    if(!handler) throw new Error(`Command handler \`${command.handlerName}\` not found.`);

    return await handler.handle(command);
  }
 }
