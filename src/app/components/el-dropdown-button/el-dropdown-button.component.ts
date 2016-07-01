/// <reference path="../../../typings.d.ts" />
import { Component, OnInit } from '@angular/core';
import {MdButton} from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'el-dropdown-button',
  templateUrl: 'el-dropdown-button.component.html',
  styleUrls: ['el-dropdown-button.component.css'],
  directives: [ MdButton ]
})
export class ElDropdownButtonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  	
  }
}
