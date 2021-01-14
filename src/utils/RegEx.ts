import { SEOElementsRegEx } from "../RegExStore/SEOElementsRegEx";
import { SEOElementInterface } from "../interface/SEOElementInterface";

export class RegEx {

  public static getRegEx(SEOElement: SEOElementInterface): string {
    const elementName = SEOElement?.regExIndex ?? SEOElement.element;
    const elementKey: keyof typeof SEOElementsRegEx = elementName;
    let regExPattern = SEOElementsRegEx[elementKey];

    if(elementName === 'meta') regExPattern = regExPattern(SEOElement.element);

    return regExPattern;
  }
}