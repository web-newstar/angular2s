import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {baseService} from './baseServices'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class esflistService {
    constructor(public http:Http,public baseService:baseService) { 
    }

    //获得二手房列表数据
    public getFindHouseByAjax(data):any{
        return this.baseService.getData("houseController/getFindHouseByAjax",data)
    }
    //获得二手房详情
    public getBdcHosueDetails(data):any{
        return this.baseService.getData("houseController/getBdcHosueDetails",data)
    }
    //获得图片
    public findPicturePath(data):any{
        return this.baseService.getData("attachmentController/findPicturePath",data)
    }
    
}