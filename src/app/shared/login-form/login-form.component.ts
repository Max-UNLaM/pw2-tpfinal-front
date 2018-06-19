import {Component, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private _router: Router, private _location: Location, protected formBuilder: FormBuilder) {
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
        alert('lele');
    }

    redirect(address: string) {
        this._location.replaceState('/');
        this._router.navigate([address]);
    }

    ngOnInit() {
    }

}
