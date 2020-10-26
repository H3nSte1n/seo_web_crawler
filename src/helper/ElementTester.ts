import { RangeInterface } from "../interface/RangeInterface";
import { SEOElementInterface, SEOElementLength, SEOElementResultInterface } from "../interface/SEOElementInterface";
import { SEOElementsRegEx } from "../RegExStore/SEOElementsRegEx";
import { Element } from "./Element";
import { ErrorMessage } from '../helper/ErrorMessage';

export class ElementTester extends Element {

  public static run(SEOElement: SEOElementInterface, body: string) {
    const element = this.getSEOElement(body, SEOElement.element);
    if(!element) return;

    if(element.length > 1) return this.runTestsFromArray(element, SEOElement);

    return this.runTestsFromElement(element[0], SEOElement);
  }

  private static runTestsFromElement(element: string, SEOElement: SEOElementInterface): SEOElementResultInterface {
    const content = this.getSEOContent(element, SEOElementsRegEx.meta()); //TODO Transform ts regEx store into json

    const result: SEOElementResultInterface = {
      name: SEOElement.element,
      exist: !!content,
    }
    if(!SEOElement.range || !content) return result;
    
    result.length = this.testStringLength(SEOElement.range, content)

    return result;
  }

  private static runTestsFromArray(elements: string[], SEOElement: SEOElementInterface) {
    const resultArray: SEOElementResultInterface[] = [];

    elements.forEach((element: string) => {
      resultArray.push(this.runTestsFromElement(element, SEOElement));
    })
  }
  private static testStringLength(range: RangeInterface, content: string): SEOElementLength {
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

    return {
      status: content.length >= range.start && content.length <= range.end ? 200 : 400,
      error: ErrorMessage.create(conditions, content)
    }
  }
}