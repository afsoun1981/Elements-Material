import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { ElErwinComponent } from "../el-erwin";
import { ElMenuComponent } from "../el-menu";

@Component({
  moduleId: module.id,
  selector: "el-erwin-searchresult",
  templateUrl: "el-erwin-searchresult.component.html",
  styleUrls: ["el-erwin-searchresult.component.css"],
  directives: [
    ElErwinComponent,
    ElMenuComponent
  ]
})
export class ElErwinSearchresultComponent implements AfterViewInit {
  @ViewChild("erwin") erwin : ElErwinComponent;
  @ViewChild("menu1") menu1 : ElMenuComponent;

  constructor() { }

  ngAfterViewInit() {
    window.setTimeout(() => this._setup(), 1);
  }

  private _setup() : void {
    this.menu1.title = "Articles";

    this.menu1.items = [
      { icon: "note", title: "Artikel1", subtitle: null},
      { icon: "note", title: "Artikel2", subtitle: null},
      { icon: "note", title: "Artikel3", subtitle: null},
      { icon: "note", title: "Artikel4", subtitle: null},
      { icon: "note", title: "Artikel5", subtitle: null}
    ];
  }
}
