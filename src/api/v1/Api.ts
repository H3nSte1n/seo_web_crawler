import { Application } from "express";
import { ApiDoc } from "./ApiDoc";

export class Api {

  static initApi(app: Application): void {
    ApiDoc.init(app);
  }
}