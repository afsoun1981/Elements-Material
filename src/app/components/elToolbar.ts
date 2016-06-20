/// <reference path="../../typings.d.ts" />
import { Component } from '@angular/core'; 
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
	moduleId: module.id,
	selector: 'el-toolbar',
	templateUrl: 'elToolbar.html',
	styleUrls: ['elToolbar.css'],
	directives: [
		MdToolbar
	]
})
export class ElToolbar {
}
