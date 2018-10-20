import {Component, OnInit} from '@angular/core';
import {NavbarService} from '../../shared/navbar/navbar.service';
import {ExpensaService} from '../../providers/consorcio/expensa/expensa.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {AdminViewmodel} from './admin.viewmodel';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    public certifiedAdmin = false;

    constructor(protected navbarSrv: NavbarService,
                protected expensaSrv: ExpensaService,
                private _router: Router,
                private _location: Location) {
        this.navbarSrv.set(AdminViewmodel.menu);
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
