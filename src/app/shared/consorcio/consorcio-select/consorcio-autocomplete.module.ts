import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConsorcioSelectComponent} from './consorcio-select.component';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSelectModule} from '@angular/material';
import {ConsorcioService} from '../../../providers/consorcio/consorcio/consorcio.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatSelectModule
    ],
    declarations: [ConsorcioSelectComponent],
    exports: [ConsorcioSelectComponent],
    providers: [ConsorcioService]
})
export class ConsorcioAutocompleteModule {
}
