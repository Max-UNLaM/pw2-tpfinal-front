import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {LoginFormComponent} from '../../shared/login-form/login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [
        LoginComponent,
        LoginFormComponent
    ],
    exports: [
        LoginComponent,
        LoginFormComponent
    ]
})
export class LoginModule {
}
