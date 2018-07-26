import {Component, OnInit} from '@angular/core';
import {NavbarService} from '../../shared/navbar/navbar.service';
import {UserModel} from './user.model';
import {ExpensaService} from '../../providers/consorcio/expensa/expensa.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    public certifiedUser = false;
    protected userModel: UserModel = new UserModel();

    constructor(protected navbarSrv: NavbarService,
                protected expensaSrv: ExpensaService) {
        console.error('entre a user');
        this.navbarSrv.set(this.userModel.menu);
        const userToken = window.localStorage.getItem('userToken');
        this.certifiedUser = !!userToken;
        this.expensaSrv.adminAccessCheck(userToken).subscribe(
            () => {
                this.navbarSrv.set(this.userModel.adminMenu);
            }
        );
    }

    ngOnInit() {
    }

}
