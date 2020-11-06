import {isMainThread, parentPort} from 'worker_threads';
import { TransferedSEOElementDataInterface } from '../interface/TransferedDataInterface';
import { SEOElementParser } from '../SEOElementParser';

const run = () => {
  if (isMainThread) return;

  parentPort?.on('message', async (data: TransferedSEOElementDataInterface) => {
    const { seoElements, htmlBody } = data;
    const parser = new SEOElementParser(htmlBody, seoElements);
    parser.parseElements();
    console.log('finish')
  })
}

run();
