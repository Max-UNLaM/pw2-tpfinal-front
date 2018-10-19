import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagoFormComponent} from './pago-form.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatStepperModule} from '@angular/material';
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
        MatSelectModule
    ],
    declarations: [PagoFormComponent],
    exports: [PagoFormComponent]
})
export class PagoFormModule {
}
