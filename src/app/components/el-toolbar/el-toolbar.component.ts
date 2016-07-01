/// <reference path="../../../typings.d.ts" />
import { Component, ViewChild } from '@angular/core'; 
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { ElBadgeButtonComponent, BadgePosition } from '../el-badge-button';
import { ElDropdownButtonComponent } from '../el-dropdown-button';

@Component({
    moduleId: module.id,
    selector: 'el-toolbar',
    templateUrl: 'el-toolbar.component.html',
    styleUrls: ['el-toolbar.component.css'],
    directives: [
        MdIcon,
        MdToolbar,
        ElBadgeButtonComponent,
        ElDropdownButtonComponent
    ],
    providers: [MdIconRegistry]
})
export class ElToolbarComponent {
    @ViewChild('badgeButton1') badgeButton1 : ElBadgeButtonComponent;

    changeBadge() : void {
        this.badgeButton1.setBadgeValue(5);
        this.badgeButton1.setBadgePosition(BadgePosition.Bottom);
    }

    badgeButton1ElClicked() : void {
        this.badgeButton1.setBadgeValue(this.badgeButton1.getBadgeValue() + 1);
    }
}
