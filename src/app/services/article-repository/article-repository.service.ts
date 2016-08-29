import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';
import { Article } from '../../models/article.model';
import { DataService } from '../data-service/data.service';
import { Repository, RepositoryEvent, RepositoryEventType } from '../repository/repository';

@Injectable()
export class ArticleRepositoryService extends Repository<Article> {
  constructor(dataService : DataService) {
    super(dataService);
  }

  getUrl() : string {
    return "data/articles.json";
  }
}
