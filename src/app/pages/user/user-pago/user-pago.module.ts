import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';
import {routedComponents, UserPagoRoutingModule} from './user-pago-routing.module';
import {FacturaTableModule} from '../../../shared/factura/factura-table/factura-table.module';

@NgModule({
    imports: [
        CommonModule,
        UserPagoRoutingModule,
        MatCardModule,
        FacturaTableModule
    ],
    declarations: [...routedComponents]
})
export class UserPagoModule {
}
