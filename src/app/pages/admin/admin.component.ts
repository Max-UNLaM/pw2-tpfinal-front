import {Component, OnInit} from '@angular/core';
import {UserViewModel} from '../user/userViewModel';
import {NavbarService} from '../../shared/navbar/navbar.service';
import {ExpensaService} from '../../providers/consorcio/expensa/expensa.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    public certifiedAdmin = false;
    protected userModel: UserViewModel = new UserViewModel();

    constructor(protected navbarSrv: NavbarService,
                protected expensaSrv: ExpensaService,
                private _router: Router,
                private _location: Location) {
        this.navbarSrv.set(this.userModel.adminMenuAdmin);
        console.error('entre a admin');
    }

    ngOnInit() {
        const userToken = window.localStorage.getItem('userToken');
        this.expensaSrv.adminAccessCheck(userToken).subscribe(
            () => {
                this.certifiedAdmin = true;
            },
            () => {
                this._location.replaceState('/');
                this._router.navigate(['/'], {
                    replaceUrl: true
                });
            }
        );
    }

}
