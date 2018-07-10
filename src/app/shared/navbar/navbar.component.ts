import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {NavbarService} from './navbar.service';
import {ToolbarItem} from './navbar.interface';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    toolbarItems: ToolbarItem[];

    constructor(private _router: Router, private _location: Location, protected navbarSrv: NavbarService) {
        navbarSrv.toolBar$.subscribe(
            items => this.toolbarItems = items
        );
        console.log(this.toolbarItems);
    }


    ngOnInit() {
    }

}
