import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule, routedComponents} from './admin-routing.module';
import {MatCardModule, MatSnackBarModule} from '@angular/material';
import {ConsorcioTablaModule} from '../../shared/consorcio/consorcio-tabla/consorcio-tabla.module';
import {ExpensaTableModule} from '../../shared/expensa/expensa-table/expensa-table.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ReclamoTableModule} from '../../shared/reclamo/reclamo-table/reclamo-table.module';
import {ConsorcioSelectModule} from '../../shared/consorcio/consorcio-select/consorcio-select.module';
import {EstadisticasService} from '../../providers/consorcio/estadisticas/estadisticas.service';
import {FacturaService} from '../../providers/consorcio/factura/factura.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TitlebarModule} from '../../shared/titlebar/titlebar.module';
import {MenuCardModule} from '../../shared/menu-card/menu-card.module';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatCardModule,
        ConsorcioTablaModule,
        ExpensaTableModule,
        NgxChartsModule,
        ReclamoTableModule,
        ConsorcioSelectModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
        TitlebarModule,
        MenuCardModule
    ],
    declarations: [...routedComponents],
    providers: [EstadisticasService, FacturaService]
})
export class AdminModule {
}
