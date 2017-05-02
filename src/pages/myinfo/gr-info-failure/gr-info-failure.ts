import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GrInfoPagePage } from '../../myinfo/gr-info-page/gr-info-page';
import { HomePagePage } from '../../myinfo/home-page/home-page';


/*
  Generated class for the GrInfoFailure page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gr-info-failure',
  templateUrl: 'gr-info-failure.html'
})
export class GrInfoFailurePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  againBut(){
     this.navCtrl.push(GrInfoPagePage);
  }
  nextBut(){
     this.navCtrl.push(HomePagePage);
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad GrInfoFailurePage');
  // }

}
