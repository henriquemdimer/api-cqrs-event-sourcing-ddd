import type { ControllerFunc, ServerAdapter } from "@core/domain/server/ServerAdapter";
import Express from 'express';

export class ExpressDriver implements ServerAdapter {
  private app = Express();

  public constructor() {}
  
  public handle(method: string, path: string, controller: ControllerFunc) {
    switch(method.toUpperCase().trim()) {
      case 'POST':
        this.app.post(path, (req, res) => this.call(req, res, controller));
        break;
      case 'GET':
        this.app.get(path, (req, res) => this.call(req, res, controller));
        break;
      case 'DELETE':
        this.app.delete(path, (req, res) => this.call(req, res, controller));
        break;
      case 'PUT':
        this.app.put(path, (req, res) => this.call(req, res, controller));
        break;
      case 'PATCH':
        this.app.patch(path, (req, res) => this.call(req, res, controller));
    }
  }

  private async call(req: Express.Request, res: Express.Response, controller: ControllerFunc) {
    const ctx = {
      params: req.params
    }

    try {
      const ev = await controller(ctx);
      res.status(200).send(ev);
    } catch(err: any) {
      console.log(err);
      res.status(500).send('Internal server error.');
    }
  }

  public start(port: number | string) {
    this.app.listen(port);
  }
}
