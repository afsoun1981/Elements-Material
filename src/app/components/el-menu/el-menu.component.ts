/// <reference path="../../../typings.d.ts" />
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { MdIcon } from '@angular2-material/icon';

export class MenuItem {
  icon: string;
  title: string;
  subtitle: string;
}

export class MenuClickEvent {
  item: MenuItem;
  event: Event;
}

@Component({
  moduleId: module.id,
  selector: 'el-menu',
  templateUrl: 'el-menu.component.html',
  styleUrls: ['el-menu.component.css'],
  directives: [ MdButton, MdIcon ]
})
export class ElMenuComponent implements OnInit {
  @Input() title: string;
  @Input() items : MenuItem[];

  @Output()
  private menuClick = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  menuClicked(item : MenuItem, event : Event) {
    var menuItemEvent : MenuClickEvent = { 
      item: item, 
      event: event 
    };
    this.menuClick.emit(menuItemEvent);
  }
}
