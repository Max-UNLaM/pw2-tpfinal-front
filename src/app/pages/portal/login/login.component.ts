import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {LoginStorageService} from '../../../providers/local/login/login-storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private _router: Router, private _location: Location, private loginStorage: LoginStorageService) {
        if (this.loginStorage.getToken()) {
            this._router.navigate(['/user']);
        }
    }

    ngOnInit() {
    }

}
