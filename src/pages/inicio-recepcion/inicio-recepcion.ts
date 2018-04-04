import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inicio-recepcion',
  templateUrl: 'inicio-recepcion.html',
})
export class InicioRecepcionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController) {
  }

  codigoQR(){
    let modal=this.modalCtrl.create("ModalQrPage");
    modal.onDidDismiss(data=>{
      console.log("modal");
    })
    modal.present();
  }
  
  buscarOC(){
    let modal=this.modalCtrl.create("BusquedaOcPorNumeroPage");
    modal.onDidDismiss(data=>{
      console.log("modal");
    })
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioRecepcionPage');
  }

}
