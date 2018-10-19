import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {NavbarService} from './shared/navbar/navbar.service';
import {PortalModule} from './pages/portal/portal.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        PortalModule,
        FontAwesomeModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        AngularSvgIconModule
    ],
    providers: [NavbarService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
