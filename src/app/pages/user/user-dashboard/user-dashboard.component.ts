import {Component, OnInit} from '@angular/core';
import {MaterialColumns} from '../../../shared/model/columns.model';
import {MenuCard} from '../../../shared/menu-card/menu-card.model';
import {MainMenu} from './user-dashboard.viewmodel';

@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.component.html',
    styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

    menuItems: MenuCard[] = [];
    columnas: MaterialColumns;
    title = 'Dashboard';

    constructor() {
        const mainMenu = new MainMenu();
        this.menuItems = mainMenu.items;
    }

    ngOnInit() {
    }

}
