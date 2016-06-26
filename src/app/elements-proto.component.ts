/// <reference path="../typings.d.ts" />
import { Component } from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { ElToolbarComponent } from './el-toolbar';
import {ElTest} from './components/elTest';
import { PolymerElement } from '@vaadin/angular2-polymer';

class Customer {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  moduleId: module.id,
  selector: 'elements-proto-app',
  templateUrl: 'elements-proto.component.html',
  styleUrls: ['elements-proto.component.css'],
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
    ElTest,
    PolymerElement('vaadin-grid')
  ],
  providers: [MdIconRegistry, MdRadioDispatcher]
})
export class ElementsProtoAppComponent {
  title: String = 'elements-proto works!';

  customers: Customer[] = [{
    firstName: 'Afsoun',
    lastName: 'Amiri',
    email: 'afsoun@gmail.com'
  }, {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@user.com'
  }]
}
