import { MessagePort } from "worker_threads";
import { SEOElementInterface } from "./SEOElementInterface";

export interface TransferedDataInterface {
  port: MessagePort,
  value: 'string' | number
}

export interface TransferedSEOElementDataInterface {
  port: MessagePort,
  seoElements: SEOElementInterface[],
  htmlBody: string
}