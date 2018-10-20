import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../../auth-guard.service';
import {AdminPagoComponent} from './admin-pago.component';
import {AdmPagoDashboardComponent} from './adm-pago-dashboard/adm-pago-dashboard.component';
const routes: Routes = [
    {
        path: '',
        component: AdminPagoComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: AdmPagoDashboardComponent
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
