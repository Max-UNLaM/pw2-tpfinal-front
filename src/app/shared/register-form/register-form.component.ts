import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from '../../providers/consorcio/usuario/usuario.service';
import {UserCreateError, UserNew} from '../../providers/consorcio/usuario/usuario.model';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

    usuarioMail: FormGroup;
    passwordForm: FormGroup;
    errores: UserCreateError;

    constructor(private _formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    }

    ngOnInit() {
        this.usuarioMail = this._formBuilder.group({
            nya: ['', Validators.required],
            email: ['', [Validators.email, Validators.required]]
        });
        this.passwordForm = this._formBuilder.group({
            password: ['', [Validators.minLength(6), Validators.required]],
            password_confirmation: ['', [Validators.minLength(6), Validators.required]]
        });
    }

    registrar() {
        this.usuarioService.create({
            name: this.usuarioMail.getRawValue().nya,
            email: this.usuarioMail.getRawValue().email,
            password: this.passwordForm.getRawValue().password,
            password_confirmation: this.passwordForm.getRawValue().password_confirmation
        }).subscribe(val => {
                console.log(val);
            },
            err => {
                this.errores = err.error.errors;
                console.log(err.error);
            });
    }
}
