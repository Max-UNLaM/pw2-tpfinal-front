import {Component, OnInit} from '@angular/core';
import {NavbarService} from '../../shared/navbar/navbar.service';
import {UserModel} from './user.model';
import {ExpensaService} from '../../providers/consorcio/expensa/expensa.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    public certifiedUser = false;
    protected userModel: UserModel = new UserModel();

    constructor(protected navbarSrv: NavbarService,
                protected expensaSrv: ExpensaService,
                private _router: Router,
                private _location: Location) {
        this.navbarSrv.set(this.userModel.menu);
        const userToken = window.localStorage.getItem('userToken');
        this.expensaSrv.accessCheck(userToken).subscribe(
            () => {
                this.certifiedUser = true;
            },
            (err) => {
                console.error(err);
                this._location.replaceState('/');
                window.localStorage.clear();
                this._router.navigate(['portal/login'], {
                    replaceUrl: true
                });
            }
        );
        this.expensaSrv.adminAccessCheck(userToken).subscribe(
            () => {
                this.navbarSrv.set(this.userModel.adminMenu);
            }
        );
    }

    ngOnInit() {
    }

}
