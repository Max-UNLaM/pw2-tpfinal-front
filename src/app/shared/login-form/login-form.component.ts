import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../providers/consorcio/login/login.service';
import {OauthLoginSuccess} from '../../providers/consorcio/login/login.interface';

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
                protected loginSrv: LoginService) {
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

    public setLogin(button) {
        this.waitForIt(button);
        this.accessError = !this.accessError;
        this.loginSrv.login({
            email: this.loginForm.get('usuario').value,
            password: this.loginForm.get('password').value
        })
            .subscribe(
                (token) => {
                    const logIn = token.body as OauthLoginSuccess;
                    window.localStorage.setItem('userToken', logIn.success.token);
                    this.redirect('user');
                },
                error => {
                    this.accessError = true;
                    this.accessErrorText = error.statusText;
                }
            );
    }

    ngOnInit() {
    }

    private redirect(address: string) {
        this._router.navigate(['/', address]).then(
            navegacion => {
                console.log(navegacion);
            }, error => {
                console.error(error);
            }
        );
    }

    private waitForIt(button) {
        button.disabled = true;
        setTimeout(() => button.disabled = false, 4000);
    }

}
