import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnidadTablaComponent} from './unidad-tabla.component';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule
} from '@angular/material';
import {UnidadService} from '../../../providers/consorcio/unidad/unidad.service';
import {ReactiveFormsModule} from '@angular/forms';
import {UnidadFormComponent} from '../unidad-form/unidad-form.component';

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
    declarations: [UnidadTablaComponent, UnidadFormComponent],
    exports: [UnidadTablaComponent],
    providers: [UnidadService],
    entryComponents: [UnidadFormComponent]
})
export class UnidadTablaModule {
}
