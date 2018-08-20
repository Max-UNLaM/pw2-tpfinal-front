import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';
import {AdminGastoRoutingModule, routedComponents} from './admin-gasto-routing.module';
import {GastoTableModule} from '../../../shared/gasto/gasto-table/gasto-table.module';

@NgModule({
    imports: [
        CommonModule,
        AdminGastoRoutingModule,
        MatCardModule,
        GastoTableModule
    ],
    declarations: [...routedComponents]
})
export class AdminGastoModule {
}
