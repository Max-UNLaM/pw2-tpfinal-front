import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routedComponents, UserFacturaRoutingModule} from './user-factura-routing.module';

@NgModule({
    imports: [
        CommonModule,
        UserFacturaRoutingModule
    ],
    declarations: [...routedComponents]
})
export class UserFacturaModule {
}
