import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(private _router: Router, private _location: Location) {
    }

    ngOnInit() {
    }

    redirect(address: string) {
        this._location.replaceState('/');
        this._router.navigate([address]);
    }
}
