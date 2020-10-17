import {isMainThread, parentPort} from 'worker_threads';
import { TransferedDataInterface } from '../interface/TransferedDataInterface';
import { FetchWebsiteData } from '../FetchWebsiteData';
import { SEOElementParser } from '../SEOElementParser';

const run = () => {
  if (isMainThread) return;

  parentPort?.on('message', async (data: TransferedDataInterface) => {
    const { value } = data;
    const html = await FetchWebsiteData.fetch(value as string);
    const seoParser = new SEOElementParser(html);
  })
}

run();

