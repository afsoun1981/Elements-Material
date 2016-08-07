/// <reference path="../../../typings.d.ts" />
import { Component, ViewChild, OnInit } from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { ElToolbarComponent } from '../el-toolbar';
import { ElErwinComponent } from '../el-erwin';
import { ElErwinSearchresultComponent } from '../el-erwin-searchresult';
import { ElMenuComponent } from '../el-menu';
import { ElDropdownButtonComponent } from '../el-dropdown-button';
import { ElSidenavButtonComponent} from '../el-sidenav-button';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { Article } from '../../models/article.model';
import { DataService } from '../../services/data-service/data.service';

import { Subscriber } from 'rxjs/Subscriber';
import { RepositoryEvent, RepositoryEventType } from '../../services/repository/repository';
import { ArticleRepositoryService } from '../../services/article-repository/article-repository.service';

@Component({
  moduleId: module.id,
  selector: 'el-proto-app',
  templateUrl: 'el-proto-app.component.html',
  styleUrls: ['el-proto-app.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon,
    ElToolbarComponent,
    ElErwinComponent,
    ElErwinSearchresultComponent,
    ElMenuComponent,
    ElDropdownButtonComponent,
    ElSidenavButtonComponent,
    PolymerElement('vaadin-grid')
  ],
  providers: [DataService, ArticleRepositoryService, MdIconRegistry, MdRadioDispatcher]
})
export class ElProtoAppComponent implements OnInit {
  title: String = 'el-proto works!';

  constructor(articleRepo : ArticleRepositoryService) {
    var me = this;

    articleRepo.subscribe(function(event : RepositoryEvent) {
        let subscriber : Subscriber<RepositoryEvent> = this;
        switch (event.type) {
          case RepositoryEventType.Add:
            console.log('New article added: ' + event.value.artikel_nr); 
            break;
          
          case RepositoryEventType.Reload:
            console.log(event.value + ' articles loaded.'); 
            me.articles = articleRepo.getModels();
            break;

          default:
            subscriber.unsubscribe();
            subscriber.error("Invalid value.");
            break;
        }
    });

    setTimeout(() => articleRepo.addModel(this.articles[0]), 2000);
  }

  public ngOnInit() {
  }

  articles: Article[];

}
