import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {ToolbarItem} from './navbar.interface';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(private _router: Router, private _location: Location) {
    }

    @Input('items') toolbarItems: ToolbarItem[];

    ngOnInit() {
    }

    redirect(address: string) {
        this._location.replaceState('/');
        this._router.navigate([address]);
    }
}
