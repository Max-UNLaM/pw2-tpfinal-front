import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'app-user-reclamo-list',
    templateUrl: './user-reclamo-list.component.html',
    styleUrls: ['./user-reclamo-list.component.scss']
})
export class UserReclamoListComponent implements OnInit {

    constructor(private _location: Location) {
    }

    back() {
        this._location.back();
    }

    ngOnInit() {
    }

}
