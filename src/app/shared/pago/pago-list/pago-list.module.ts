import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagoListComponent} from './pago-list.component';
import {MatPaginatorModule, MatTableModule} from '@angular/material';
import {LoaderShadeModule} from '../../ui/loader-shade/loader-shade.module';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        LoaderShadeModule
    ],
    declarations: [PagoListComponent],
    exports: [PagoListComponent]
})
export class PagoListModule {
}
