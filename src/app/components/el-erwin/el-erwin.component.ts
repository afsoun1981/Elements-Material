/// <reference path="../../../typings.d.ts" />
import { Component } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  moduleId: module.id,
  selector: 'el-erwin',
  templateUrl: 'el-erwin.component.html',
  styleUrls: ['el-erwin.component.css'],
  directives: [
      PolymerElement('paper-input')
  ]
})
export class ElErwinComponent {
}
