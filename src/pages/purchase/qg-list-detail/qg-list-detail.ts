import { Component ,ViewChild} from '@angular/core';
import { NavController, NavParams, ViewController,Navbar,App} from 'ionic-angular';
import { TabsPage } from '../../main/tabs/tabs';
import { purchaseServices } from './../../../api/purchaseServices';
@Component({
  selector: 'page-qg-list-detail',
  templateUrl: 'qg-list-detail.html'
})
export class QgListDetailPage {
  @ViewChild(Navbar) navBar: Navbar
  DataModel:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl:ViewController,public appctrl:App,public purchaseServices:purchaseServices) {}

  ionViewDidLoad() {
    // this.viewCtrl.setBackButtonText('');
    //   this.navBar.backButtonClick = (e:UIEvent)=>{
    //   this.navCtrl.pop()
    // }

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
    this.purchaseServices.findDetailsVillage(PostData).subscribe(result =>{
      if(result != null){
        this.DataModel = result.data;
        //加载图片
      }
    })
  }

}
