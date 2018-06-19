import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortalRoutingModule, routedComponents} from './portal-routing.module';
import {MatCardModule, MatMenuModule, MatStepperModule, MatToolbarModule} from '@angular/material';
import {LoginFormModule} from '../../shared/login-form/login-form.module';
import {RegisterFormModule} from '../../shared/register-form/register-form.module';

@NgModule({
    imports: [
        CommonModule,
        PortalRoutingModule,
        MatToolbarModule,
        MatMenuModule,
        MatCardModule,
        LoginFormModule,
        RegisterFormModule,
        MatStepperModule
    ],
    declarations: [
        ...routedComponents
    ],
    exports: [],
})
export class PortalModule {
}
