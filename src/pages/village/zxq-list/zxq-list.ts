import { Component } from '@angular/core';
import { NavController, NavParams ,App,ViewController} from 'ionic-angular';
import { TabsPage } from '../../main/tabs/tabs';
import { ZxqListDetailPage } from '../zxq-list-detail/zxq-list-detail'

import {WebConfig} from '../../../config/config'
import { villageServices } from './../../../api/villageServices';
import { _ } from 'underscore'
@Component({
  selector: 'page-zxq-list',
  templateUrl: 'zxq-list.html'
})
export class ZxqListPage {
  ShowRegion:boolean=false;
  ShowDealPrice:boolean =false;
  ShowHouseAge:boolean  =false;
  ShowMore:boolean = false;

   DataList:any = [];
  PageSize:number = 10;
  PageNum:number = 0
  BaseImgUrl = WebConfig.BaseImgUrl;
  CanLoadMore = true;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public appctrl:App,
    public viewCtrl:ViewController,
    public villageServices:villageServices
    ) {}

  ionViewDidLoad() {
     this.viewCtrl.setBackButtonText('');
     this.LoadData();
  }

  goMain(){
    this.appctrl.getRootNav().push(TabsPage);
  }

  //区域点击
  SearchTypeClick(type){
    switch(type){
      case 'region':
        this.ShowDealPrice = this.ShowHouseAge = this.ShowMore = false;
        this.ShowRegion = !this.ShowRegion
      break;
      case 'price':
        this.ShowRegion = this.ShowHouseAge = this.ShowMore = false;
        this.ShowDealPrice = !this.ShowDealPrice
        break;
      case 'houseage':
        this.ShowRegion = this.ShowDealPrice = this.ShowMore = false;
        this.ShowHouseAge = !this.ShowHouseAge
        break;
      case 'more':
        this.ShowRegion = this.ShowHouseAge = this.ShowDealPrice = false;
        this.ShowMore = !this.ShowMore
        break;
    }
  }

  ContentClick(){
    this.ShowDealPrice = this.ShowHouseAge = this.ShowMore = this.ShowHouseAge = false;
  }

  LoadData(){
    this.PageNum ++
    let PostData ={
      pagenum:this.PageNum,
      pagesize:this.PageSize
    }
    this.villageServices.findVillage(PostData).subscribe(result =>{
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

  ItemClick(item){
    console.log(item)
    this.navCtrl.push(ZxqListDetailPage,{id:item.id});
  }
}
