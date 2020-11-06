type returnValue = null | IterableIterator<RegExpMatchArray>;

export class Element {

  public static getSEOElement(body: string,regExPattern: string): returnValue {

    let html: returnValue;
    const pattern = new RegExp(regExPattern, "gsm");
    html = body.matchAll(pattern);

    if(!html) return null;
    
    return html;
  }
}