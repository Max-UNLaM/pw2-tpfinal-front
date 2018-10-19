import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagoFormComponent} from './pago-form.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [PagoFormComponent],
    exports: [PagoFormComponent]
})
export class PagoFormModule {
}
