import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConsorcioFiltroComponent} from './consorcio-filtro.component';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {ConsorcioService} from '../../../providers/consorcio/consorcio/consorcio.service';
import {UnidadFormComponent} from '../../unidad/unidad-form/unidad-form.component';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule
    ],
    declarations: [ConsorcioFiltroComponent, UnidadFormComponent],
    exports: [ConsorcioFiltroComponent],
    providers: [ConsorcioService],
    entryComponents: [UnidadFormComponent]
})
export class ConsorcioFiltroModule {
}
