import { Component, OnInit, ViewChild} from '@angular/core';
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
export class ElErwinChannelArticleinfoComponent implements OnInit {
	@ViewChild("erwin7") erwin7 : ElErwinComponent;

  constructor() {}

  ngOnInit() {
  }

}
