import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../providers/consorcio/login/login.service';
import {OauthLoginSuccess} from '../../providers/consorcio/login/login.interface';
import {LoginStorageService} from '../../providers/local/login/login-storage.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    loginForm: FormGroup;
    accessError = false;
    accessErrorText: string;

    constructor(private _router: Router,
                private _location: Location,
                protected formBuilder: FormBuilder,
                protected loginSrv: LoginService,
                protected loginStorageSrv: LoginStorageService) {
        this.createForm();
    }

    createForm() {
        this.loginForm = this.formBuilder.group(
            {
                usuario: ['', [Validators.required]],
                password: ['', [Validators.required, Validators.minLength(8)]]
            }
        );
    }

    public setLogin() {
        this.accessError = !this.accessError;
        this.loginSrv.login({
            email: this.loginForm.get('usuario').value,
            password: this.loginForm.get('password').value
        })
            .subscribe(
                (token) => {
                    const logIn = token.body as OauthLoginSuccess;
                    window.localStorage.setItem('userToken', logIn.success.token);
                },
                error => {
                    this.accessError = true;
                    this.accessErrorText = error.statusText;
                },
                () => {
                    this.redirect('/user');
                }
            );
    }

    redirect(address: string) {
        this._location.replaceState('/');
        this._router.navigate([address]);
    }

    ngOnInit() {
    }

}
