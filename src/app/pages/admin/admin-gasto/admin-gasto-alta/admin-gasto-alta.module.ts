import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminGastoAltaComponent} from './admin-gasto-alta.component';
import {AdminGastoAltaRoutingModule} from './admin-gasto-alta-routing.module';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSnackBarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConsorcioSelectModule} from '../../../../shared/consorcio/consorcio-select/consorcio-select.module';

@NgModule({
    imports: [
        CommonModule,
        AdminGastoAltaRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        MatSnackBarModule,
        MatInputModule,
        MatSelectModule
    ],
    declarations: [AdminGastoAltaComponent]
})
export class AdminGastoAltaModule {
}
