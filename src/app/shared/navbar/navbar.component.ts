import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavbarService} from './navbar.service';
import {ToolbarItem} from './navbar.interface';
import {AuthService} from '../../auth.service';
import {LoginStorageService} from '../../providers/local/login/login-storage.service';
import {UserModel} from '../../pages/user/user.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterContentInit {

    toolbarItems: ToolbarItem[];
    userModel: UserModel = new UserModel();
    protected loggedIn: boolean;

    constructor(private _router: Router,
                protected loginStorage: LoginStorageService,
                protected navbarSrv: NavbarService,
                protected authSrv: AuthService) {
        this.navbarSrv.toolBar$.subscribe(
            items => this.toolbarItems = items
        );
        this.loggedIn = this.authSrv.isLoggedIn;
    }

    logout(): void {
        this.navbarSrv.set(this.userModel.empty);
        this.loginStorage.deleteToken();
        this._router.navigate(['/portal/login']);
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
    }

}
