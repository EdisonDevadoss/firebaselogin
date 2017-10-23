import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') user;
  @ViewChild('password') password;
  constructor(private alertCtrl: AlertController,private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  registerUser(){

    this.fire.auth.createUserWithEmailAndPassword(this.user.value + '@domain.xta', this.password.value)
    .then((data)=>{
      console.log('got a data',data);
      this.alert('Registered!');
    })
    .catch((err)=>{
      console.log('got a error',err);
      this.alert(err.message)
    })
    console.log('Would register user with', this.user.value, this.password.value);
  }
}
