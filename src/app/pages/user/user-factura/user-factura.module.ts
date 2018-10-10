import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routedComponents, UserFacturaRoutingModule} from './user-factura-routing.module';
import {TitlebarModule} from '../../../shared/titlebar/titlebar.module';
import { UserFacturaDashboardComponent } from './user-factura-dashboard/user-factura-dashboard.component';
import {FacturaTableModule} from '../../../shared/factura/factura-table/factura-table.module';
import {MatCardModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        UserFacturaRoutingModule,
        FacturaTableModule,
        MatCardModule,
        TitlebarModule
    ],
    declarations: [...routedComponents, UserFacturaDashboardComponent]
})
export class UserFacturaModule {
}
