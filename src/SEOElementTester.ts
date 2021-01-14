import { SEOElementInterface, SEOElementResultInterface } from "./interface/SEOElementInterface";
import { ElementHelper } from "./helper/ElementHelper";
import { RegEx } from "./utils/RegEx";

export class SEOElementTester extends ElementHelper {

  public static run(SEOElement: SEOElementInterface, body: string) {
    const regExPattern = RegEx.getRegEx(SEOElement);
    const element = this.getSEOElement(body, regExPattern);

    if(!element) return;
    return this.loopElementArray(element, SEOElement);
  }

  private static loopElementArray(elements: IterableIterator<RegExpMatchArray>, SEOElement: SEOElementInterface) {
    const resultArray: SEOElementResultInterface[] = [];

    Array.from(elements).forEach((element: RegExpMatchArray) => {
      resultArray.push(this.validateElementAttributes(element.groups!.content, SEOElement));
    });

    return resultArray.length > 1 ? resultArray : resultArray[0];
  }
}