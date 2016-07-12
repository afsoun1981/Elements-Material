/// <reference path="../../../typings.d.ts" />
import { Component, Output, ViewChild, OnInit, EventEmitter } from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { ElMenuComponent, MenuItem, MenuClickEvent } from '../el-menu';

@Component({
  moduleId: module.id,
  selector: 'el-dropdown-button',
  templateUrl: 'el-dropdown-button.component.html',
  styleUrls: ['el-dropdown-button.component.css'],
  directives: [ MdButton, ElMenuComponent ]
})
export class ElDropdownButtonComponent implements OnInit {
  @ViewChild('dropDownMenu') dropDownMenu : ElMenuComponent;

  @Output()
  private menuClick = new EventEmitter();

  showMenu : boolean = false;

  constructor() {}

  ngOnInit() {
  }

  clicked() {
    this.showMenu = true;
  }

  blurred() {
    setTimeout(() => this.showMenu = false, 100);
  }

  menuClicked(menuClickEvent : MenuClickEvent) {
    this.menuClick.emit(menuClickEvent);
  }

  public setMenuTitle(title : string) {
      this.dropDownMenu.title = title;
  }

  public setMenuItems(items : MenuItem[]) {
      this.dropDownMenu.items = items;
  }
}
