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
import {ReactiveFormsModule} from '@angular/forms';

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
    declarations: [UnidadTablaComponent],
    exports: [UnidadTablaComponent]
})
export class UnidadTablaModule {
}
