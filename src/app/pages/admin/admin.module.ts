import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule, routedComponents} from './admin-routing.module';
import {MatCardModule} from '@angular/material';
import {ConsorcioTablaModule} from '../../shared/consorcio/consorcio-tabla/consorcio-tabla.module';
import {ExpensaTableModule} from '../../shared/expensa/expensa-table/expensa-table.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ReclamoTableModule} from '../../shared/reclamo/reclamo-table/reclamo-table.module';
import {ConsorcioAutocompleteModule} from '../../shared/consorcio/consorcio-select/consorcio-autocomplete.module';
import {EstadisticasService} from '../../providers/consorcio/estadisticas/estadisticas.service';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatCardModule,
        ConsorcioTablaModule,
        ExpensaTableModule,
        NgxChartsModule,
        ReclamoTableModule,
        ConsorcioAutocompleteModule
    ],
    declarations: [...routedComponents],
    providers: [EstadisticasService]
})
export class AdminModule {
}
