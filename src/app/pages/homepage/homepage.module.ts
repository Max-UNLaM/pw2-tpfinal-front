import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageRoutingModule} from './homepage-routing.module';
import {HomepageComponent} from './homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        HomepageRoutingModule
    ],
    declarations: [HomepageComponent, DashboardComponent],
    exports: [HomepageComponent]
})
export class HomepageModule {
}
