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
  @ViewChild("menu4") menu4 : ElMenuComponent;
  @ViewChild("menu5") menu5 : ElMenuComponent;

  constructor() {}

  ngAfterViewInit() {
    window.setTimeout(() => this._setup(), 1);
  }

  private _setup() : void {
    this.menu3.title = "amazon";
    this.menu4.title = "ebay";
    this.menu5.title = "Shopsystem";

    this.menu3.items = [
      { iconpre: null, title: "amazon.de", iconpost: "chevron_right"},
      { iconpre: null, title: "amazon.co.uk", iconpost: "chevron_right"}      
    ];

    this.menu4.items = [
      { iconpre: null, title: "ebay.de", iconpost: "chevron_right"},
      { iconpre: null, title: "ebay.fr", iconpost: "chevron_right"},
      { iconpre: null, title: "ebay.co.uk", iconpost: "chevron_right"}            
    ];

    this.menu5.items = [
      { iconpre: null, title: "www.meinshop.de", iconpost: "chevron_right"},
      { iconpre: null, title: "www.meinanderershop.de", iconpost: "chevron_right"}      
    ];
  }
}
