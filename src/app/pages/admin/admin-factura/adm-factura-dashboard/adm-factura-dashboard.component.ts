import {Component, OnInit} from '@angular/core';
import {AdmFacturaDashboardViewmodel} from './adm-factura-dashboard.viewmodel';

@Component({
    selector: 'app-adm-factura-dashboard',
    templateUrl: './adm-factura-dashboard.component.html',
    styleUrls: ['./adm-factura-dashboard.component.scss']
})
export class AdmFacturaDashboardComponent implements OnInit {

    title: 'Facturación';
    menuItems = AdmFacturaDashboardViewmodel.items;

    constructor() {
    }

    ngOnInit() {
    }

}
