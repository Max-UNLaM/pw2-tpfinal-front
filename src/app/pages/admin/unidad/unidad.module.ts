import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routedComponents, UnidadRoutingModule} from './unidad-routing.module';
import {MatCardModule} from '@angular/material';
import {UnidadTablaModule} from '../../../shared/unidad/unidad-tabla/unidad-tabla.module';
import {ConsorcioFiltroModule} from '../../../shared/consorcio/consorcio-filtro/consorcio-filtro.module';

@NgModule({
    imports: [
        CommonModule,
        UnidadRoutingModule,
        MatCardModule,
        UnidadTablaModule,
        ConsorcioFiltroModule
    ],
    declarations: [...routedComponents]
})
export class UnidadModule {
}
