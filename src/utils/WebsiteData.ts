import request from 'request';

export class WebsiteData {

  public static fetch(host: string) {
    return new Promise((resolve, reject) => {
      request(host as string, (error: string, _response: any, body: any) => {
        if (error) return reject(error);
        resolve(body);
      });
    });
  }
}