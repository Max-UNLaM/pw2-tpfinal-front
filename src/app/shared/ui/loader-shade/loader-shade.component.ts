import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-loader-shade',
    templateUrl: './loader-shade.component.html',
    styleUrls: ['./loader-shade.component.scss']
})
export class LoaderShadeComponent implements OnInit {

    @Input() isLoadingResults: boolean;
    @Input() errorMessage: string;

    constructor() {
    }

    ngOnInit() {
    }

}
