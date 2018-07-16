import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule, routedComponents} from './admin-routing.module';
import {MatCardModule} from '@angular/material';
import {ConsorcioTablaModule} from '../../shared/consorcio/consorcio-tabla/consorcio-tabla.module';
import {ExpensaTableModule} from '../../shared/expensa/expensa-table/expensa-table.module';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatCardModule,
        ConsorcioTablaModule,
        ExpensaTableModule
    ],
    declarations: [...routedComponents],
})
export class AdminModule {
}
