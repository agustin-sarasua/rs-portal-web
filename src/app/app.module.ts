import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderRecommendedComponent } from './header/header-recommended/header-recommended.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderTopComponent,
    HeaderRecommendedComponent,
    HeaderSearchComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
