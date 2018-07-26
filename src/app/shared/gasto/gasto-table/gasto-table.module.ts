import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GastoTableComponent} from './gasto-table.component';
import {LoaderShadeModule} from '../../ui/loader-shade/loader-shade.module';
import {MatPaginatorModule, MatTableModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        LoaderShadeModule,
        MatTableModule,
        MatPaginatorModule
    ],
    declarations: [GastoTableComponent],
    exports: [GastoTableComponent]
})
export class GastoTableModule {
}
