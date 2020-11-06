import { SEOElementsRegEx } from "../RegExStore/SEOElementsRegEx";
import { SEOElementInterface } from "./SEOElementInterface";

export class RegExPattern {

  public static getRegEx(SEOElement: SEOElementInterface): string {
    const elementName = SEOElement?.regExIndex ?? SEOElement.element;
    const elementKey: keyof typeof SEOElementsRegEx = elementName;
    let regExPattern = SEOElementsRegEx[elementKey];

    if(elementName === 'meta') regExPattern = regExPattern(SEOElement.element);

    return regExPattern;
  }
}