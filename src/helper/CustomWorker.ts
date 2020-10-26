import { Worker } from 'worker_threads';

export class CustomWorker {

  public static create(path: string): Worker {
    return new Worker('./src/worker.js', {
      workerData: {
        path: path
      }
    });
  }
}