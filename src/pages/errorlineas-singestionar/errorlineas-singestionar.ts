import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-errorlineas-singestionar',
  templateUrl: 'errorlineas-singestionar.html',
})
export class ErrorlineasSingestionarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController) {
  }

  volver(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErrorlineasSingestionarPage');
  }

}
