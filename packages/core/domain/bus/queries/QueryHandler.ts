import type { Query } from "./Query";

export interface QueryHandler {
  name: string;
  handle(query: Query): Promise<any>;
}
