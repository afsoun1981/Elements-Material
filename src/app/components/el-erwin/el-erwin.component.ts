/// <reference path="../../../typings.d.ts" />
import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'el-erwin',
  templateUrl: 'el-erwin.component.html',
  styleUrls: ['el-erwin.component.css']
})
export class ElErwinComponent {
    @Input() caption : string;
}
