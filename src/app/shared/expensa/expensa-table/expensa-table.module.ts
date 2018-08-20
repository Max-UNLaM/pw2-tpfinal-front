import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpensaTableComponent} from './expensa-table.component';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule, MatListModule,
    MatPaginatorModule,
    MatTableModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {LoaderShadeModule} from '../../ui/loader-shade/loader-shade.module';
import {ExpensaDialogComponent} from '../expensa-dialog/expensa-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        LoaderShadeModule
    ],
    declarations: [ExpensaTableComponent, ExpensaDialogComponent],
    exports: [ExpensaTableComponent, ExpensaDialogComponent],
    entryComponents: [ExpensaDialogComponent]
})
export class ExpensaTableModule {
}
