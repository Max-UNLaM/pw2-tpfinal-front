import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AuthGuardService} from '../../auth-guard.service';
import {ConsorcioComponent} from './consorcio/consorcio.component';
import {ExpensaComponent} from './expensa/expensa.component';
import {AdminDashboardComponent} from './admin-dashoard/admin-dashboard.component';
import {ReclamoComponent} from './reclamo/reclamo.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: AdminDashboardComponent
            },
            {
                path: 'unidad',
                loadChildren: './unidad/unidad.module#UnidadModule',
                data: {
                    preload: true
                }
            },
            {
                path: 'estadisticas',
                loadChildren: './admin-statistics/admin-statistics.module#AdminStatisticsModule',
                data: {
                    preload: true
                }
            },
            {
                path: 'gasto',
                loadChildren: './admin-gasto/admin-gasto.module#AdminGastoModule'
            },
            {
                path: 'pago',
                loadChildren: './admin-pago/admin-pago.module#AdminPagoModule',
            },
            {
                path: 'factura',
                loadChildren: './admin-factura/admin-factura.module#AdminFacturaModule',
            },
            {
                path: 'consorcio',
                component: ConsorcioComponent
            },
            {
                path: 'expensa',
                component: ExpensaComponent
            },
            {
                path: 'reclamo',
                component: ReclamoComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}

export const routedComponents = [
    AdminComponent,
    ConsorcioComponent,
    ExpensaComponent,
    AdminDashboardComponent,
    ReclamoComponent
];

