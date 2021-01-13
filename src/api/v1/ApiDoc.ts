import { Application } from "express";
import swaggerUi from 'swagger-ui-express';
import * as openApiDocumentation from '../openApi/core_1.0.0.json'

export class ApiDoc {

  static init(app: Application) {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
  }
}