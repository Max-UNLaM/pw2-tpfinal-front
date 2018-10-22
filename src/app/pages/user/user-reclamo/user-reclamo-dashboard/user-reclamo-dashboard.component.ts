import {Component, OnInit} from '@angular/core';
import {UserReclamoDashboardViewmodel} from './user-reclamo-dashboard.viewmodel';

@Component({
    selector: 'app-user-reclamo-dashboard',
    templateUrl: './user-reclamo-dashboard.component.html',
    styleUrls: ['./user-reclamo-dashboard.component.scss']
})
export class UserReclamoDashboardComponent implements OnInit {

    menuItems = UserReclamoDashboardViewmodel.items;

    constructor() {
    }

    ngOnInit() {
    }

}
