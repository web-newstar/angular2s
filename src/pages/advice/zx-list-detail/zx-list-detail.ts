import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,ViewController,App,Navbar } from 'ionic-angular';
import { adviceServices } from './../../../api/adviceServices';
import { TabsPage } from '../../main/tabs/tabs';

@Component({
  selector: 'page-zx-list-detail',
  templateUrl: 'zx-list-detail.html'
})
export class ZxListDetailPage {
  @ViewChild(Navbar) navBar: Navbar;
  DataModel:any = {};
  ParamsId:any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl:ViewController,public adviceServices:adviceServices,public appctrl:App) {}

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('');
      this.navBar.backButtonClick = (e:UIEvent)=>{
      this.navCtrl.pop();
    }

    var id = this.navParams.get("id")
    this.ParamsId = id
    if(id == null){
      console.log("id null")
      this.appctrl.getRootNav().push(TabsPage);
      return
    }
    this.LoadData(id,true)

  }

  LoadData(id,loadhot){
     var PostData ={
      id:id
    }
    this.adviceServices.findDetailNews(PostData).subscribe(result =>{
      if(result != null){
        this.DataModel = result.data;
      }
    })
  }
}
