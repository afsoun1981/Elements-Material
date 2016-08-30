import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ElErwinComponent } from "../el-erwin";
import { ElMenuComponent } from "../el-menu";

@Component({
  moduleId: module.id,
  selector: 'el-erwin-article',
  templateUrl: 'el-erwin-article.component.html',
  styleUrls: ['el-erwin-article.component.css'],
  directives: [
    ElErwinComponent,
    ElMenuComponent
  ]
})
export class ElErwinArticleComponent implements AfterViewInit {
	@ViewChild("erwin") erwin : ElErwinComponent;
  @ViewChild("menu1") menu1 : ElMenuComponent;	

  constructor() {}

  ngAfterViewInit() {
    window.setTimeout(() => this._setup(), 1);
  }

    private _setup() : void {
    this.menu1.title = "Artikel";

    this.menu1.items = [
      { iconpre: "reorder", title: "Stammdaten", iconpost: "chevron_right"},
      { iconpre: "shopping_basket", title: "Beschaffung", iconpost: "chevron_right"},
      { iconpre: "reorder", title: "VK-Preise", iconpost: "chevron_right"},
      { iconpre: "perm_media", title: "Medien", iconpost: "chevron_right"},
      { iconpre: "reorder", title: "Varianten", iconpost: "chevron_right"},
      { iconpre: "shopping_cart", title: "Multichannel", iconpost: "chevron_right"}
    ];
  }
}
