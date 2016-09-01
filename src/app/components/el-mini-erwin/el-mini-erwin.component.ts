import { Component, Input, OnInit } from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { MdIcon } from '@angular2-material/icon';

export class MiniErwinIcon {
  icon: string;
}

@Component({
  moduleId: module.id,
  selector: 'el-mini-erwin',
  templateUrl: 'el-mini-erwin.component.html',
  styleUrls: ['el-mini-erwin.component.css'],
  directives: [ MdButton, MdIcon ]
})
export class ElMiniErwinComponent implements OnInit {
  @Input() title: string;
  @Input() icons : MiniErwinIcon[];

  constructor() {}

  ngOnInit() {
  	this.title = "Artikel";
		this.icons = [
		  { icon: "reorder"},
		  { icon: "shopping_basket"},
		  { icon: "reorder"},
		  { icon: "perm_media"},
		  { icon: "reorder"},
		  { icon: "shopping_cart"}
		];
  }
}
