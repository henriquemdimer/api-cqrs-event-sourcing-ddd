import type { Command } from "./Command";

export interface CommandHandler {
  name: string;
  handle(arg: Command): Promise<any>
}
