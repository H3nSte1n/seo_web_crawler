import { ConditionalsArray } from "../interface/ConditionalsArray";

export class ErrorMessage {

  public static create(conditionalsArray: ConditionalsArray[], element: string): string {
    let errorMessage: string = '';
    
    conditionalsArray.forEach(conditionalObj => {
      const regEx = new RegExp(conditionalObj.condition);
      errorMessage = conditionalObj.errorMessage;

      if(!regEx.test(element)) return;
    });
    return errorMessage ?? '';
  }
}