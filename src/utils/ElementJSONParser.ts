import { SEOElementInterface } from '../interface/SEOElementInterface';

export class ElementJSONParser {

  public static run(attributes: SEOElementInterface[]): SEOElementInterface[] {
    return [...attributes];
  }
}