import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StandingsPage } from '../pages/standings/standings';
import { TeamsPage } from '../pages/teams/teams';
import { LoginPage} from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';

import {W1Page} from '../pages/w1/w1';
import {W2Page} from '../pages/w2/w2';
import {W3Page} from '../pages/w3/w3';
import {W4Page} from '../pages/w4/w4';
import {W5Page} from '../pages/w5/w5';
import {W6Page} from '../pages/w6/w6';
import {W7Page} from '../pages/w7/w7';
import {W8Page} from '../pages/w8/w8';
import {W9Page} from '../pages/w9/w9';
import {W10Page} from '../pages/w10/w10';
import {W11Page} from '../pages/w11/w11';
import {W12Page} from '../pages/w12/w12';
import {W13Page} from '../pages/w13/w13';
import {W14Page} from '../pages/w14/w14';
import {W15Page} from '../pages/w15/w15';
import {BowlsPage} from '../pages/bowls/bowls';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from "angularfire2";
import { FIREBASE_CONFIG } from './app.firebase.config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AngularFireAuth} from "angularfire2/auth";
import { RegisterPageModule } from '../pages/register/register.module';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    StandingsPage,
    TeamsPage,
    TabsPage,
    LoginPage,
    W1Page,
    W2Page,
    W3Page,
    W4Page,
    W5Page,
    W6Page,
    W7Page,
    W8Page,
    W9Page,
    W10Page,
    W11Page,
    W12Page,
    W13Page,
    W14Page,
    W15Page,
    BowlsPage

  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,  
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    RegisterPageModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    StandingsPage,
    TeamsPage,
    TabsPage,
    LoginPage,
    W1Page,
    W2Page,
    W3Page,
    W4Page,
    W5Page,
    W6Page,
    W7Page,
    W8Page,
    W9Page,
    W10Page,
    W11Page,
    W12Page,
    W13Page,
    W14Page,
    W15Page,
    BowlsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth
  ]
})
export class AppModule {}
