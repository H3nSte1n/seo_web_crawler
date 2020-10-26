export class Element {

  public static getSEOElement(body: string, element: string): string[] | null {
    let html: string[] | null;
    const pattern = new RegExp(`(${element}="[^"*]"|="${element}" content="[^"]*")`, "g")
    html = body.match(pattern);
    if(!html) return null;
    
    return html;
  }

  public static getSEOContent(element: string, regEx: string): string | null {
    let content: string[] | null;
    const pattern = new RegExp(regEx, 'g');
    content = element.match(pattern);
    console.log(content);
    if(!content) return null

    return content[0];
  }
}