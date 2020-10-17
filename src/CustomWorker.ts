import { Worker, isMainThread, parentPort } from 'worker_threads';

class CustomWorker {

  public static createWorker(path: string): Worker {
    return new Worker('./src/worker.js', {
      workerData: {
        path: path
      }
    });
  }
}

export {
  CustomWorker,
  isMainThread,
  Worker,
  parentPort
}