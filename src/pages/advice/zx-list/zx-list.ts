import { ViewChild,Component } from '@angular/core';
import { NavController, NavParams,ViewController,App,Navbar  } from 'ionic-angular';
import { TabsPage } from '../../main/tabs/tabs';
import { ZxListDetailPage } from '../zx-list-detail/zx-list-detail'
import { adviceServices } from './../../../api/adviceServices';
import{_} from 'underscore'
@Component({
  selector: 'page-zx-list',
  templateUrl: 'zx-list.html'
})
export class ZxListPage {
  @ViewChild(Navbar) navBar: Navbar;
  data:any = {}
  bdkxDataList:any=[]
  gnzxDataList:any=[]
  zcfgDataList:any=[]
 

  PageObject:any={
    bdkxPageSize:10,
    bdkxPageNum:0,
    bdkxCanLoadMore:true,
    gnzxPageSize:10,
    gnzxPageNum:0,
    gnzxCanLoadMore:true,
    zcfgPageSize:10,
    zcfgPageNum:0,
    zcfgCanLoadMore:true,
  }
  constructor(public navCtrl: NavController,
    private navController: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appctrl:App,
    public adviceServices:adviceServices) {
    
  }

  ionViewDidLoad() {
     this.viewCtrl.setBackButtonText('');
      this.navBar.backButtonClick = (e:UIEvent)=>{
      this.appctrl.getRootNav().push(TabsPage);
    }
  }

  TypeClick(){
    switch(this.data.zx){
      case 'bdkx':
        if(this.bdkxDataList.length == 0){
          this.LoadData('bdkx')
        }
      break;
       case 'gnzx':
        if(this.gnzxDataList.length == 0){
          this.LoadData('gnzx')
        }
      break;
       case 'zcfg':
        if(this.zcfgDataList.length == 0){
          this.LoadData('zcfg')
        }
      break;
    }
  }

  LoadData(type){
    let PostData = {}
    switch(type){
      case 'bdkx':
        //加载数据PageObject
        this.PageObject.bdkxPageNum ++ ;
        PostData ={
          pagenum:this.PageObject.bdkxPageNum,
          pagesize:this.PageObject.bdkxPageSize,
          firstType:"esf",
          secondType:"bdkx"
        }
       break;
      case 'gnzx': 
        //加载数据PageObject
        this.PageObject.gnzxPageNum ++ ;
        PostData ={
          pagenum:this.PageObject.gnzxPageNum,
          pagesize:this.PageObject.gnzxPageSize,
          firstType:"esf",
          secondType:"gnzx"
        }
      break;
      case 'zcfg': 
        //加载数据PageObject
        this.PageObject.zcfgPageNum ++ ;
        PostData ={
          pagenum:this.PageObject.zcfgPageNum,
          pagesize:this.PageObject.zcfgPageSize,
          firstType:"esf",
          secondType:"zcfg"
        }
      break;
    }
    //加载数据
    this.adviceServices.findNews(PostData).subscribe(result =>{
        if(result != null){
          var self = this;
          switch(type){
              case 'bdkx':
                if(result.data.length == 0){
                  this.PageObject.bdkxCanLoadMore = false
                }
                _.each(result.data,function(obj){
                  self.bdkxDataList.push(obj)
                });
              break;
              case 'gnzx': 
                if(result.data.length == 0){
                  this.PageObject.gnzxCanLoadMore = false
                }
                _.each(result.data,function(obj){
                  self.gnzxDataList.push(obj)
                });
                break;
              case 'zcfg':
                if(result.data.length == 0){
                  this.PageObject.zcfgCanLoadMore = false
                }
                _.each(result.data,function(obj){
                  self.zcfgDataList.push(obj)
                });
              break;
            }
        }
      })
  }

  doLoadData(infiniteScroll,type){
    setTimeout(() => {
      this.LoadData(type)
        infiniteScroll.complete();
      }, 500);
  }

  ItemClick(item){
     this.appctrl.getRootNav().push(ZxListDetailPage,{id:item.newsId}); 
  }
}
