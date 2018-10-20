import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuCardComponent} from './menu-card.component';
import {MatCardModule} from '@angular/material';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        RouterModule,
        MatCardModule
    ],
    declarations: [MenuCardComponent],
    exports: [MenuCardComponent]
})
export class MenuCardModule {
}
