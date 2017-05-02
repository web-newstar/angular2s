import { Injectable, Pipe } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'haspipe'
})
@Injectable()
export class Haspipe {
  transform(value, args) {
    var ret = ''
    switch(value){
      case 0:ret = '无';break;
      case 1:ret = '有';break;
      case 2:ret = '未知';break;
      default:ret = '未知';
    }
    return ret;
  }
}
