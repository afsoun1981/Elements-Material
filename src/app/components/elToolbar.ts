/// <reference path="../../typings.d.ts" />
import { Component, ViewChild } from '@angular/core'; 
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { ElBadgeButton, BadgePosition } from './elBadgeButton';

@Component({
	moduleId: module.id,
	selector: 'el-toolbar',
	templateUrl: 'elToolbar.html',
	styleUrls: ['elToolbar.css'],
	directives: [
		MdIcon,
		MdToolbar,
		ElBadgeButton
	],
	providers: [MdIconRegistry]
})
export class ElToolbar {
    @ViewChild('badgeButton1') badgeButton1 : ElBadgeButton;

    changeBadge() : void {
        this.badgeButton1.setBadgeValue(5);
        this.badgeButton1.setBadgePosition(BadgePosition.Bottom);
    }

    badgeButton1ElClicked() : void {
        this.badgeButton1.setBadgeValue(this.badgeButton1.getBadgeValue() + 1);
    }
}
