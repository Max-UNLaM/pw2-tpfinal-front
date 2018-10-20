import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {MatButtonModule, MatDialogModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {NavbarService} from './shared/navbar/navbar.service';
import {PortalModule} from './pages/portal/portal.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MessageModalComponent } from './shared/ui/message-modal/message-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        MessageModalComponent
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
        AngularSvgIconModule,
        MatDialogModule
    ],
    providers: [NavbarService],
    entryComponents: [MessageModalComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
