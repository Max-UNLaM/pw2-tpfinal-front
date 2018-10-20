import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitlebarComponent} from './titlebar.component';
import {MatCardModule, MatDividerModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatDividerModule,
        MatCardModule
    ],
    declarations: [TitlebarComponent],
    exports: [TitlebarComponent]
})
export class TitlebarModule {
}
