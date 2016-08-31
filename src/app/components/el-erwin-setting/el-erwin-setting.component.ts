import { Component, OnInit } from '@angular/core';
import { ElErwinComponent } from "../el-erwin";
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  moduleId: module.id,
  selector: 'el-erwin-setting',
  templateUrl: 'el-erwin-setting.component.html',
  styleUrls: ['el-erwin-setting.component.css'],
  directives: [
  	ElErwinComponent,
    PolymerElement('paper-input'),
  ]
})
export class ElErwinSettingComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
