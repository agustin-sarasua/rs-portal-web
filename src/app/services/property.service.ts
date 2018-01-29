import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Headers } from '@angular/http';
import { Property } from '../model/property';
import { Observable } from "rxjs/Observable";
import { AuthService } from './auth.service';
import { environment } from './../../environments/environment';
import {Http, Response} from '@angular/http';

@Injectable()
export class PropertyService {

  private authHeader: string ='X-Firebase-Token';

  constructor(private http: Http, private restService: RestService, private authService: AuthService) { }

  public createProperty (property: Property): Promise<string> {
    let body = JSON.stringify(property, (k,v) => { if(v == null) { return undefined; } else { return v; } } );
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.restService.doPost("/property", body, headers, true);
  }

  public loadProperties(): Promise<Property[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let token = this.authService.currentUser.refreshToken;
    // headers.append(this.authHeader, token);


    return this.http.get(environment.hostUrl + "/property", { headers })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body.Items || { };
  }

  handleError (error: any) {
    let errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
  }
}
