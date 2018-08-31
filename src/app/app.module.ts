import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthService } from './services/auth.service';
import { PlanetService } from './services/planet.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PlanetListViewComponent } from './components/planet-list-view/planet-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    PlanetListViewComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
      AuthService,
      PlanetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
