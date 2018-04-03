import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-soluciones-bodega',
  templateUrl: 'soluciones-bodega.html',
})
export class SolucionesBodegaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  recepcion(){
    this.navCtrl.push("InicioRecepcionPage");
  }

  consumo(){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolucionesBodegaPage');
  }

}
