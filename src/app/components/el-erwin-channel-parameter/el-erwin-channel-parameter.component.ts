import { Component, OnInit, ViewChild } from '@angular/core';
import { ElErwinComponent } from "../el-erwin";
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  moduleId: module.id,
  selector: 'el-erwin-channel-parameter',
  templateUrl: 'el-erwin-channel-parameter.component.html',
  styleUrls: ['el-erwin-channel-parameter.component.css'],
   directives: [
  	ElErwinComponent,
    PolymerElement('paper-dropdown-menu')
  ]
})
export class ElErwinChannelParameterComponent implements OnInit {
	@ViewChild("erwin6") erwin6 : ElErwinComponent;

  constructor() {}

  ngOnInit() {
  }

}
