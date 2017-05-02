import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ZjInfoPagePage } from '../../myinfo/zj-info-page/zj-info-page';
import { HomePagePage } from '../../myinfo/home-page/home-page';

/*
  Generated class for the ZjInfoFailure page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-zj-info-failure',
  templateUrl: 'zj-info-failure.html'
})
export class ZjInfoFailurePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  againBut(){
     this.navCtrl.push(ZjInfoPagePage);
  }
  nextBut(){
     this.navCtrl.push(HomePagePage);
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ZjInfoFailurePage');
  // }

}
