import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,ViewController,Navbar,App } from 'ionic-angular';
import { TabsPage } from '../../main/tabs/tabs';
import { ZxqListPage } from '../../village/zxq-list/zxq-list';

import { villageServices } from './../../../api/villageServices';
import {WebConfig} from '../../../config/config'

@Component({
  selector: 'page-zxq-list-detail',
  templateUrl: 'zxq-list-detail.html'
})
export class ZxqListDetailPage {
  @ViewChild(Navbar) navBar: Navbar
  DataModel:any = {}
    BaseImgUrl = WebConfig.BaseImgUrl;
    DataList:any=[]

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,public viewCtrl:ViewController,
    public appctrl:App,public villageServices:villageServices
    ) {}

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('');
      this.navBar.backButtonClick = (e:UIEvent)=>{
      this.navCtrl.pop()
    }

    var id = this.navParams.get("id")
    if(id == null){
      console.log("id null")
      this.appctrl.getRootNav().push(TabsPage);
      return
    }
    this.LoadData(id,true)
  }

  LoadData(id,loadhot){
     var PostData ={
      plotId:id
    }
    this.villageServices.findDetailsVillage(PostData).subscribe(result =>{
      if(result != null){
        this.DataModel = result.data;
        //附近小区
        this.villageServices.findVillage({pagenum:1,pagesize:4,districtId:this.DataModel.districtId}).subscribe(ret =>{
          if(ret != null){
            this.DataList = ret.data;
          }
        })
      }
    })
  }

  //更多
  MoreClick(){
    this.appctrl.getRootNav().push(ZxqListPage)
  }

  //更多小区点击
  ItemClick(item){
    this.LoadData(item.id,true)
  }


}
