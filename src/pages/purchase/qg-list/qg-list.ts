import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { purchaseServices } from './../../../api/purchaseServices';
import {WebConfig} from '../../../config/config'
import {_} from 'underscore'

import { QgListDetailPage } from '../qg-list-detail/qg-list-detail';

@Component({
  selector: 'page-qg-list',
  templateUrl: 'qg-list.html'
})
export class QgListPage {

  DataList:any = [];
  PageSize:number = 10;
  PageNum:number = 0
  BaseImgUrl = WebConfig.BaseImgUrl;
  CanLoadMore = true;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public purchaseServices:purchaseServices) {}


  LoadData(){
    this.PageNum ++
    let PostData ={
      pagenum:this.PageNum,
      pagesize:this.PageSize
    }
    this.purchaseServices.findDemand(PostData).subscribe(result =>{
      if(result != null){
        if(result.data.length == 0){
          this.CanLoadMore = false;
        }
        var self = this;
        console.log(result.data[0])
        _.each(result.data,function(obj){
          self.DataList.push(obj)
        })
        console.log(self.DataList)
      }
    })
  }

  doLoadData(infiniteScroll) {
    setTimeout(() => {
     this.LoadData()
      infiniteScroll.complete();
    }, 500);
  }

  ionViewDidLoad() {
    //加载数据
    this.LoadData()
  }

  ItemClick(item){
    this.navCtrl.push(QgListDetailPage,{id:item.demandId});
  }

}
