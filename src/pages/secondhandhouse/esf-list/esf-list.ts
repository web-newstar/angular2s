import { Component } from '@angular/core';
import { App,NavController,ViewController } from 'ionic-angular';  
import { EsfListDetailPage } from '../esf-list-detail/esf-list-detail';
import * as $ from "jquery";
import { TabsPage } from '../../main/tabs/tabs';

import { esflistService } from './../../../api/esflistServices';
import { _ } from 'underscore'
import {WebConfig} from '../../../config/config'


//@IonicPage()
@Component({
  selector: 'page-esf-list',
  templateUrl: 'esf-list.html'
})
export class EsfListPage {
    ShowRegion:boolean=false;
  ShowDealPrice:boolean =false;
  ShowHouseAge:boolean  =false;
  ShowMore:boolean = false;

  DataList:any = [];
  PageSize:number = 10;
  PageNum:number = 0
  BaseImgUrl = WebConfig.BaseImgUrl;
  CanLoadMore = true;

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


  constructor( private appctrl:App,public navCtrl: NavController,public viewCtrl:ViewController,public esflistService:esflistService) {
    this.DataList = []
  }

 goMain(){
     this.appctrl.getRootNav().push(TabsPage);
  }
  
  LoadData(){
    this.PageNum ++
    let PostData ={
      pagenum:this.PageNum,
      pagesize:this.PageSize
    }
    this.esflistService.getFindHouseByAjax(PostData).subscribe(result =>{
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
    //init status
   
    //  $(".screening-box span a").click(function() {
    //   var typeSpan = $(this).parent("span");
    //   var typeState = typeSpan.hasClass("active");
    //   if (typeState == true) {
    //     typeSpan.removeClass("active");
    //   } else {
    //     typeSpan.addClass("active").siblings("span").removeClass("active");
    //   }
    // });
    // //内容盒子切换
    
    // $("#locationList").click(function(){
    //   $(".locationCon").slideToggle();
    //   $(".priceCon,.areaCon,.moreCon,.validationCon,.typeCon").hide();
    // });
    // $("#priceList").click(function(){
    //   $(".priceCon").slideToggle();
    //   $(".locationCon,.areaCon,.moreCon,.validationCon,.typeCon").hide();
    // });
    // $("#areaLsit").click(function(){
    //   $(".areaCon").slideToggle();
    //   $(".priceCon,.locationCon,.moreCon,.validationCon,.typeCon").hide();
    // });
    // $("#moreList").click(function(){
    //   $(".moreCon").slideToggle();
    //   $(".priceCon,.areaCon,.locationCon,.validationCon,.typeCon").hide();
    // });
    // $("#validationList").click(function(){
    //   $(".validationCon").slideToggle();
    //   $(".priceCon,.areaCon,.locationCon,.moreCon,.typeCon").hide();
    // });
    // $("#typeList").click(function(){
    //   $(".typeCon").slideToggle();
    //   $(".priceCon,.areaCon,.locationCon,.moreCon,.validationCon").hide();
    // });
    // //区域选择
    // $(".locationList-box li").click(function(){
    //   $(this).addClass("active").siblings().removeClass("active");
    // });
    //  //价格选择
    // $(".priceList-box li").click(function(){
    //   $(this).addClass("active").siblings().removeClass("active");
    // });
    //  //面积选择
    // $(".areaList-box li").click(function(){
    //   $(this).addClass("active").siblings().removeClass("active");
    // });
    //  //更多选择
    // $(".moreList-box li span").click(function(){
    //   $(this).addClass("active").siblings().removeClass("active");
    // });
    // //验证房源
    // $(".validationList-box li").click(function(){
    //   $(this).addClass("active").siblings().removeClass("active");
    // });
    // //类型
    // $(".typeList-box li").click(function(){
    //   $(this).addClass("active").siblings().removeClass("active");
    // });
    // //清空筛选条件
    // $("#filtrate-reset").click(function(){
    //   $(".locationList-box li,.priceList-box li,.areaList-box li,.moreList-box li span,.validationList-box li,.typeList-box li").removeClass("active");
    // });
    // //确定
    // $(".determine-but").click(function(){
    //   $(".moreCon").hide();
    //   $(".screening-box span").removeClass("active");
    // });
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

  ItemClick(item){
    console.log(item)
    this.navCtrl.push(EsfListDetailPage,{id:item.houseId});
  }

}
