import path from 'path';
import { MessageChannel, Worker } from 'worker_threads';
import { CustomWorker } from './utils/CustomWorker';
import { ElementJSONParser } from './utils/ElementJSONParser';
import { SEOElementInterface } from './interface/SEOElementInterface';
import AdminPanel from './JSON/AdminPanel.json'
import SeoElements from './JSON/SEOElements.json';

export class WorkerAdmin {
  private maxWorker: number;
  private seoElementsPerWorker: number;
  private seoElements: SEOElementInterface[];
  private runningWorker: Worker[];
  private calculatedCount: number;
  private rawHtml: string;

  constructor(rawHTML: string) {
    this.maxWorker = AdminPanel.max_worker;
    this.seoElementsPerWorker = AdminPanel.seo_elements_per_worker;
    this.seoElements = ElementJSONParser.run(SeoElements.attributes);
    this.runningWorker = [];
    this.calculatedCount = this.seoElements.length /  this.seoElementsPerWorker; // TODO Editing the functionality to get the rest
    this.rawHtml = rawHTML;
  }

  public init(): void {
    for(let i = 0; i < this.calculatedCount; i += 1 ) {
      console.log(i, this.seoElements.length, this.seoElementsPerWorker)
      const worker: Worker = CustomWorker.create(path.join(__dirname, '/worker/SEOParserWorker.ts'));
      this.runningWorker.push(worker);
    }
  }

  public run() {

    this.runningWorker.forEach((worker) => {
      const WORKER_START_INDEX = 0;
      const { port1 } = new MessageChannel();
      const startIndex = WORKER_START_INDEX * this.seoElementsPerWorker;
      const endIndex = (WORKER_START_INDEX * this.seoElementsPerWorker) + this.seoElementsPerWorker

      const chunk = this.seoElements.splice(startIndex, endIndex);
      worker.postMessage({port: port1, seoElements: chunk, htmlBody: this.rawHtml}, [port1]);
    })
  }
}