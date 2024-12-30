import type { Action } from '@core/domain/presentation/action';
import Express from 'express';

export type ServerControllers = Action;

export class Server {
  public app: Express.Express;
  private controllers: ServerControllers[] = [];

  public constructor() {
    this.app = Express();
  }

  public withControllers(...controllers: ServerControllers[]) {
    this.controllers.push(...controllers)
    return this;
  }

  public start(port = 8080) {
    for(const controller of this.controllers) {
      switch(controller.method.toUpperCase()) {
        case 'POST':
          this.app.post(controller.path, controller.execute)
          break;
        case 'GET':
          this.app.get(controller.path, controller.execute);
          break;
      }
    }

    this.app.listen(port);
  }
}
