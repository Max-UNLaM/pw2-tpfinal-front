import {Component, OnInit} from '@angular/core';
import {UserModel} from '../user/user.model';
import {NavbarService} from '../../shared/navbar/navbar.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


    protected userModel: UserModel = new UserModel();

    constructor(protected navbarSrv: NavbarService) {
        this.navbarSrv.set(this.userModel.adminMenuAdmin);
    }

    ngOnInit() {
    }

}
