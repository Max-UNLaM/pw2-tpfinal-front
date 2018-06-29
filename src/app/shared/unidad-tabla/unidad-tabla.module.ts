import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnidadTablaComponent} from './unidad-tabla.component';
import {MatPaginatorModule, MatTableModule} from '@angular/material';
import {UnidadService} from '../../providers/consorcio/unidad/unidad.service';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule
    ],
    declarations: [UnidadTablaComponent],
    exports: [UnidadTablaComponent],
    providers: [UnidadService]
})
export class UnidadTablaModule {
}
