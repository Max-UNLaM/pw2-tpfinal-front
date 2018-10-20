import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';
import {routedComponents, UserPagoRoutingModule} from './user-pago-routing.module';
import {FacturaTableModule} from '../../../shared/factura/factura-table/factura-table.module';
import { UserPagoFormComponent } from './user-pago-form/user-pago-form.component';
import {PagoFormModule} from '../../../shared/pago/pago-form/pago-form.module';

@NgModule({
    imports: [
        CommonModule,
        UserPagoRoutingModule,
        MatCardModule,
        FacturaTableModule,
        PagoFormModule
    ],
    declarations: [...routedComponents, UserPagoFormComponent]
})
export class UserPagoModule {
}
