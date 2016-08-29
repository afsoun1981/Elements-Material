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
    this.menu1.title = "Bezeichnung";

    this.menu1.items = [
      { iconpre: "", title: "Artikel1", iconpost: "chevron_right"},
      { iconpre: "", title: "Artikel2", iconpost: "chevron_right"},
      { iconpre: "", title: "Artikel3", iconpost: "chevron_right"},
      { iconpre: "", title: "Artikel4", iconpost: "chevron_right"},
      { iconpre: "", title: "Artikel5", iconpost: "chevron_right"}
    ];
  }
}
