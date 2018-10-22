import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminFacturaComponent} from './admin-factura.component';
import {AdmFacturaDashboardComponent} from './adm-factura-dashboard/adm-factura-dashboard.component';
import {AdmFacturaGenerarComponent} from './adm-factura-generar/adm-factura-generar.component';
import {AdminFacturaRoutingModule} from './admin-factura-routing.module';
import {MenuCardModule} from '../../../shared/menu-card/menu-card.module';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatStepperModule
} from '@angular/material';
import {ConsorcioSelectModule} from '../../../shared/consorcio/consorcio-select/consorcio-select.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AdmFacturaListComponent } from './adm-factura-list/adm-factura-list.component';
import {FacturaTableModule} from '../../../shared/factura/factura-table/factura-table.module';

@NgModule({
    imports: [
        CommonModule,
        AdminFacturaRoutingModule,
        MenuCardModule,
        MatStepperModule,
        MatButtonModule,
        ConsorcioSelectModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatListModule,
        MatSnackBarModule,
        FacturaTableModule
    ],
    declarations: [AdminFacturaComponent, AdmFacturaDashboardComponent, AdmFacturaGenerarComponent, AdmFacturaListComponent]
})
export class AdminFacturaModule {
}
