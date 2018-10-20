import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../../auth-guard.service';
import {FacturaPagoComponent} from './factura-pago/factura-pago.component';
import {UserFacturaComponent} from './user-factura.component';
import {FacturaPagoResolverService} from './factura-pago/factura-pago-resolver.service';
import {UserFacturaDashboardComponent} from './user-factura-dashboard/user-factura-dashboard.component';
const routes: Routes = [
    {
        path: '',
        component: UserFacturaComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: UserFacturaDashboardComponent
            },
            {
                path: 'pago/:id',
                component: FacturaPagoComponent,
                resolve: {
                    factura: FacturaPagoResolverService
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserFacturaRoutingModule {
}

export const routedComponents = [
    UserFacturaComponent,
    FacturaPagoComponent
];
