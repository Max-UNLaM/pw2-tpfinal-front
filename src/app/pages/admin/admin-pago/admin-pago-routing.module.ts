import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../../auth-guard.service';
import {AdminPagoComponent} from './admin-pago.component';
import {AdmPagoDashboardComponent} from './adm-pago-dashboard/adm-pago-dashboard.component';
import {AdmPagoListComponent} from './adm-pago-list/adm-pago-list.component';
import {AdmPagoPendienteComponent} from './adm-pago-pendiente/adm-pago-pendiente.component';
const routes: Routes = [
    {
        path: '',
        component: AdminPagoComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: AdmPagoDashboardComponent
            },
            {
                path: 'listar',
                component: AdmPagoListComponent
            },
            {
                path: 'pendientes',
                component: AdmPagoPendienteComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminPagoRoutingModule {
}
