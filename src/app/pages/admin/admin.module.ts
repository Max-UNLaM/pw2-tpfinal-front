import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule, routedComponents} from './admin-routing.module';
import {MatCardModule} from '@angular/material';
import {ConsorcioTablaModule} from '../../shared/consorcio/consorcio-tabla/consorcio-tabla.module';
import {ExpensaTableModule} from '../../shared/expensa/expensa-table/expensa-table.module';
import { AdminDashoardComponent } from './admin-dashoard/admin-dashoard.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ReclamoTableModule} from '../../shared/reclamo/reclamo-table/reclamo-table.module';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatCardModule,
        ConsorcioTablaModule,
        ExpensaTableModule,
        NgxChartsModule,
        ReclamoTableModule
    ],
    declarations: [...routedComponents],
})
export class AdminModule {
}
