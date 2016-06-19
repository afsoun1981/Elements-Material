/// <reference path="../../typings.d.ts" />
import { Component } from '@angular/core'; 
import {MdToolbar} from '@angular2-material/toolbar';
import {ElBadgeButton} from './elBadgeButton';

@Component({
	moduleId: module.id,
	selector: 'el-toolbar',
	templateUrl: 'elToolbar.html',
	styleUrls: ['elToolbar.css'],
	directives: [
		MdToolbar,
		ElBadgeButton
	]
})
export class ElToolbar {
}