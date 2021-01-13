import path from "path";
import { Request, Response } from "request";
import { MessageChannel, Worker } from "worker_threads";
import { CustomWorker } from "../../helper/CustomWorker";
import { ElementJSONParser } from "../../helper/ElementJSONParser";
import { FetchWebsiteData } from "../../helper/FetchWebsiteData";
import json from '../../JSON/SEOElements.json';

export class ParserController {

  public static async startParser(_req: Request, _res: Response) {
    const { port1 } = new MessageChannel();
    const worker: Worker = CustomWorker.create(path.join(__dirname, '/worker/SEOParserWorker.ts'));
    worker.on('message', () => {
      // tslint:disable-next-line: no-console
      console.log('Thread started...')
    })
    const html = await FetchWebsiteData.fetch('https://www.i22.de/');
    worker.postMessage({port: port1, seoElements: ElementJSONParser.run(json.attributes), htmlBody: html}, [port1]);
  }
}