import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,AlertController,PopoverController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-paso3-validacionlineas',
  templateUrl: 'paso3-validacionlineas.html',
})
export class Paso3ValidacionlineasPage {
  private idx:number;
  private toggleA:boolean=true;
  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController,private alertCtrl: AlertController,private popoverCtrl:PopoverController) {
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
    this.navCtrl.push("Paso4EvidenciaAPage");
  }

  adjuntarImg(){

  }

  cambiarUnidad(){
    if(this.toggleA==true){
      let popover = this.popoverCtrl.create(AlertCustomPage,{},{cssClass:"clasePopover"});
      popover.onDidDismiss(data=>{
        console.log(data);
      });
      popover.present();
    }
  }

  cambiarBodega(){
    if(this.toggleA==true){
      let popover = this.popoverCtrl.create(AlertCustomPageB,{},{cssClass:"clasePopover"});
      popover.onDidDismiss(data=>{
        console.log(data);
      });
      popover.present();
    }
  }

  showRechazo(){
    let popover = this.popoverCtrl.create(AlertCustomPageC,{},{cssClass:"clasePopover"});
      popover.onDidDismiss(data=>{
        console.log(data);
      });
      popover.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Paso3ValidacionlineasPage');
  }
}

//Component modal tipo alert cambiar unidad
@Component({
  template:`
    <ion-list no-lines radio-group [(ngModel)]="radioGrup">
      <ion-list-header>
        Seleccione Unidad
      </ion-list-header>
      <ion-item  (tap)="selected(1)" [ngClass]="{'itemselect':(itemId==1)}">
        <ion-label item-start>UN</ion-label>
        <ion-radio color="panel" checked="false" item-end value="un"></ion-radio>
      </ion-item>   
      <ion-item  (tap)="selected(2)" [ngClass]="{'itemselect':(itemId==2)}">
        <ion-label item-start>Cajas</ion-label>
        <ion-radio color="panel" checked="false" item-end value="cajas"></ion-radio>
      </ion-item>   
      <ion-item  (tap)="selected(3)" [ngClass]="{'itemselect':(itemId==3)}">
        <ion-label item-start>Resma</ion-label>
        <ion-radio color="panel" checked="false" item-end value="resma"></ion-radio>
      </ion-item>
      <ion-item style="border-top:1px solid #FF5722 !important;">
        <button ion-button color="panel" clear item-start>Cancelar</button>
        <button ion-button color="panel" clear item-end>OK</button>
      </ion-item>
    </ion-list>
  `,
  selector:"page-paso3-validacionlineas"
})

export class AlertCustomPage {
  private itemId:number;
  private radioGrup;
  constructor(private navParams:NavParams){

  }

  selected(id){
    console.log("id: "+id)
    if(id==this.itemId){
      this.itemId=0;
    }else{
      this.itemId=id;
    }
  }
}
//FIN Component modal tipo alert cambiar unidad

//Component modal tipo alert cambiar Bodega
@Component({
  template:`
    <ion-list no-lines radio-group [(ngModel)]="radioGrup">
      <ion-list-header>
        Seleccione Bodega
      </ion-list-header>
      <ion-item  (tap)="selected(1)" [ngClass]="{'itemselect':(itemId==1)}">
        <ion-label item-start>Bodega 01</ion-label>
        <ion-radio color="panel" checked="false" item-end value="1"></ion-radio>
      </ion-item>   
      <ion-item  (tap)="selected(2)" [ngClass]="{'itemselect':(itemId==2)}">
        <ion-label item-start>Bodega 02</ion-label>
        <ion-radio color="panel" checked="false" item-end value="2"></ion-radio>
      </ion-item>   
      <ion-item  (tap)="selected(3)" [ngClass]="{'itemselect':(itemId==3)}">
        <ion-label item-start>Bodega 03</ion-label>
        <ion-radio color="panel" checked="false" item-end value="3"></ion-radio>
      </ion-item>
      <ion-item  (tap)="selected(4)" [ngClass]="{'itemselect':(itemId==4)}">
        <ion-label item-start>Bodega 04</ion-label>
        <ion-radio color="panel" checked="false" item-end value="4"></ion-radio>
      </ion-item>
      <ion-item-divider color="light"></ion-item-divider>
      <ion-item style="background:#FEF8F8 !important;">
        <ion-label>Utilizar en todas las lineas</ion-label>
        <ion-toggle checked="false"></ion-toggle>
      </ion-item>
      <ion-item style="border-top:1px solid #FF5722 !important;">
        <button ion-button color="panel" clear item-start>Cancelar</button>
        <button ion-button color="panel" clear item-end>OK</button>
      </ion-item>
    </ion-list>
  `,
  selector:"page-paso3-validacionlineas"
})

export class AlertCustomPageB {
  private itemId:number;
  private radioGrup;
  constructor(private navParams:NavParams){

  }

  selected(id){
    console.log("id: "+id)
    if(id==this.itemId){
      this.itemId=0;
    }else{
      this.itemId=id;
    }
  }
}
//Bodega

//alert motivo de rechazo
@Component({
  template:`
    <ion-list no-lines radio-group [(ngModel)]="radioGrup">
      <ion-list-header>
        Seleccione Motivo de Rechazo
      </ion-list-header>
      <ion-item  (tap)="selected(1)" [ngClass]="{'itemselect':(itemId==1)}">
        <ion-label item-start>Producto Dañado</ion-label>
        <ion-radio color="panel" checked="false" item-end value="1"></ion-radio>
      </ion-item>   
      <ion-item  (tap)="selected(2)" [ngClass]="{'itemselect':(itemId==2)}">
        <ion-label item-start>Despacharon más de lo solicitado</ion-label>
        <ion-radio color="panel" checked="false" item-end value="2"></ion-radio>
      </ion-item>   
      <ion-item  (tap)="selected(3)" [ngClass]="{'itemselect':(itemId==3)}">
        <ion-label item-start>Producto Equivocado</ion-label>
        <ion-radio color="panel" checked="false" item-end value="3"></ion-radio>
      </ion-item>
      <ion-item  (tap)="selected(4)" [ngClass]="{'itemselect':(itemId==4)}">
        <ion-label item-start>Entrega Atrasada</ion-label>
        <ion-radio color="panel" checked="false" item-end value="4"></ion-radio>
      </ion-item>
      <ion-item  (tap)="selected(5)" [ngClass]="{'itemselect':(itemId==5)}">
        <ion-label item-start>Mal especificado en OC</ion-label>
        <ion-radio color="panel" checked="false" item-end value="4"></ion-radio>
      </ion-item>
      <ion-item  (tap)="selected(6)" [ngClass]="{'itemselect':(itemId==6)}">
        <ion-label item-start>Otro Motivo</ion-label>
        <ion-radio color="panel" checked="false" item-end value="4"></ion-radio>
      </ion-item>
      <ion-item style="border-top:1px solid #FF5722 !important;">
        <button ion-button color="panel" clear item-start>Cancelar</button>
        <button ion-button color="panel" clear item-end>OK</button>
      </ion-item>
    </ion-list>
  `,
  selector:"page-paso3-validacionlineas"
})

export class AlertCustomPageC {
  private itemId:number;
  private radioGrup;
  constructor(private navParams:NavParams){

  }

  selected(id){
    console.log("id: "+id)
    if(id==this.itemId){
      this.itemId=0;
    }else{
      this.itemId=id;
    }
  }
}