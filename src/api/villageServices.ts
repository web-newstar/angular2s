import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {baseService} from './baseServices'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class villageServices {
    constructor(public http:Http,public baseService:baseService) { 
    }

    //获得小区列表
    public findVillage(data):any{
        return this.baseService.getData("villageController/findVillage",data)
    }
    //获得小区详情
    public findDetailsVillage(data):any{
        return this.baseService.getData("villageController/findDetailsVillage",data)
    }
    
}