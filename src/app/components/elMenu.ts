/// <reference path="../../typings.d.ts" />
import { Component, Input } from '@angular/core'; 
import { MdButton } from '@angular2-material/button';

@Component({
	moduleId: module.id,
	selector: 'el-menu',
	templateUrl: 'elMenu.html',
	styleUrls: ['elMenu.css'],
	directives: [ MdButton ],
})
export class ElMenu {
	@Input() title: string;
	@Input() items : any[];
}
