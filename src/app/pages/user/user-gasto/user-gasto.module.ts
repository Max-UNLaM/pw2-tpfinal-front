import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserGastoComponent} from './user-gasto.component';
import {UserGastoDashboardComponent} from './user-gasto-dashboard/user-gasto-dashboard.component';
import {TitlebarModule} from '../../../shared/ui/titlebar/titlebar.module';
import {UserGastoRoutingModule} from './user-gasto-routing.module';
import {MatCardModule} from '@angular/material';
import {GastoTableModule} from '../../../shared/gasto/gasto-table/gasto-table.module';

@NgModule({
    imports: [
        CommonModule,
        UserGastoRoutingModule,
        TitlebarModule,
        MatCardModule,
        GastoTableModule
    ],
    declarations: [UserGastoComponent, UserGastoDashboardComponent]
})
export class UserGastoModule {
}
