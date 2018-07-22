import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReclamoTableComponent} from './reclamo-table.component';
import {ReclamoService} from '../../../providers/consorcio/reclamo/reclamo.service';
import {MatPaginatorModule, MatTableModule} from '@angular/material';
import {LoaderShadeModule} from '../../ui/loader-shade/loader-shade.module';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        LoaderShadeModule,
        MatPaginatorModule
    ],
    declarations: [ReclamoTableComponent],
    exports: [ReclamoTableComponent],
    providers: [ReclamoService]
})
export class ReclamoTableModule {
}
