import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule, routedComponents} from './admin-routing.module';
import {MatCardModule} from '@angular/material';
import {UnidadTablaModule} from '../../shared/unidad/unidad-tabla/unidad-tabla.module';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatCardModule,
        UnidadTablaModule
    ],
    declarations: [...routedComponents],
})
export class AdminModule {
}
