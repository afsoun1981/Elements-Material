/// <reference path="../../../typings.d.ts" />
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
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
import { ElMenuComponent } from '../el-menu';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { Article } from '../../models/article.model';

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
    ElMenuComponent,
    PolymerElement('vaadin-grid')
  ],
  providers: [MdIconRegistry, MdRadioDispatcher]
})
export class ElProtoAppComponent implements AfterViewInit, OnInit {
  title: String = 'el-proto works!';

  @ViewChild('testMenu') testMenu : ElMenuComponent;

  public ngOnInit() {
  }

  public ngAfterViewInit() {
    window.setTimeout(() => this._setup(), 1);
  }

  private _setup() : void {
    this.testMenu.title = "ElMenu";

    this.testMenu.items = [
      { title: 'Mr.', subtitle: 'Reza'},
      { title: 'Mr.', subtitle: 'Majid'},
      { title: 'Mr.', subtitle: 'Arsalan'},
      { title: 'Mr.', subtitle: 'Telim'},
      { title: 'Mrs.', subtitle: 'Sercha'}
    ]
  }
  
  articles: Article[] = [{
    artikel_nr: 100005627,
    bezeichnung: '16 GB microSDHC Class 10 Plus Rot',
    h_article_nr: 871079564664747,
    bestell_nr: 1234,
    ek_netto: 1.234,
    rabatt: 3.2,
    shop_vk: 3.49,
    ebay_vk: 3.49,
    amazon_vk: 3.49,
    kapazitat: 16,
    farbe: 'Rot',
    gewicht: 50,
    hersteller: 'Samsung',
    status: 'OK'
  }, {
    artikel_nr: 100005628,
    bezeichnung: '16 GB microSDHC Class 10 Plus Schwarz',
    h_article_nr: 871079578388748,
    bestell_nr: 1244,
    ek_netto: 1.244,
    rabatt: 2.35,
    shop_vk: 3.19,
    ebay_vk: 3.19,
    amazon_vk: 3.19,
    kapazitat: 16,
    farbe: 'Schwarz',
    gewicht: 50,
    hersteller: 'Samsung',
    status: 'OK'
  }];
}
