import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {baseService} from './baseServices'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class purchaseServices {
    constructor(public http:Http,public baseService:baseService) { 
    }

    //求购列表
    public findDemand(data):any{
        return this.baseService.getData("demandController/findDemand",data)
    }
    //求购详情
    public findDetailsVillage(data):any{
        return this.baseService.getData("demandController/getDemandDetails",data)
    }
    
}