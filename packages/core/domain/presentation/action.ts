import type { RequestContext } from "../server/RequestContext";

export interface Action {
  path: string;
  method: string;
  execute(ctx?: RequestContext): Promise<any> | void;
}
