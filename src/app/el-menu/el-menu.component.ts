import { Component, Input, OnInit } from '@angular/core';
import { MdButton } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'el-menu',
  templateUrl: 'el-menu.component.html',
  styleUrls: ['el-menu.component.css'],
  directives: [ MdButton ]
})
export class ElMenuComponent implements OnInit {
  @Input() title: string;
  @Input() items : any[];

  constructor() {}

  ngOnInit() {
  }

}
