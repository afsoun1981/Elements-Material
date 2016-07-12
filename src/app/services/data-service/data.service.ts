import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Article } from '../../models/article.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private http : Http) {
  }

  public getArticles() : Observable<Article[]> {
      var articles : Article[] = [];

      // TODO: get data from API server
      return this.http.get("data/articles.json")
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  private extractData(res: Response) : Article[] {
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
