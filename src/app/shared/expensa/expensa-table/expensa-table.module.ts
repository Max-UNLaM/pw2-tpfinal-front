import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpensaTableComponent} from './expensa-table.component';
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
import {LoaderShadeModule} from '../../ui/loader-shade/loader-shade.module';

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
        MatPaginatorModule,
        LoaderShadeModule
    ],
    declarations: [ExpensaTableComponent],
    exports: [ExpensaTableComponent]
})
export class ExpensaTableModule {
}
