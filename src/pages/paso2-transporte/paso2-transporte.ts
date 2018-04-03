import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController,ViewController, AlertController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-paso2-transporte',
  templateUrl: 'paso2-transporte.html',
})
export class Paso2TransportePage {
  private showCard:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private popoverCtrl:PopoverController) {

  }

  lectorQR(){
    
  }

  manual(event){
    let popover = this.popoverCtrl.create(PopoverPage,{data:"nada"},{cssClass:"clasePopover",enableBackdropDismiss:false,showBackdrop:true});
    popover.present();
    popover.onDidDismiss((data)=>{
      console.log(JSON.stringify(data));
      this.showCard=data.data;
    })
  }

  volver(){
    this.showCard=false;
  }

  aceptart(){
    this.showCard=true;
  }

  continuar(){
    this.navCtrl.push("Paso3ValidacionlineasPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Paso2TransportePage');
  }

}
//otra clase

@Component({
  template:`
  <ion-card>
    <ion-card-header style="color:#FF5722 !important; text-align:left !important;font-size:14px !important; font-weight: bold !important;background:transparent !important; border: 0px !important;box-shadow: none !important; border-color: transparent !important;">
      Tipo de documento
    </ion-card-header>
    <ion-card-content>
      <ion-list no-lines>
        <ion-item>
          <ion-segment [(ngModel)]="opcionSegment" color="panel">
            <ion-segment-button value="guia" >
              GUÍA
            </ion-segment-button>
            <ion-segment-button value="factura">
              FACTURA
            </ion-segment-button>
          </ion-segment>
        </ion-item>
        <ion-item [ngSwitch]="opcionSegment" style="background:#FEF8F8 !important; color:#FF8A65 !important; font-size:14px !important;text-align:left !important;">
          <ion-label *ngSwitchCase="'guia'"> Guía de tercero</ion-label>
          <ion-toggle *ngSwitchCase="'guia'" checked="false" [(ngModel)]="isSiGuiaTercero"></ion-toggle>
        </ion-item>
        <ion-item [hidden]="!isSiGuiaTercero" [ngSwitch]="opcionSegment">
          <ion-icon name="list-box" item-start color="panel" *ngSwitchCase="'guia'"></ion-icon>
          <ion-label *ngSwitchCase="'guia'" floating style="color:#FF8A65 !important; font-size:14px !important;text-align:left !important;">Rut de Tercero</ion-label>
          <ion-input type="text" *ngSwitchCase="'guia'"></ion-input>
        </ion-item>
        <ion-item>
          <ion-icon name="list-box" item-start color="panel"></ion-icon>
          <ion-label floating style="color:#FF8A65 !important; font-size:14px !important;text-align:left !important;">Nº Guía</ion-label>
          <ion-input type="text"></ion-input>
        </ion-item>
        <ion-item>
          <ion-icon name="calendar" item-start color="panel"></ion-icon>
          <ion-label floating style="color:#FF8A65 !important; font-size:14px !important;text-align:left !important;">Fecha de Emisión</ion-label>
          <ion-input type="text"></ion-input>
        </ion-item>
        <ion-item style="text-align:center !important; color:#FF8A65 !important; font-size:14px !important;font-weight: bold !important;">
          <ion-label item-start (tap)="cancelar()">Cancelar</ion-label>
          <ion-label item-end (tap)="aceptar()">OK</ion-label>
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
  `
})

export class PopoverPage{
  private opcionSegment:string="";
  private isSiGuiaTercero:boolean=false;
  constructor (private navParams:NavParams,private viewCtrl:ViewController){
    
  }

  cancelar(){
    this.viewCtrl.dismiss({data:false});
  }

  aceptar(){
    let data={data:true};
    this.viewCtrl.dismiss(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
    this.opcionSegment="guia";
    console.log("data: "+this.navParams.get('data'))
  }
}
