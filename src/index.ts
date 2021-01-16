import { WebsiteData } from './utils/WebsiteData';
import './api/config/server'
import { WorkerAdmin } from './WorkerAdmin';

const run = async () => {
  const html: string = await WebsiteData.fetch('https://www.i22.de/') as string;
  const workerAdmin = new WorkerAdmin(html)
  workerAdmin.init();
  workerAdmin.run();
}

run();

