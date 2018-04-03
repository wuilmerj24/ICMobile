import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-paso1-validacion-oc',
  templateUrl: 'paso1-validacion-oc.html',
})
export class Paso1ValidacionOcPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  continuar(){
    this.navCtrl.push("Paso2TransportePage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Paso1ValidacionOcPage');
  }

}
