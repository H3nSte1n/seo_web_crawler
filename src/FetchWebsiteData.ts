import request from 'request';

export class FetchWebsiteData {

  public static fetch(host: string) {
    request(host as string, function (error: string, _response: any, body: any): any{
      if(error) return;
      console.log(body);
      return body;
    });
  }
}