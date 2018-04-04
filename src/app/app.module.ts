import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {PopoverPage} from '../pages/paso2-transporte/paso2-transporte';
import { Keyboard } from '@ionic-native/keyboard';
import {AlertCustomPage} from '../pages/paso3-validacionlineas/paso3-validacionlineas';
import {AlertCustomPageB} from '../pages/paso3-validacionlineas/paso3-validacionlineas';
import {AlertCustomPageC} from '../pages/paso3-validacionlineas/paso3-validacionlineas';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    PopoverPage,
    AlertCustomPage,
    AlertCustomPageB,
    AlertCustomPageC
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopoverPage,
    AlertCustomPage,
    AlertCustomPageB,
    AlertCustomPageC
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
