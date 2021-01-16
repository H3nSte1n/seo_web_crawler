import { RangeInterface } from "./RangeInterface";

export interface SEOElementResultInterface {
  name?: string,
  exist?: boolean,
  length?: boolean,
  status?: number,
  errorMessage?: string,
  seoContent?: boolean // TODO Check SEO Element for content
}

export interface SEOElementInterface {
  element: string,
  range: RangeInterface,
  regExIndex?: string
}