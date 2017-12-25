import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class RestService {

  private authHeader: string ='X-Firebase-Token';

  constructor(private http: Http, private authService:AuthService) { }

  doGet(url: string, headers: Headers, secure: boolean): Promise<string> {
    if(secure){
      let token = this.authService.currentUser().getToken();
      headers.append(this.authHeader, token);
    }
    return this.http.get(environment.hostUrl + url, {headers})
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  doPost(url: string, body: string, headers: Headers, secure: boolean): Promise<string> {
    if(secure){
      let token = this.authService.currentUser().getToken();
      headers.append(this.authHeader, token)
    }
    return this.http.post(environment.hostUrl + url, body, {headers})
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || { };
  }

  handleError (error: any) {
    let errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
  }
}
