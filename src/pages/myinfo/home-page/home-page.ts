import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TypePagePage } from '../../myinfo/type-page/type-page';

/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html'
})
export class HomePagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  typePageBut(){
     this.navCtrl.push(TypePagePage);
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad HomePagePage');
  // }

}
