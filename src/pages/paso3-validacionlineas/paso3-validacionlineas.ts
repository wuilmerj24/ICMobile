import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-paso3-validacionlineas',
  templateUrl: 'paso3-validacionlineas.html',
})
export class Paso3ValidacionlineasPage {
  private idx:number;
  private toggleA:boolean=true;
  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController,private alertCtrl: AlertController) {
  }

  selected(id){
    console.log("id: "+id)
    if(id==this.idx){
      this.idx=0;
    }else{
      this.idx=id;
    }
  }

  volver(){
    this.navCtrl.pop();
  }

  continuar(){
    this.navCtrl.push("ErrorlineasSingestionarPage");
  }

  adjuntarImg(){

  }

  cambiarUnidad(){
    if(this.toggleA==true){
      let alert = this.alertCtrl.create();
      alert.setTitle('Seleccione Unidad');

      alert.addInput({
        type: 'radio',
        label: 'UN',
        value: 'un',
        checked: false
      });
      alert.addInput({
        type: 'radio',
        label: 'Cajas',
        value: 'cajas',
        checked: false
      });

      alert.addInput({
        type: 'radio',
        label: 'Resma',
        value: 'resma',
        checked: false
      });

      alert.addButton('Cancelar');
      alert.addButton({
        text: 'OK',
        handler: data => {
        }
      });
      alert.present();
    }
  }

  cambiarBodega(){
    if(this.toggleA==true){
      let alert = this.alertCtrl.create();
    alert.setTitle('Seleccione Bodega');

    alert.addInput({
      type: 'radio',
      label: 'Bodega 01',
      value: 'bodega 01',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Bodega 02',
      value: 'bodega 02',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Bodega 03',
      value: 'bodega 03',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Bodega 04',
      value: 'bodega 04',
      checked: false
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'OK',
      handler: data => {
      }
    });
    alert.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Paso3ValidacionlineasPage');
  }

}
