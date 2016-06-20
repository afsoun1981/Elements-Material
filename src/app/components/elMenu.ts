/// <reference path="../../typings.d.ts" />
import { Component } from '@angular/core'; 

@Component({
	moduleId: module.id,
	selector: 'el-menu',
	templateUrl: 'elMenu.html',
	styleUrls: ['elMenu.css']
})

export class ElMenu {
	title: string;
  	subtitle: string;
	componentName: string = 'My beloveds';
	litems = [
	    { title: 'Mr.', subtitle: 'Reza'},
	    { title: 'Mr.', subtitle: 'Majid'},
	    { title: 'Mr.', subtitle: 'Arsalan'},
	    { title: 'Mr.', subtitle: 'Telim'},
	    { title: 'Mrs.', subtitle: 'Sercha'}
    ];
}
