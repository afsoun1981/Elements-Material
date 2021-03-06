import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Article } from '../../models/article.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private http : Http) {
  }

  public get<T>(url : string) : Observable<T[]> {
      var models : T[] = [];

      // TODO: get data from API server
      return this.http.get(url)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  private extractData<T>(res: Response) : T[] {
    let body = res.json();
    return body.results || [];
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
