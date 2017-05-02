import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GrInfoSuccePage } from '../../myinfo/gr-info-succe/gr-info-succe';
import { GrInfoFailurePage } from '../../myinfo/gr-info-failure/gr-info-failure';
import { GrInfoListPage } from '../../myinfo/gr-info-list/gr-info-list';

/*
  Generated class for the GrInfoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gr-info-page',
  templateUrl: 'gr-info-page.html'
})
export class GrInfoPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

   submitBut(){
    //this.navCtrl.push(GrInfoSuccePage);
    this.navCtrl.push(GrInfoFailurePage);
     // this.navCtrl.push(GrInfoListPage);
   }


  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad GrInfoPagePage');
  // }

}
