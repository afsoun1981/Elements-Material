/// <reference path="../../../typings.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core'; 
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { ElBadgeButtonComponent, BadgePosition } from '../el-badge-button';
import { ElDropdownButtonComponent } from '../el-dropdown-button';
import { MenuClickEvent } from '../el-menu';

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
export class ElToolbarComponent implements AfterViewInit {
    @ViewChild('badgeButton1') badgeButton1 : ElBadgeButtonComponent;
    @ViewChild('dropDownBtn1') dropDownBtn1 : ElDropdownButtonComponent;
    @ViewChild('dropDownBtn2') dropDownBtn2 : ElDropdownButtonComponent;

    changeBadge() : void {
        this.badgeButton1.setBadgeValue(5);
        this.badgeButton1.setBadgePosition(BadgePosition.Bottom);
    }

    badgeButton1ElClicked() : void {
        this.badgeButton1.setBadgeValue(this.badgeButton1.getBadgeValue() + 1);
    }

    dropDownBtn1MenuClicked(event : MenuClickEvent) {
      console.log('Menu ' + event.item.title + ' of DropDownButton1 clicked');
    }

    dropDownBtn2MenuClicked(event : MenuClickEvent) {
      console.log('Menu ' + event.item.title + ' of DropDownButton2 clicked');
    }

    public ngAfterViewInit() {
        window.setTimeout(() => this._setup(), 1);
    }

    private _setup() : void {
        this.dropDownBtn1.setMenuTitle("ElMenu");

        this.dropDownBtn1.setMenuItems([
          { icon: null, title: 'Sofortauftrag', subtitle: "Ctrl+S"},
          { icon: "note", title: 'Auftragsbestätigung', subtitle: null},
          { icon: "note", title: 'Lieferschein', subtitle: null},
          { icon: "note", title: 'Rücklieferschein', subtitle: null},
          { icon: "note", title: 'Rechnung', subtitle: null},
          { icon: "note", title: 'Sofortrechnung', subtitle: null},
          { icon: "note", title: 'Direktrechnung', subtitle: null},
          { icon: "note", title: 'Gutschrift', subtitle: null},
          { icon: "note", title: 'Stornorechnung', subtitle: null},
          { icon: "note", title: 'Sofortstornorechnung', subtitle: null},
          { icon: "note", title: 'Nachlieferung', subtitle: null},
          { icon: "note", title: 'Angebot', subtitle: null}
        ]);

        this.dropDownBtn2.setMenuItems([
          { icon: null, title: 'Sofortauftrag', subtitle: "Ctrl+S"},
          { icon: "note", title: 'Auftragsbestätigung', subtitle: null},
          { icon: "note", title: 'Lieferschein', subtitle: null},
          { icon: "note", title: 'Rücklieferschein', subtitle: null},
          { icon: "note", title: 'Rechnung', subtitle: null},
          { icon: "note", title: 'Sofortrechnung', subtitle: null},
          { icon: "note", title: 'Direktrechnung', subtitle: null},
          { icon: "note", title: 'Gutschrift', subtitle: null},
          { icon: "note", title: 'Stornorechnung', subtitle: null},
          { icon: "note", title: 'Sofortstornorechnung', subtitle: null},
          { icon: "note", title: 'Nachlieferung', subtitle: null},
          { icon: "note", title: 'Angebot', subtitle: null}
        ]);
    }
}
