import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';
import {AdminGastoRoutingModule, routedComponents} from './admin-gasto-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AdminGastoRoutingModule,
        MatCardModule
    ],
    declarations: [...routedComponents]
})
export class AdminGastoModule {
}
