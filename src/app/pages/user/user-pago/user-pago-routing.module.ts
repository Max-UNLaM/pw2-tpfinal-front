import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../../auth-guard.service';
import {UserPagoComponent} from './user-pago.component';
import {UserPagoDashboardComponent} from './user-pago-dashboard/user-pago-dashboard.component';

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

