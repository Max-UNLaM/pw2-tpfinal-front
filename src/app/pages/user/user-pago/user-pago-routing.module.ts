import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../../auth-guard.service';
import {UserPagoComponent} from './user-pago.component';
import {UserPagoDashboardComponent} from './user-pago-dashboard/user-pago-dashboard.component';
import {UserPagoFormComponent} from './user-pago-form/user-pago-form.component';
import {Factura} from '../../../providers/consorcio/factura/factura.model';

const routes: Routes = [
    {
        path: '',
        component: UserPagoComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: UserPagoDashboardComponent
            },
            {
                path: 'dashboard',
                component: UserPagoDashboardComponent
            },
            {
                path: 'emitir/:id',
                component: UserPagoFormComponent,

            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserPagoRoutingModule {
}

export const routedComponents = [
    UserPagoComponent,
    UserPagoDashboardComponent
];

