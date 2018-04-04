import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recepcion-exitosa',
  templateUrl: 'recepcion-exitosa.html',
})
export class RecepcionExitosaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  volver(){
    this.navCtrl.push("BandejaModulosPage");
  }

  continuar(){
    this.navCtrl.push("InicioRecepcionPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecepcionExitosaPage');
  }

}
