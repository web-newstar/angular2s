import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ZjInfoSuccePage } from '../../myinfo/zj-info-succe/zj-info-succe';
import { ZjInfoListPage } from '../../myinfo/zj-info-list/zj-info-list';

/*
  Generated class for the ZjInfoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-zj-info-page',
  templateUrl: 'zj-info-page.html'
})
export class ZjInfoPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  submitBut(){
    //this.navCtrl.push(ZjInfoSuccePage);
    this.navCtrl.push(ZjInfoListPage);
  }


  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ZjInfoPagePage');
  // }

}
