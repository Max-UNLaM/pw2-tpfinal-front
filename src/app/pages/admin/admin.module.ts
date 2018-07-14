import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule, routedComponents} from './admin-routing.module';
import {MatCardModule} from '@angular/material';
import {UnidadTablaModule} from '../../shared/unidad/unidad-tabla/unidad-tabla.module';
import { ConsorcioComponent } from './consorcio/consorcio.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatCardModule,
        UnidadTablaModule
    ],
    declarations: [...routedComponents, ConsorcioComponent],
})
export class AdminModule {
}
