import {Component, OnInit} from '@angular/core';
import {AdmPagoDashboardViewmodel} from './adm-pago-dashboard.viewmodel';

@Component({
    selector: 'app-adm-pago-dashboard',
    templateUrl: './adm-pago-dashboard.component.html',
    styleUrls: ['./adm-pago-dashboard.component.scss']
})
export class AdmPagoDashboardComponent implements OnInit {

    title = 'Dashboard';
    menuItems = AdmPagoDashboardViewmodel.items;

    constructor() {
    }

    ngOnInit() {
    }

}
