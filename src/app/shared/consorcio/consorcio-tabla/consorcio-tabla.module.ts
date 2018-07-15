import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConsorcioTablaComponent} from './consorcio-tabla.component';
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
    declarations: [ConsorcioTablaComponent],
    exports: [ConsorcioTablaComponent],
    providers: [ConsorcioService]
})
export class ConsorcioTablaModule {
}
