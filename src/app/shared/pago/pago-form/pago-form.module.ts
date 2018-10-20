import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagoFormComponent} from './pago-form.component';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule, MatSnackBarModule,
    MatStepperModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MatStepperModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatListModule,
        MatSnackBarModule
    ],
    declarations: [PagoFormComponent],
    exports: [PagoFormComponent]
})
export class PagoFormModule {
}
