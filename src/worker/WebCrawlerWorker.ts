import {isMainThread, parentPort} from 'worker_threads';
import { TransferedDataInterface } from '../interface/TransferedDataInterface';
import { WebsiteData } from '../utils/WebsiteData';

const run = () => {
  if (isMainThread) return;

  parentPort?.on('message', async (data: TransferedDataInterface) => {
    const { value } = data;
    const html = await WebsiteData.fetch(value as string);
  })
}

run();

