import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ElErwinComponent } from "../el-erwin";
import { ElMenuComponent } from "../el-menu";
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  moduleId: module.id,
  selector: 'el-erwin-channel-article',
  templateUrl: 'el-erwin-channel-article.component.html',
  styleUrls: ['el-erwin-channel-article.component.css'],
  directives: [
  	ElErwinComponent,
    ElMenuComponent,
    PolymerElement('paper-dropdown-menu')
  ]
})
export class ElErwinChannelArticleComponent implements AfterViewInit {
	@ViewChild("erwin5") erwin5 : ElErwinComponent;
  @ViewChild("menu7") menu7 : ElMenuComponent;	

  constructor() {}

  ngAfterViewInit() {
    window.setTimeout(() => this._setup(), 1);
  }

    private _setup() : void {
    this.menu7.title = null;

    this.menu7.items = [
      { iconpre: null, title: "eBay Parameter", iconpost: "chevron_right"},
      { iconpre: null, title: "Artikeldaten", iconpost: "chevron_right"},
      { iconpre: null, title: "Artikeleinstellungen", iconpost: "chevron_right"},
      { iconpre: null, title: "eBay Artikelmerkmale", iconpost: "chevron_right"},
      { iconpre: null, title: "Varianten", iconpost: "chevron_right"},
    ];
  }
}
