/// <reference path="../../../typings.d.ts" />
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdButton } from '@angular2-material/button';

export enum BadgePosition {
    Top,
    Bottom
}

@Component({
    moduleId: module.id,
    selector: 'el-badge-button',
    templateUrl: 'el-badge-button.component.html',
    styleUrls: ['el-badge-button.component.css'],
    directives: [MdButton]
})
export class ElBadgeButtonComponent implements OnInit {
    private BadgePositionRef = BadgePosition;

    @Input('badge-value') 
    private badgeValueAttr: String = '0';

    @Input('badge-position') 
    private BadgePositionAttr: String;

    @Output()
    private elClick = new EventEmitter();

    private badgeValue: number = 0;
    private badgePosition: BadgePosition = BadgePosition.Bottom;

    public ngOnInit() {
        var value : number = +this.badgeValueAttr;
        if (value != 0) {
            this.setBadgeValue(value);
        }

        if (this.BadgePositionAttr == 'top') {
            this.badgePosition = BadgePosition.Top;
        } else if (this.BadgePositionAttr == 'bottom') {
            this.badgePosition = BadgePosition.Bottom;
        } else {
            console.warn('ElBadgeButton: invalid value for badge-position!')
        }
    }

    private handleClick(event : Event) {
        this.elClick.emit(event);
    }

    public getBadgeValue() : number {
        return this.badgeValue;
    }

    public setBadgeValue(value: number): void {
        if (value > 99) {
            console.warn('ElBadgeButton: 3 digit values are not supported!');
            return;
        }
        this.badgeValue = value;
    }

    public getBadgePosition(): BadgePosition {
        return this.badgePosition;
    }

    public setBadgePosition(position : BadgePosition) {
        this.badgePosition = position;
    }
}
