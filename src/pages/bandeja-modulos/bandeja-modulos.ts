import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bandeja-modulos',
  templateUrl: 'bandeja-modulos.html',
})
export class BandejaModulosPage {
  private nombreUser:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController,private modalCtrl:ModalController) {
  }

  solucionesBodega(){
    this.navCtrl.push("SolucionesBodegaPage");
  }

  sinConexion(){
    let modal=this.modalCtrl.create("ModalSinconexionPage");
    modal.onDidDismiss(data=>{
      console.log("Se cerro la modal");
    });
    modal.present();
  }

  ionViewDidLoad() {
    this.nombreUser="Wuilmer Medrano";
    console.log('ionViewDidLoad BandejaModulosPage');
  }

}
