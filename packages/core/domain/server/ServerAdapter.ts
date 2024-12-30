import type { RequestContext } from "./RequestContext";

export type ControllerFunc = (ctx: RequestContext) => Promise<void> | void;

export interface ServerAdapter {
  start(port: string | number): void;
  handle(method: string, path: string, controller: ControllerFunc): void;
}
