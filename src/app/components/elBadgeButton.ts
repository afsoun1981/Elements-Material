/// <reference path="../../typings.d.ts" />
import { Component } from '@angular/core';
import {MdButton} from '@angular2-material/button';

@Component({
	moduleId: module.id,
	selector: 'el-badge-button',
	templateUrl: 'elBadgeButton.html',
	styleUrls: ['elBadgeButton.css'],
	directives: [MdButton]
})
export class ElBadgeButton {
	badgeValue: number = 0;

	private setBadgeValue(value : number) : void {
		this.badgeValue = value;
	}

	getBadgeValue() : number {
		return this.badgeValue;
	}

	buttonClicked() : void {
		this.setBadgeValue(this.getBadgeValue() + 1);
	}
}