import { StatusCodes } from "../enums/statusCodes";
import { ErrorMessage } from "../utils/ErrorMessage";
import { RangeInterface } from "../interface/RangeInterface";
import { SEOElementResultInterface } from "../interface/SEOElementInterface";

export class StringValidation {

  static validateStringLength(range: RangeInterface, content: string, result?: SEOElementResultInterface): boolean {
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
    const status: number = content.length >= range.start && content.length <= range.end ? StatusCodes.OK : StatusCodes.Bad_Request;
    result!.status = status;
    result!.errorMessage = ErrorMessage.create(conditions, content)
    return status === StatusCodes.OK;
  }
}