import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private formulario:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController,private fb: FormBuilder,private loadingCtrl:LoadingController) {
    this.buildForm();
  }

  iniciarSesion(){
    console.log(this.formulario.value);
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.onDidDismiss(data=>{
      this.navCtrl.push("BandejaModulosPage",{nombre:this.formulario.value.usuario});
    })
    loader.present();
    //this.buildForm();
  }

  buildForm() {
    this.formulario = this.fb.group({
      usuario:['',[Validators.required,Validators.maxLength(30)]],
      empresa:['',[Validators.required,Validators.maxLength(20)]],
      clave:['',[Validators.required]]
    });
  }

  lectorHuella(){
    this.navCtrl.push('IonfoTouchPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
