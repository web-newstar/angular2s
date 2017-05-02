import { Injectable, Pipe } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'housetagpipe'
})
@Injectable()
export class Housetagpipe {
  transform(value, args) {
   var ret = ''
    switch(value){
      case 'zhongjie':ret = '中介房源';break;
      case 'geren':ret = '个人房源';break;
      default:ret = '未知';
    }
    return ret;
  }
}
