import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioRecepcionPage } from './inicio-recepcion';

@NgModule({
  declarations: [
    InicioRecepcionPage,
  ],
  imports: [
    IonicPageModule.forChild(InicioRecepcionPage),
  ],
})
export class InicioRecepcionPageModule {}
