import { MessagePort } from "worker_threads";

export interface TransferedDataInterface {
  port: MessagePort,
  value: 'string' | number
}