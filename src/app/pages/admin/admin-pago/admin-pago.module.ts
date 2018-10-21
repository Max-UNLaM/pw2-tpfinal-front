import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPagoComponent} from './admin-pago.component';
import {AdmPagoDashboardComponent} from './adm-pago-dashboard/adm-pago-dashboard.component';
import {AdminPagoRoutingModule} from './admin-pago-routing.module';
import {PagoListModule} from '../../../shared/pago/pago-list/pago-list.module';
import {MatCardModule} from '@angular/material';
import { AdmPagoListComponent } from './adm-pago-list/adm-pago-list.component';
import {TitlebarModule} from '../../../shared/ui/titlebar/titlebar.module';
import {MenuCardModule} from '../../../shared/menu-card/menu-card.module';
import { AdmPagoPendienteComponent } from './adm-pago-pendiente/adm-pago-pendiente.component';

@NgModule({
    imports: [
        CommonModule,
        AdminPagoRoutingModule,
        MatCardModule,
        PagoListModule,
        TitlebarModule,
        MenuCardModule
    ],
    declarations: [AdminPagoComponent, AdmPagoDashboardComponent, AdmPagoListComponent, AdmPagoPendienteComponent]
})
export class AdminPagoModule {
}
