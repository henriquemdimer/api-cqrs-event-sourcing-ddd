import type { Command } from "./Command";
import type { CommandHandler } from "./CommandHandler";

export interface CommandBus {
  registerHandler(handler: CommandHandler): void;
  dispatch(arg: Command): Promise<any>;
}
