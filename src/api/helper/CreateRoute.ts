import { Application } from 'express';
type httpVersI = 'all' | 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head';

export class CreateRoute {
  public static run(app: Application, method: any, httpVerb: httpVersI, path: string) {

    return app.route(path)[httpVerb](method());
  }
}