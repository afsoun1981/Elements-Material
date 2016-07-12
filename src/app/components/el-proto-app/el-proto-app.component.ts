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
  providers: [DataService, MdIconRegistry, MdRadioDispatcher]
})
export class ElProtoAppComponent implements OnInit {
  title: String = 'el-proto works!';

  constructor(dataService : DataService) {
    dataService.getArticles()
                     .subscribe(
                       articles => this.articles = articles,
                       error =>  this.errorMessage = <any>error);
  }

  public ngOnInit() {
  }

  articles: Article[];

  errorMessage: string;
}
