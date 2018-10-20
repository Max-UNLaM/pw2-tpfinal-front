import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import {UserMinutaComponent} from './user-minuta.component';
import {TitlebarModule} from '../../../shared/ui/titlebar/titlebar.module';
import {UserMinutaRoutingModule} from './user-minuta-routing.module';


@NgModule({
    imports: [
        CommonModule,
        UserMinutaRoutingModule,
        MatCardModule,
        TitlebarModule
    ],
    declarations: [
        UserMinutaComponent
    ]
})



export class UserMinutaModule { }
