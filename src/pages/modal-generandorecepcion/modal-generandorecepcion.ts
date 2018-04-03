import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-generandorecepcion',
  templateUrl: 'modal-generandorecepcion.html',
})
export class ModalGenerandorecepcionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalGenerandorecepcionPage');
  }

}
