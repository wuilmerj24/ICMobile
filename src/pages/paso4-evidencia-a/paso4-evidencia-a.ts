import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-paso4-evidencia-a',
  templateUrl: 'paso4-evidencia-a.html',
})
export class Paso4EvidenciaAPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  volver(){
    this.navCtrl.pop();
  }

  continuar(){
    this.navCtrl.push("Paso5ResumenrecepcionPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Paso4EvidenciaAPage');
  }

}
