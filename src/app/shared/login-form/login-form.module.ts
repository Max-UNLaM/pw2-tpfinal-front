import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginFormRoutingModule} from './login-form-routing.module';
import {LoginFormComponent} from './login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {LoginService} from '../../providers/consorcio/login/login.service';

@NgModule({
    imports: [
        CommonModule,
        LoginFormRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [LoginFormComponent],
    exports: [LoginFormComponent],
    providers: [LoginService]
})
export class LoginFormModule {
}
