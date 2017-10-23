import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoggedinPage } from '../pages/loggedin/loggedin';

const firebaseAuth = {
  apiKey: "AIzaSyBNH3p8ihzqbh6KMINbjAm5adqMXbyFa8E",
  authDomain: "test-project-9fd71.firebaseapp.com",
  databaseURL: "https://test-project-9fd71.firebaseio.com",
  projectId: "test-project-9fd71",
  storageBucket: "test-project-9fd71.appspot.com",
  messagingSenderId: "407426614934"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoggedinPage
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseAuth),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoggedinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
