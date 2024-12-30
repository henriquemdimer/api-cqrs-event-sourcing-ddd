import type { Query } from "@core/domain/bus/queries/Query";
import type { QueryBus as IQueryBus } from "@core/domain/bus/queries/QueryBus";
import type { QueryHandler } from "@core/domain/bus/queries/QueryHandler";

export class QueryBus implements IQueryBus {
  private handlers: Map<string, QueryHandler> = new Map<string, QueryHandler>();

  public registerHandler(handler: QueryHandler): void {
      this.handlers.set(handler.name, handler);
  }

  public ask(query: Query) {
    const handler = this.handlers.get(query.name);
    if(!handler) throw new Error(`Missing query handler: ${query.name}`);

    return handler.handle(query);
  }
}
