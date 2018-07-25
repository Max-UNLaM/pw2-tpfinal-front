import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-admin-dashoard',
    templateUrl: './admin-dashoard.component.html',
    styleUrls: ['./admin-dashoard.component.scss']
})
export class AdminDashoardComponent implements OnInit {

    single: any[];
    multi: any[];

    view: any[] = [700, 400];

    // options
    showLegend = true;

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    // pie
    showLabels = true;
    explodeSlices = false;
    doughnut = false;


    constructor() {
    }

    onSelect(event) {
        console.log(event);
    }

    ngOnInit() {
    }

}
