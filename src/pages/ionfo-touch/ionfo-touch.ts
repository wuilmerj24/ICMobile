import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ionfo-touch',
  templateUrl: 'ionfo-touch.html',
})
export class IonfoTouchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController) {
  }

  cancelar(){
    this.navCtrl.pop();
  }

  aceptar(){
    let modal = this.modalCtrl.create("ModalIdtouchPage");
    modal.onDidDismiss(data=>{
      console.log("Se cerro la modal");
    })
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IonfoTouchPage');
  }

}
