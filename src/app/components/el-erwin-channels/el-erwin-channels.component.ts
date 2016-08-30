import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ElErwinComponent } from "../el-erwin";
import { ElMenuComponent } from "../el-menu";

@Component({
  moduleId: module.id,
  selector: 'el-erwin-channels',
  templateUrl: 'el-erwin-channels.component.html',
  styleUrls: ['el-erwin-channels.component.css'],
  directives: [
    ElErwinComponent,
    ElMenuComponent
  ]
})
export class ElErwinChannelsComponent implements AfterViewInit {
	@ViewChild("erwin3") erwin3 : ElErwinComponent;
  @ViewChild("menu3") menu3 : ElMenuComponent;

  constructor() {}

  ngAfterViewInit() {
    window.setTimeout(() => this._setup(), 1);
  }

  private _setup() : void {
    this.menu3.title = null;

    this.menu3.items = [
      { iconpre: null, title: "Artikel1", iconpost: "chevron_right"},
      { iconpre: null, title: "Artikel2", iconpost: "chevron_right"},
      { iconpre: null, title: "Artikel3", iconpost: "chevron_right"},
      { iconpre: null, title: "Artikel4", iconpost: "chevron_right"},
      { iconpre: null, title: "Artikel5", iconpost: "chevron_right"}
    ];
  }

}
