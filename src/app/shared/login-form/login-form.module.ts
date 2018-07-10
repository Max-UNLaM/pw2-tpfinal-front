import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginFormRoutingModule} from './login-form-routing.module';
import {LoginFormComponent} from './login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {LoginService} from '../../providers/consorcio/login/login.service';
import {LoginStorageService} from '../../providers/local/login/login-storage.service';

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
    providers: [LoginService, LoginStorageService]
})
export class LoginFormModule {
}
