import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-busqueda-oc-por-numero',
  templateUrl: 'busqueda-oc-por-numero.html',
})
export class BusquedaOcPorNumeroPage {
  private opcionesSegment:string="porNumero";
  private valorAbuscar:any=[];
  private buscarProveedor:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  buscarText(ev){
    // Reset items back to all of the items
    this.inicializarItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.valorAbuscar = this.valorAbuscar.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  buscarTextProveedor(ev){
    // Reset items back to all of the items
    this.inicializarItemProveedores();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.buscarProveedor = this.buscarProveedor.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  cancelarText(ev){

  }

  inicializarItems(){
    this.valorAbuscar = [
      {
        titulo:'Orden de de compra 789',
        subtitulo:'Sodimac S.A.'
      },
      {
        titulo:'Orden de de compra 783',
        subtitulo:'Sodimac S.A.'
      },
      {
        titulo:'Orden de de compra 782',
        subtitulo:'Sodimac S.A.'
      },
      {
        titulo:'Orden de de compra 784',
        subtitulo:'Sodimac S.A.'
      },
    ];
  }

  inicializarItemProveedores(){
    this.buscarProveedor= [
      {
        titulo:'Sodexo',
      },
      {
        titulo:'Sodimac S.A',
      },
      {
        titulo:'Sodimac S.A',
      },
      {
        titulo:'Sodimac Constructor S.A',
      },
    ];
  }

  pasarItem(item){
    console.log(item)
    this.navCtrl.push("Paso1ValidacionOcPage");
  }

  pasarItemProveedor(item){
    console.log(item)
    this.navCtrl.push("Paso1ValidacionOcPage");
  }

  ionViewDidLoad() {
    this.inicializarItems();
    this.inicializarItemProveedores();
    this.opcionesSegment="porNumero";
    console.log('ionViewDidLoad BusquedaOcPorNumeroPage opcionesSegment: '+this.opcionesSegment);
  }

}
