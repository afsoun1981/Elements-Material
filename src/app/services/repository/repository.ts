import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';
import { DataService } from '../data-service/data.service';

export enum RepositoryEventType {
  Reload,
  Add,
  Update,
  Remove,
  Error
}

export class RepositoryEvent {
  type : RepositoryEventType;
  value : any;
}

export abstract class Repository<T> extends Subject<RepositoryEvent> {
  models : T[] = [];

  constructor(private dataService : DataService) {
    super();

    this.reload();
  }

  abstract getUrl() : string;

  sendError(error : any) {
    this.next({ type: RepositoryEventType.Error, value: error });
  }

  reload() : void {
    this.dataService.get<T>(this.getUrl())
                     .subscribe(
                       models => this.reloadModels(models),
                       error =>  this.sendError(<any>error));
  }

  addModel(model : T) : void {
    this.models.push(model);
    this.next({ type: RepositoryEventType.Add, value: model });
  }

  reloadModels(models : T[]) {
    this.models = models;
    this.next({ type: RepositoryEventType.Reload, value: models.length });
  }

  getModels() : T[] {
    return this.models;
  }
}
