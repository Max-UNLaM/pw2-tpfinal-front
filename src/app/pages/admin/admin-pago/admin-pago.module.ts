import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPagoComponent} from './admin-pago.component';
import {AdmPagoDashboardComponent} from './adm-pago-dashboard/adm-pago-dashboard.component';
import {AdminPagoRoutingModule} from './admin-pago-routing.module';
import {PagoListModule} from '../../../shared/pago/pago-list/pago-list.module';
import {MatCardModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        AdminPagoRoutingModule,
        MatCardModule,
        PagoListModule
    ],
    declarations: [AdminPagoComponent, AdmPagoDashboardComponent]
})
export class AdminPagoModule {
}
