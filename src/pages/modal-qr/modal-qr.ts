import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-qr',
  templateUrl: 'modal-qr.html',
})
export class ModalQrPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController) {
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

  generarRecepcion(){
    this.navCtrl.push("Paso1ValidacionOcPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalQrPage');
  }

}
