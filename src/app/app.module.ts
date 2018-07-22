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

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        PortalModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule
    ],
    providers: [NavbarService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
