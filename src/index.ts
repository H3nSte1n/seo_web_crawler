import { CustomWorker } from './helper/CustomWorker';
import path from 'path';
import { Worker, MessageChannel } from 'worker_threads';
import { ElementJSONParser } from './helper/ElementJSONParser';
import json from './JSON/SEOElements.json';
import { FetchWebsiteData } from './helper/FetchWebsiteData';

const { port1 } = new MessageChannel();
const worker: Worker = CustomWorker.create(path.join(__dirname, '/worker/SEOParserWorker.ts'));
worker.on('message', () => {
  console.log('Thread started...')
})

const run = async () => {
  const html = await FetchWebsiteData.fetch('https://www.i22.de/');

  worker.postMessage({port: port1, seoElements: ElementJSONParser.run(json.attributes), htmlBody: html}, [port1]);
}

run();

