import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FacturaTableComponent} from './factura-table.component';
import {LoaderShadeModule} from '../../ui/loader-shade/loader-shade.module';
import {MatButtonModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {FacturaService} from '../../../providers/consorcio/factura/factura.service';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        LoaderShadeModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        RouterModule
    ],
    declarations: [FacturaTableComponent],
    exports: [FacturaTableComponent],
    providers: [FacturaService]
})
export class FacturaTableModule {
}
