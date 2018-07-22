import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routedComponents, UnidadRoutingModule} from './unidad-routing.module';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {UnidadTablaModule} from '../../../shared/unidad/unidad-tabla/unidad-tabla.module';
import {ConsorcioFiltroModule} from '../../../shared/consorcio/consorcio-filtro/consorcio-filtro.module';
import {ConsorcioFiltroComponent} from '../../../shared/consorcio/consorcio-filtro/consorcio-filtro.component';

@NgModule({
    imports: [
        CommonModule,
        UnidadRoutingModule,
        MatCardModule,
        MatButtonModule,
        UnidadTablaModule,
        ConsorcioFiltroModule
    ],
    declarations: [...routedComponents],
    entryComponents: [ConsorcioFiltroComponent]
})
export class UnidadModule {
}
