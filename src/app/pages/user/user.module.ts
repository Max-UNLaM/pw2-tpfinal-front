import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routedComponents, UserRoutingModule} from './user-routing.module';
import {ExpensaTableModule} from '../../shared/expensa/expensa-table/expensa-table.module';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {LoaderShadeModule} from '../../shared/ui/loader-shade/loader-shade.module';
import {ReclamoTableModule} from '../../shared/reclamo/reclamo-table/reclamo-table.module';
import {FacturaFiltroModule} from '../../shared/factura/factura-filtro/factura-filtro.module';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        ExpensaTableModule,
        MatCardModule,
        MatButtonModule,
        LoaderShadeModule,
        ReclamoTableModule,
        FacturaFiltroModule
    ],
    declarations: [...routedComponents],
    exports: [...routedComponents]
})
export class UserModule {
}
