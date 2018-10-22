import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagoListComponent} from './pago-list.component';
import {MatDialogModule, MatListModule, MatPaginatorModule, MatSnackBarModule, MatTableModule} from '@angular/material';
import {LoaderShadeModule} from '../../ui/loader-shade/loader-shade.module';
import { PagoProcessComponent } from './pago-process/pago-process.component';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        LoaderShadeModule,
        MatListModule,
        MatDialogModule,
        MatSnackBarModule
    ],
    declarations: [PagoListComponent, PagoProcessComponent],
    exports: [PagoListComponent, PagoProcessComponent],
    entryComponents: [PagoProcessComponent]
})
export class PagoListModule {
}
