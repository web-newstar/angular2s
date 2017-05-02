import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { TabsPage } from '../../main/tabs/tabs';
import { EsfListPage } from '../../secondhandhouse/esf-list/esf-list';

import { esflistService } from './../../../api/esflistServices';
import { homeServices } from './../../../api/homeServices';
import {WebConfig} from '../../../config/config'
import{ _} from 'underscore'
@Component({
  selector: 'page-esf-list-detail',
  templateUrl: 'esf-list-detail.html'
})
export class EsfListDetailPage {
  ParamsID:any = null;
  DataModel:any = {};
  HotHouseDataList:any = []
  BaseImgUrl = WebConfig.BaseImgUrl;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appctrl :App,
    public esflistService:esflistService,
    public homeServices:homeServices
    ) {}

  ionViewDidLoad() {
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
      id:id
    }
    this.esflistService.getBdcHosueDetails(PostData).subscribe(result =>{
      if(result != null){
        this.DataModel = result.data;
        //加载图片
         this.esflistService.findPicturePath({id: id}).subscribe(result =>{
          if(result != null){
            this.DataModel.ImgArray = result.data;
          }
        })
      }
    })
    if(loadhot){
      this.homeServices.selectHotHouse({}).subscribe(result =>{
        if(result != null){
          console.log(result)
          this.HotHouseDataList = result.data
        }
      })
    }
  }

  //更多热门房源
   MoreClick(type){
    switch(type){
      case 'hothouse':
        this.appctrl.getRootNav().push(EsfListPage)
      break;
    }
  }
  //热门房源点击
  ItemClick(item){
    this.LoadData(item.houseid,false)
  }
}

