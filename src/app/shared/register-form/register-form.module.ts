import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterFormComponent} from './register-form.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatStepperModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginFormRoutingModule} from '../login-form/login-form-routing.module';
import {UsuarioService} from '../../providers/consorcio/usuario/usuario.service';

@NgModule({
    imports: [
        CommonModule,
        LoginFormRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
        MatButtonModule
    ],
    declarations: [RegisterFormComponent],
    exports: [RegisterFormComponent],
    providers: [UsuarioService]
})
export class RegisterFormModule {
}
