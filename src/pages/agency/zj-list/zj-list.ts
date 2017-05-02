import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';
import { TabsPage } from '../../main/tabs/tabs';
import { ZjListDetailPage } from '../zj-list-detail/zj-list-detail'

import {WebConfig} from '../../../config/config'
import { agencyServices } from './../../../api/agencyServices';
import { _ } from 'underscore'
@Component({
  selector: 'page-zj-list',
  templateUrl: 'zj-list.html'
})
export class ZjListPage {
   ShowRegion:boolean=false;

   DataList:any = [];
  PageSize:number = 10;
  PageNum:number = 0
  BaseImgUrl = WebConfig.BaseImgUrl;
  CanLoadMore = true;
  data:any = {}
  RegionList:any[] = [
    {name:"不限",code:null,active:false},
    {name:"莲都",code:'331102',active:false},
    {name:"龙泉",code:'331181',active:false},
    {name:"青田",code:'331121',active:false},
    {name:"缙云",code:'331122',active:false},
    {name:"庆元",code:'331126',active:false},
    {name:"松阳",code:'331124',active:false},
    {name:"景宁",code:'331127',active:false},
    {name:"云和",code:'331125',active:false},
    {name:"开发区",code:'331128',active:false}];
  SelectRegionCode:any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,public appctrl:App,public agencyServices:agencyServices ) {}

  ionViewDidLoad() {
    this.LoadData()
  }

  //区域点击
  SearchTypeClick(type){
    switch(type){
      case 'region':
        this.ShowRegion = !this.ShowRegion
      break;
    }
  }

  ContentClick(){
    this.ShowRegion = false;
  }
  goMain(){
    this.appctrl.getRootNav().push(TabsPage);
  }

  LoadData(){
    if(this.PageNum == 0){
      this.CanLoadMore = true;
      this.DataList = []
    }
    this.PageNum ++
    let PostData ={
      pagenum:this.PageNum,
      pagesize:this.PageSize,
      name:this.data.searchText,
      districtId:this.SelectRegionCode
    }
    this.agencyServices.findAgency(PostData).subscribe(result =>{
      if(result != null){
        if(result.data.length == 0){
          this.CanLoadMore = false;
        }
        var self = this;
        _.each(result.data,function(obj){
          self.DataList.push(obj)
        })
      }
    })
  }

  doLoadData(infiniteScroll){
    setTimeout(() => {
      this.LoadData()
        infiniteScroll.complete();
      }, 500);
  }
  //列表项单机
  ItemClick(item){
    console.log(item)
    this.navCtrl.push(ZjListDetailPage,{id:item.agencyId});
  }
  //搜索内容改变
  SeachTextChange(){
    this.PageNum = 0;
    this.LoadData();
  }
  //区域搜索
  RegionClick(item){
    this.PageNum = 0;
    this.SelectRegionCode = item.code;
    this.LoadData();
    this.ShowRegion = !this.ShowRegion
  }

}
