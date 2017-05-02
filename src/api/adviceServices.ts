import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {baseService} from './baseServices'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class adviceServices {
    constructor(public http:Http,public baseService:baseService) { 
    }

    //咨询列表
    public findNews(data):any{
        return this.baseService.getData("newsController/findNews",data)
    }
    //咨询详情
    public findDetailNews(data):any{
        return this.baseService.getData("newsController/findDetailNews",data)
    }
    
}