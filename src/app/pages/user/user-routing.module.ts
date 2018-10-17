import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {AuthGuardService} from '../../auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: UserDashboardComponent
            },
            {
                path: 'dashboard',
                component: UserDashboardComponent
            },
            {
                path: 'reclamo',
                loadChildren: './user-reclamo/user-reclamo.module#UserReclamoModule'
            },
            {
                path: 'pago',
                loadChildren: './user-pago/user-pago.module#UserPagoModule'
            },
            {
                path: 'factura',
                loadChildren: './user-factura/user-factura.module#UserFacturaModule'
            },
            {
                path: 'gasto',
                loadChildren: './user-gasto/user-gasto.module#UserGastoModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}

export const routedComponents = [
    UserComponent,
    UserDashboardComponent
];

