import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FacturaFiltroComponent} from './factura-filtro.component';
import {MatPaginatorModule, MatTableModule} from '@angular/material';
import {LoaderShadeModule} from '../../ui/loader-shade/loader-shade.module';
import {FacturaService} from '../../../providers/consorcio/factura/factura.service';

@NgModule({
    imports: [
        CommonModule,
        LoaderShadeModule,
        MatTableModule,
        MatPaginatorModule
    ],
    declarations: [FacturaFiltroComponent],
    exports: [FacturaFiltroComponent],
    providers: [FacturaService]
})
export class FacturaFiltroModule {
}
