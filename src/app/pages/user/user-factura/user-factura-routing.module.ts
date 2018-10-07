import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../../auth-guard.service';
import {FacturaPagoComponent} from './factura-pago/factura-pago.component';
import {UserFacturaComponent} from './user-factura.component';
import {FacturaPagoResolverService} from './factura-pago/factura-pago-resolver.service';
const routes: Routes = [
    {
        path: '',
        component: UserFacturaComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: UserFacturaComponent
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
