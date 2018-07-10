import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomepageModule} from './pages/homepage/homepage.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {NavbarService} from './shared/navbar/navbar.service';

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
        HomepageModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule
    ],
    providers: [NavbarService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
