import { Injectable, Pipe } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'houseusepipe'
})
@Injectable()
export class Houseusepipe {
  transform(value, args) {
    var ret = ''
    switch(value){
      case 'zz':ret = '普通住宅';break;
      case 'sp':ret = '商铺';break;
      case 'bs':ret = '别墅';break;
      case 'qt':ret = '其他';break;
      default:ret = '未知';
    }
    return ret;
  }
}
