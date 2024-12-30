import type { Query } from "./Query";
import type { QueryHandler } from "./QueryHandler";

export interface QueryBus {
  registerHandler(handler: QueryHandler): void;
  ask(query: Query): Promise<any>;
}
