import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Navbar,ViewController,App} from 'ionic-angular';
import { TabsPage } from '../../main/tabs/tabs';
import { ZjListDetailHousePage } from '../zj-list-detail-house/zj-list-detail-house';
import { agencyServices } from './../../../api/agencyServices';
@Component({
  selector: 'page-zj-list-detail',
  templateUrl: 'zj-list-detail.html'
})
export class ZjListDetailPage {
  @ViewChild(Navbar) navBar: Navbar
  DataModel:any = {}
  ParamsId:any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl:ViewController,public appctrl:App,public agencyServices:agencyServices) {}

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('');
      this.navBar.backButtonClick = (e:UIEvent)=>{
      this.navCtrl.pop()
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
    this.agencyServices.findDetailsAgency(PostData).subscribe(result =>{
      if(result != null){
        this.DataModel = result.data;
      }
    })
  }

  //查看更多房源
  ShowMoreHouse(){
    if(this.DataModel.totalCount >0)
      this.appctrl.getRootNav().push(ZjListDetailHousePage,{id:this.DataModel.createdById});
  }

}
