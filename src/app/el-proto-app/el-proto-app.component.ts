/// <reference path="../../typings.d.ts" />
import { Component, OnInit } from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { ElToolbarComponent } from '../el-toolbar';
import { ElErwinComponent } from '../el-erwin';
import { PolymerElement } from '@vaadin/angular2-polymer';

class Customer {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  moduleId: module.id,
  selector: 'el-proto-app',
  templateUrl: 'el-proto-app.component.html',
  styleUrls: ['el-proto-app.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon,
    ElToolbarComponent,
    ElErwinComponent,
    PolymerElement('vaadin-grid')
  ],
  providers: [MdIconRegistry, MdRadioDispatcher]
})
export class ElProtoAppComponent implements OnInit {
  title: String = 'elements-proto works!';

  ngOnInit() {
  }

  customers: Customer[] = [{
    firstName: 'Afsoun',
    lastName: 'Amiri',
    email: 'afsoun@gmail.com'
  }, {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@user.com'
  }];
}
