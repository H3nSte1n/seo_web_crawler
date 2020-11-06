import { RangeInterface } from "../interface/RangeInterface";
import { SEOElementInterface, SEOElementResultInterface } from "../interface/SEOElementInterface";
import { SEOElementsRegEx } from "../RegExStore/SEOElementsRegEx";
import { Element } from "./Element";
import { ErrorMessage } from '../helper/ErrorMessage';
import { RegExPattern } from "../interface/RegExPattern";

export class ElementTester extends Element {

  public static run(SEOElement: SEOElementInterface, body: string) {
    let regExPattern = RegExPattern.getRegEx(SEOElement);
    const element = this.getSEOElement(body, regExPattern);

    if(!element) return;
    return this.runTestsFromArray(element, SEOElement);
  }
  private static runTestsFromElement(content: string, SEOElement: SEOElementInterface): SEOElementResultInterface {    
    const result: SEOElementResultInterface = {
      name: SEOElement.element,
      exist: !!content,
      status: !!content ? 200 : 400
    }

    if(!SEOElement.range || !content) return result;
    result.length = this.testStringLength(SEOElement.range, content, result)

    return result;
  }
  private static runTestsFromArray(elements: IterableIterator<RegExpMatchArray>, SEOElement: SEOElementInterface) {
    const resultArray: SEOElementResultInterface[] = [];

    Array.from(elements).forEach((element: RegExpMatchArray) => {
      resultArray.push(this.runTestsFromElement(element.groups!['content'], SEOElement));
    });

    return resultArray.length > 1 ? resultArray : resultArray[0];
  }
  private static testStringLength(range: RangeInterface, content: string, result?: SEOElementResultInterface): boolean {
    const conditions = [
      {
        condition: `.{${range.start},}`,
        errorMessage: 'to small'
      },
      {
        condition: `.{, ${range.start}}`,
        errorMessage: 'to long'
      }
    ]
    
    const status: number = content.length >= range.start && content.length <= range.end ? 200 : 400;
    result!.status = status;
    result!.errorMessage = ErrorMessage.create(conditions, content)
    return status === 200;
  }
}