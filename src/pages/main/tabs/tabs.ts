import { Component } from '@angular/core';
import { NavController,App,ModalController} from 'ionic-angular';  
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePagePage } from '../../myinfo/home-page/home-page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = HomePage;
  //tab2Root: any = AboutPage;
  //tab3Root: any = ContactPage;
  //tab3Root: any = HomePagePage;
  ShowDg:any;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public appctrl :App) {
    this.ShowDg = false
  }
  
  releaseBut() {
    //console.log("click")
    this.ShowDg=true
  }
  myinfoBut() {
    this.appctrl.getRootNav().push(HomePagePage)
  }
  
  hide(){
    this.ShowDg=false
  }
   
}
