import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-paso5-resumenrecepcion',
  templateUrl: 'paso5-resumenrecepcion.html',
})
export class Paso5ResumenrecepcionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  volver(){
    this.navCtrl.pop();
  }

  continuar(){
    this.navCtrl.push("RecepcionExitosaPage")
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Paso5ResumenrecepcionPage');
  }

}
