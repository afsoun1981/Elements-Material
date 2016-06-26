/// <reference path="../../typings.d.ts" />
import { Component } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  moduleId: module.id,
  selector: 'el-test',
  templateUrl: 'elTest.html',
  styleUrls: ['elTest.css'],
  directives: [
      PolymerElement('paper-input')
  ]
})
export class ElTest {
}