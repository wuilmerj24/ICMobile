import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-idtouch',
  templateUrl: 'modal-idtouch.html',
})
export class ModalIdtouchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cancelar(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalIdtouchPage');
  }

}
