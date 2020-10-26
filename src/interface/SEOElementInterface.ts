import { RangeInterface } from "./RangeInterface";

export interface SEOElementResultInterface {
  name?: string,
  exist?: boolean,
  length?: SEOElementLength,
  seoContent?: boolean //TODO Check SEO Element for content
}

export interface SEOElementInterface {
  element: string,
  range: RangeInterface,
  regExIndex?: string
}

export interface SEOElementLength {
  status: number,
  error: string
}