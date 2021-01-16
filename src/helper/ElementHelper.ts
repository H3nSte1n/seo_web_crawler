import { StatusCodes } from "../enums/statusCodes";
import { SEOElementInterface, SEOElementResultInterface } from "../interface/SEOElementInterface";
import { StringValidation } from "../validations/StringValidation";

type returnValue = null | IterableIterator<RegExpMatchArray>;

export class ElementHelper {

  public static getSEOElement(body: string, regExPattern: string): returnValue {

    let html: returnValue;
    const pattern = new RegExp(regExPattern, "gsm");
    html = body.matchAll(pattern);

    if(!html) return null;
    return html;
  }

  static validateElementAttributes(content: string, SEOElement: SEOElementInterface): SEOElementResultInterface {
    const result: SEOElementResultInterface = {
      name: SEOElement.element,
      exist: !!content,
      status: !!content ? StatusCodes.OK : StatusCodes.Bad_Request
    }

    if(!SEOElement.range || !content) return result;
    result.length = StringValidation.validateStringLength(SEOElement.range, content, result)

    return result;
  }
}