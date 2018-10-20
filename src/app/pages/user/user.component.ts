import {Component, OnInit} from '@angular/core';
import {NavbarService} from '../../shared/navbar/navbar.service';
import {UserViewModel} from './userViewModel';
import {ExpensaService} from '../../providers/consorcio/expensa/expensa.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    public certifiedUser = false;
    protected userModel: UserViewModel = new UserViewModel();

    constructor(protected navbarSrv: NavbarService,
                protected expensaSrv: ExpensaService,
                private _router: Router) {
        this.navbarSrv.set(this.userModel.menu);
        const userToken = window.localStorage.getItem('userToken');
        this.certifiedUser = !!userToken;
        this.expensaSrv.accessCheck(userToken).subscribe(
            () => this.certifiedUser = true,
            () => {
                this.certifiedUser = false;
                this.logout();
            }
        );
        this.expensaSrv.adminAccessCheck(userToken).subscribe(
            () => {
                this.navbarSrv.set(this.userModel.adminMenu);
            }
        );
    }

    logout(): void {
        this.navbarSrv.set(this.userModel.empty);
        window.localStorage.clear();
        this._router.navigate(['/', 'portal']).then(
            navegacion => {
                console.log(navegacion);
            }, error => {
                console.error(error);
            }
        );
    }

    ngOnInit() {
    }

}
