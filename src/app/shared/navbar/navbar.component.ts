import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {NavbarService} from './navbar.service';
import {ToolbarItem} from './navbar.interface';
import {AuthService} from '../../auth.service';
import {LoginStorageService} from '../../providers/local/login/login-storage.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterContentInit {

    toolbarItems: ToolbarItem[];
    protected loggedIn: boolean;

    constructor(private _router: Router, private _location: Location,
                protected loginStorage: LoginStorageService,
                protected navbarSrv: NavbarService,
                protected authSrv: AuthService) {
        this.navbarSrv.toolBar$.subscribe(
            items => this.toolbarItems = items
        );
        this.loggedIn = this.authSrv.isLoggedIn;
    }

    logout() {
        this.loginStorage.deleteToken();
        this._router.navigate(['/user']);
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
    }

}
