import express from 'express';
import * as bodyParser from "body-parser";
import helmet from 'helmet';
import cors from 'cors';
import { Api as ApiV1 } from '../v1/Api';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();

    ApiV1.initApi(this.app);
  }

  private config(): void {
    // this.app.use(cors());
    // this.app.use(helmet());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
}

export const app = new App().app;