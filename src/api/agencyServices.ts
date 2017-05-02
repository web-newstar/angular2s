import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {baseService} from './baseServices'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class agencyServices {
    constructor(public http:Http,public baseService:baseService) { 
    }

    //获得中介列表
    public findAgency(data):any{
        return this.baseService.getData("agencyController/findAgency",data)
    }
    //获得中介详情
    public findDetailsAgency(data):any{
        return this.baseService.getData("agencyController/findDetailsAgency",data)
    }
    //获得中介房屋 ?pagenum=1&pagesize=10&createdBy=831037952875696128
    public selectAllHouseDetail(data):any{
        return this.baseService.getData("houseController/selectAllHouseDetail",data)
    }

    
}