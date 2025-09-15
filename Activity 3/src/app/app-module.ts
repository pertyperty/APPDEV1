import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Features } from './features/features';
import { Guide } from './guide/guide';
import { Contact } from './contact/contact';
import { Support } from './support/support';
import { Footer } from './footer/footer';

@NgModule({
  declarations: [
    App,
    Home,
    Features,
    Guide,
    Support,
    Contact,
    Footer,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [App]
})
export class AppModule { }
