import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminStatisticsComponent} from './admin-statistics.component';
import {AdminStatisticsRoutingModule} from './admin-statistics-routing.module';
import {MatCardModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
    imports: [
        CommonModule,
        AdminStatisticsRoutingModule,
        MatCardModule,
        NgxChartsModule
    ],
    declarations: [AdminStatisticsComponent]
})
export class AdminStatisticsModule {
}
