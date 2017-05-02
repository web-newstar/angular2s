import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GrInfoPagePage } from '../../myinfo/gr-info-page/gr-info-page';
import { ZjInfoPagePage } from '../../myinfo/zj-info-page/zj-info-page';

/*
  Generated class for the TypePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-type-page',
  templateUrl: 'type-page.html'
})
export class TypePagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  grInfoPageBut(){
     this.navCtrl.push(GrInfoPagePage);
  }

  zjInfoPageBut(){
     this.navCtrl.push(ZjInfoPagePage);
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TypePagePage');
  // }

}
