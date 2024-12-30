import type { Action } from "@core/domain/presentation/action";
import type { ServerAdapter } from "@core/domain/server/ServerAdapter";

export class Server {
  public constructor(public adapter: ServerAdapter, private controllers: Action[] = []) {}

  public withControllers(...controllers: Action[]) {
    this.controllers = controllers;
    return this;
  }

  public start(port = 8080) {
    for(const controller of this.controllers) {
      this.adapter.handle(controller.method, controller.path, controller.execute);
    }

    this.adapter.start(port);
  }
}
