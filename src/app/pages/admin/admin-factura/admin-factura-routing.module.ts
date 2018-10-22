import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../../auth-guard.service';
import {AdmFacturaGenerarComponent} from './adm-factura-generar/adm-factura-generar.component';
import {AdminFacturaComponent} from './admin-factura.component';
import {AdmFacturaDashboardComponent} from './adm-factura-dashboard/adm-factura-dashboard.component';
import {AdmFacturaListComponent} from './adm-factura-list/adm-factura-list.component';
const routes: Routes = [
    {
        path: '',
        component: AdminFacturaComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: AdmFacturaDashboardComponent
            },
            {
                path: 'generar',
                component: AdmFacturaGenerarComponent
            },
            {
                path: 'list',
                component: AdmFacturaListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminFacturaRoutingModule {
}
