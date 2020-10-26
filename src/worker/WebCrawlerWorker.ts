import {isMainThread, parentPort} from 'worker_threads';
import { TransferedDataInterface } from '../interface/TransferedDataInterface';
import { FetchWebsiteData } from '../helper/FetchWebsiteData';

const run = () => {
  if (isMainThread) return;

  parentPort?.on('message', async (data: TransferedDataInterface) => {
    const { value } = data;
    const html = await FetchWebsiteData.fetch(value as string);
  })
}

run();

