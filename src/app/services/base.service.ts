import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
  err: any;
  public baseUrl = 'http://localhost:3000';

  constructor(public http: HttpClient) {}

  postReq(url: any, data: any) {
    // const token = this.getToken();
    return this.http.post<any>(this.baseUrl + url, data, {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=utf-8',
        //Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': this.baseUrlUpdate(url),
      }),
    });
  }
  getReq(url: any) {
    return this.http.get<any>(this.baseUrlUpdate(url), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.baseUrlUpdate(url),
      }),
    });
  }
  putReq(url: any) {
    // const token = this.getToken();
    return this.http.post<any>(this.baseUrlUpdate(url), {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=utf-8',
        //Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': this.baseUrlUpdate(url),
      }),
    });
  }

  protected baseUrlUpdate(url: string): string {
    // throw new Error('Method not implemented.');
    return url.startsWith('/') ? this.baseUrl + url : url;
  }
}
