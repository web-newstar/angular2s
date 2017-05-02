import { Component,OnInit } from '@angular/core';

import { NavController,App } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { AboutPage} from '../about/about';
import { EsfListPage } from '../../secondhandhouse/esf-list/esf-list';
import { EsfListDetailPage } from '../../secondhandhouse/esf-list-detail/esf-list-detail';
import { ZxqListPage } from '../../village/zxq-list/zxq-list';
import { ZjListPage } from '../../agency/zj-list/zj-list';
import { QgListPage } from '../../purchase/qg-list/qg-list';
import { ZxListPage } from '../../advice/zx-list/zx-list';
import {WebConfig} from '../../../config/config'

import { homeServices } from './../../../api/homeServices';
import { _ } from 'underscore'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  HotHouseDataList:any = [];
  AgencyDataList:any = [];
  BaseImgUrl = WebConfig.BaseImgUrl;
  constructor(public navCtrl: NavController,public appctrl :App,public homeServices:homeServices) {
    this.HotHouseDataList = []
  }

   ngOnInit() {
     this.LoadData()
  }
  
  LoadData(){
    this.homeServices.selectHotHouse({}).subscribe(result =>{
      if(result != null){
        this.HotHouseDataList = result.data
      }
    })

    this.homeServices.selectExcellentAgency().subscribe(result =>{
      if(result != null){
        this.AgencyDataList = result.data
      }
    })
  }


  navClick(type){
    switch(type){
      //二手房
      case 'esf': this.appctrl.getRootNav().push(EsfListPage);break;
      //找小区
       case 'zxq': this.appctrl.getRootNav().push(ZxqListPage);break;
      //找中介
       case 'zzj': this.appctrl.getRootNav().push(ZjListPage);break;
      //求购信息
       case 'qgxx': this.appctrl.getRootNav().push(QgListPage);break;
      //房产咨询
       case 'fczx': this.appctrl.getRootNav().push(ZxListPage);break;
    }
  }
  //更多点击

  MoreClick(type){
    switch(type){
      case 'hothouse':
        this.appctrl.getRootNav().push(EsfListPage)
      break;
      case 'agency':
       this.appctrl.getRootNav().push(ZjListPage)
      break;
    }
  }

  //热门房源点击
  HotHouseItemClick(item){
    this.appctrl.getRootNav().push(EsfListDetailPage,{id:item.houseid})
  }

  //中介点击
  AgencyItemClick(item){

  }
}



