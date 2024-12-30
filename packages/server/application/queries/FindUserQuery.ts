import type { Query } from "@core/domain/bus/queries/Query";

export class FindUserQuery implements Query {
  public name = "FindUserQueryHandler";

  public constructor(
    public id: string,
  ) {}
}
