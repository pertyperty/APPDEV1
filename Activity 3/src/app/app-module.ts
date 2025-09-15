import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Features } from './features/features';
import { Guide } from './guide/guide';
import { Contact } from './contact/contact';
import { Support } from './support/support';
import { Header } from './header/header';


@NgModule({
  declarations: [
    App,
    Home,
    Features,
    Guide,
    Support,
    Contact,
    Header,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
