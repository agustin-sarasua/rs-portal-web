import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderRecommendedComponent } from './header/header-recommended/header-recommended.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from "./services/auth.service";
import { RestService } from "./services/rest.service";
import { UserService } from "./services/user.service";
import { PublicationComponent } from './publication/publication.component';
import { PropertyComponent } from './property/property.component';
import { AddressFormComponent } from './property/address-form/address-form.component';
import { ContactInfoComponent } from './publication/contact-info/contact-info.component';
import { CatalogService } from './services/catalog.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderTopComponent,
    HeaderRecommendedComponent,
    HeaderSearchComponent,
    HeaderMenuComponent,
    PublicationComponent,
    PropertyComponent,
    AddressFormComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [AuthService, RestService, UserService, CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
