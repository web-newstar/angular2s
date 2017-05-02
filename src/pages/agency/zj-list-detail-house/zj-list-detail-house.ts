import { Component } from '@angular/core';
import { NavController, NavParams,Navbar,ViewController,App } from 'ionic-angular';
import { agencyServices } from './../../../api/agencyServices';
import { TabsPage } from '../../main/tabs/tabs';
import {WebConfig} from '../../../config/config'
import { _} from 'underscore'

@Component({
  selector: 'page-zj-list-detail-house',
  templateUrl: 'zj-list-detail-house.html'
})
export class ZjListDetailHousePage {
   DataList:any = []
  ParamsId:any = null;
   PageSize:number = 10;
  PageNum:number = 0
  BaseImgUrl = WebConfig.BaseImgUrl;
  CanLoadMore = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl:ViewController,public appctrl:App,public agencyServices:agencyServices) {}

  ionViewDidLoad() {

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
    if(this.PageNum == 0){
      this.DataList = []
      this.CanLoadMore = true
    }
    this.PageNum ++ 
      var PostData ={
        pagenum:this.PageNum,
        pagesize:this.PageSize,
        createdBy:id
      }
      this.agencyServices.selectAllHouseDetail(PostData).subscribe(result =>{
        if(result != null){
          if(result.data.length == 0 ){
            this.CanLoadMore = false
          }
          var self = this;
          _.each(result.data,function(obj){
            self.DataList.push(obj);
          })
        }
      })
    }


    doLoadData(infiniteScroll){
    setTimeout(() => {
      this.LoadData(this.ParamsId,true)
        infiniteScroll.complete();
      }, 500);
  }
}
