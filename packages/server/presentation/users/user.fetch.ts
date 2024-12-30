import type { Action } from "@core/domain/presentation/action";
import type { RequestContext } from "@core/domain/server/RequestContext";
import type { QueryBus } from "@core/infrastructure/bus/QueryBus";
import { FindUserQuery } from "server/application/queries/FindUserQuery";

export class FetchUserAction implements Action {
  public path = '/users/:id';
  public method = 'GET';

  public constructor(private readonly queryBus: QueryBus) {
    this.execute = this.execute.bind(this);
  }

  public async execute(ctx: RequestContext) {
    return await this.queryBus.ask(new FindUserQuery(ctx.params.id));
  }
}
