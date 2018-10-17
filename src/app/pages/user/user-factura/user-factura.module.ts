import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routedComponents, UserFacturaRoutingModule} from './user-factura-routing.module';
import {TitlebarModule} from '../../../shared/titlebar/titlebar.module';
import { UserFacturaDashboardComponent } from './user-factura-dashboard/user-factura-dashboard.component';
import {FacturaTableModule} from '../../../shared/factura/factura-table/factura-table.module';
import {MatCardModule} from '@angular/material';
import {FacturaCompletaModule} from '../../../shared/factura/factura-completa/factura-completa.module';

@NgModule({
    imports: [
        CommonModule,
        UserFacturaRoutingModule,
        FacturaTableModule,
        MatCardModule,
        TitlebarModule,
        FacturaCompletaModule
    ],
    declarations: [...routedComponents, UserFacturaDashboardComponent]
})
export class UserFacturaModule {
}
