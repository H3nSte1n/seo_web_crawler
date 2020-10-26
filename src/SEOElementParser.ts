import { ElementTester } from './helper/ElementTester';
import { SEOElementInterface } from './interface/SEOElementInterface';

export class SEOElementParser {
  private SEOElements: SEOElementInterface[] = [];
  private body: any;
  private exclude: SEOElementInterface[] | null;

  constructor(body: any, seoElements: SEOElementInterface[] = [], include?: SEOElementInterface[], exclude?: SEOElementInterface[]) {
    this.SEOElements = include ?? seoElements;
    this.body = body;
    this.exclude = exclude ?? null;
  }

  public parseElements() {
    this.SEOElements.forEach(SEOElement => {
      console.log('asdsadasd123', ElementTester.run(SEOElement, this.body));
    })
  }
}