import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule, routedComponents} from './admin-routing.module';
import {MatCardModule} from '@angular/material';
import {UnidadTablaModule} from '../../shared/unidad/unidad-tabla/unidad-tabla.module';
import { ConsorcioComponent } from './consorcio/consorcio.component';
import {ConsorcioTablaModule} from '../../shared/consorcio/consorcio-tabla/consorcio-tabla.module';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatCardModule,
        UnidadTablaModule,
        ConsorcioTablaModule
    ],
    declarations: [...routedComponents, ConsorcioComponent],
})
export class AdminModule {
}
