import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { ElErwinComponent } from "../el-erwin";
import { ElMenuComponent } from "../el-menu";
import { PolymerElement } from '@vaadin/angular2-polymer';


@Component({
  moduleId: module.id,
  selector: 'el-erwin-channel-articleinfo',
  templateUrl: 'el-erwin-channel-articleinfo.component.html',
  styleUrls: ['el-erwin-channel-articleinfo.component.css'],
  directives: [
  	ElErwinComponent,
    ElMenuComponent,
    PolymerElement('paper-dropdown-menu'),
    PolymerElement('paper-input')
  ]
})
export class ElErwinChannelArticleinfoComponent implements AfterViewInit {
	@ViewChild("erwin7") erwin7 : ElErwinComponent;
  @ViewChild("menu8") menu8 : ElMenuComponent;  

  constructor() {}

  ngAfterViewInit() {
        window.setTimeout(() => this._setup(), 1);
  }

  private _setup() : void {
    this.menu8.title = null;

    this.menu8.items = [
      { iconpre: null, title: "Beschreibung", iconpost: "chevron_right"},
      { iconpre: null, title: "Bilderzuordnung", iconpost: "chevron_right"},
    ];
  }
}
