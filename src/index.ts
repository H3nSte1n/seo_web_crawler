import { CustomWorker } from './CustomWorker';
import path from 'path';
import { Worker, MessageChannel } from 'worker_threads';

const { port1 } = new MessageChannel();
const worker: Worker = CustomWorker.createWorker(path.join(__dirname, '/worker/WebCrawlerWorker.ts'));
worker.on('message', () => {
  console.log('Thread started...')
})

worker.postMessage({port: port1, value: 'https://www.npmjs.com/package/@types/cheerio'}, [port1])
