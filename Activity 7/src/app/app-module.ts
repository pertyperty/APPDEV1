import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Gym1 } from './gym-1/gym-1';
import { Gym2 } from './gym-2/gym-2';
import { Gym3 } from './gym-3/gym-3';
import { Gym4 } from './gym-4/gym-4';
import { Gym5 } from './gym-5/gym-5';
import { Gym6 } from './gym-6/gym-6';
import { Gym7 } from './gym-7/gym-7';
import { Gym8 } from './gym-8/gym-8';
import { Sidebar } from './sidebar/sidebar';

@NgModule({
  declarations: [
    App,
    Home,
    Header,
    Footer,
    Gym1,
    Gym2,
    Gym3,
    Gym4,
    Gym5,
    Gym6,
    Gym7,
    Gym8,
    Sidebar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [App]
})
export class AppModule { }
