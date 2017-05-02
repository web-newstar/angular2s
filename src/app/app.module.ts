import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//components
import { MyApp } from './app.component';
import { AboutPage } from '../pages/main/about/about';
import { ContactPage } from '../pages/main/contact/contact';
import { HomePage } from '../pages/main/home/home';
import { TabsPage } from '../pages/main/tabs/tabs';
import {NavgationRoutes} from './app.route';
import { EsfListPage } from '../pages/secondhandhouse/esf-list/esf-list';
import { EsfListDetailPage } from '../pages/secondhandhouse/esf-list-detail/esf-list-detail';
import { ZxqListPage } from '../pages/village/zxq-list/zxq-list';
import { ZxqListDetailPage } from '../pages/village/zxq-list-detail/zxq-list-detail';
import { ZjListPage } from '../pages/agency/zj-list/zj-list';
import { ZjListDetailPage } from '../pages/agency/zj-list-detail/zj-list-detail';
import { ZjListDetailHousePage } from '../pages/agency/zj-list-detail-house/zj-list-detail-house';
import { QgListPage } from '../pages/purchase/qg-list/qg-list';
import { QgListDetailPage } from '../pages/purchase/qg-list-detail/qg-list-detail';
import { ZxListPage } from '../pages/advice/zx-list/zx-list';
import { TypePagePage } from '../pages/myinfo/type-page/type-page';
import { GrInfoPagePage } from '../pages/myinfo/gr-info-page/gr-info-page';
import { GrInfoSuccePage } from '../pages/myinfo/gr-info-succe/gr-info-succe';
import { GrInfoFailurePage } from '../pages/myinfo/gr-info-failure/gr-info-failure';
import { GrInfoListPage } from '../pages/myinfo/gr-info-list/gr-info-list';
import { ZjInfoPagePage } from '../pages/myinfo/zj-info-page/zj-info-page';
import { ZjInfoSuccePage } from '../pages/myinfo/zj-info-succe/zj-info-succe';
import { ZjInfoListPage } from '../pages/myinfo/zj-info-list/zj-info-list';
//import { ZxListDetailPage } from '../pages/advice/zx-list-detail/zx-list-detail';
import { HomePagePage } from '../pages/myinfo/home-page/home-page';
import { ZxListDetailPage } from '../pages/advice/zx-list-detail/zx-list-detail';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//services
import { esflistService } from '../api/esflistServices';
import {baseService} from '../api/baseServices';
import {homeServices} from '../api/homeServices';
import {villageServices} from '../api/villageServices';
import {agencyServices} from '../api/agencyServices';
import {adviceServices} from '../api/adviceServices';
import {purchaseServices} from '../api/purchaseServices';

//directives
import {goMainDirective} from '../directives/goMainDirective';
//pipes
import {Dateformatpipe} from '../pipes/dateformatpipe'
import{Decoratetypepipe} from '../pipes/decoratetypepipe'
import{Directionpipe} from '../pipes/directionpipe'
import{Haspipe} from '../pipes/haspipe'
import{Houseusepipe} from '../pipes/houseusepipe'
import{Propertytypepipe} from '../pipes/propertytypepipe'
import{Structtypepipe} from '../pipes/structtypepipe'
import{Housetagpipe} from '../pipes/housetagpipe'

var AppComponents = [
    MyApp,AboutPage,ContactPage,HomePage,TabsPage,
    EsfListPage,EsfListDetailPage,ZxqListPage,ZxqListDetailPage,ZjListPage,
    ZjListDetailPage,QgListPage,ZxListPage,EsfListDetailPage,ZxqListDetailPage,
    ZjListDetailPage,HomePagePage,TypePagePage,GrInfoPagePage,GrInfoSuccePage,
    GrInfoFailurePage,ZjInfoPagePage,ZjInfoSuccePage,ZjListDetailHousePage,ZxListDetailPage,
    QgListDetailPage
]
var AppPipes=[
  Dateformatpipe,Decoratetypepipe,Directionpipe,Haspipe,Houseusepipe,
  Propertytypepipe,Structtypepipe,Housetagpipe
]

@NgModule({
  declarations: [
    ...AppComponents,
    goMainDirective,
    ...AppPipes
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      backButtonText: '返回'
    },{
       links:NavgationRoutes
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ...AppComponents,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    esflistService,
    baseService,
    homeServices,
    villageServices,
    agencyServices,
    adviceServices,
    purchaseServices
  ]
})
export class AppModule {}
