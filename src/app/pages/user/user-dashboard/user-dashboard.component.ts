import {Component, OnInit} from '@angular/core';
import {MaterialColumns} from '../../../shared/model/columns.interface';

@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.component.html',
    styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

    columnas: MaterialColumns = {
        columnas: [
            {
                def: 'vencimiento',
                name: 'Vencimiento',
                property: 'vencimiento'
            },
            {
                def: 'adeuda',
                name: 'Debe',
                property: 'adeuda'
            },
            {
                def: 'total',
                name: 'Total',
                property: 'total'
            }
        ],
        cols: ['vencimiento', 'adeuda', 'total']
    };

    constructor() {
    }

    ngOnInit() {
    }

}
