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
          { iconpre: null, title: 'Sofortauftrag', iconpost: "Ctrl+S"},
          { iconpre: "note", title: 'Auftragsbestätigung', iconpost: null},
          { iconpre: "note", title: 'Lieferschein', iconpost: null},
          { iconpre: "note", title: 'Rücklieferschein', iconpost: null},
          { iconpre: "note", title: 'Rechnung', iconpost: null},
          { iconpre: "note", title: 'Sofortrechnung', iconpost: null},
          { iconpre: "note", title: 'Direktrechnung', iconpost: null},
          { iconpre: "note", title: 'Gutschrift', iconpost: null},
          { iconpre: "note", title: 'Stornorechnung', iconpost: null},
          { iconpre: "note", title: 'Sofortstornorechnung', iconpost: null},
          { iconpre: "note", title: 'Nachlieferung', iconpost: null},
          { iconpre: "note", title: 'Angebot', iconpost: null}
        ]);

        this.dropDownBtn2.setMenuItems([
          { iconpre: null, title: 'Sofortauftrag', iconpost: "Ctrl+S"},
          { iconpre: "note", title: 'Auftragsbestätigung', iconpost: null},
          { iconpre: "note", title: 'Lieferschein', iconpost: null},
          { iconpre: "note", title: 'Rücklieferschein', iconpost: null},
          { iconpre: "note", title: 'Rechnung', iconpost: null},
          { iconpre: "note", title: 'Sofortrechnung', iconpost: null},
          { iconpre: "note", title: 'Direktrechnung', iconpost: null},
          { iconpre: "note", title: 'Gutschrift', iconpost: null},
          { iconpre: "note", title: 'Stornorechnung', iconpost: null},
          { iconpre: "note", title: 'Sofortstornorechnung', iconpost: null},
          { iconpre: "note", title: 'Nachlieferung', iconpost: null},
          { iconpre: "note", title: 'Angebot', iconpost: null}
        ]);
    }
}
