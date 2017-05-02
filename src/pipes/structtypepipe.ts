import { Injectable, Pipe } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'structtypepipe'
})
@Injectable()
export class Structtypepipe {
  transform(value, args) {
    var ret = ''
    switch(value){
      case 'pc':ret = '平层';break;
      case 'fs':ret = '复式';break;
      case 'yc':ret = '跃层';break;
      case 'cc':ret = '错层';break;
       case 'kj':ret = '开间';break;
      default:ret = '未知';
    }
    return ret;
  }
}
