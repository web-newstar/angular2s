import { Injectable, Pipe } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'propertytypepipe'
})
@Injectable()
export class Propertytypepipe {
  transform(value, args) {
    var ret = ''
    switch(value){
      case 'spf':ret = '商品房';break;
      case 'sz':ret = '商住两用';break;
      case 'jj':ret = '经济适用房';break;
      case 'sy':ret = '使用权';break;
      case 'gf':ret = '公房';break;
       case 'qt':ret = '其他';break;
      default:ret = '未知';
    }
    return ret;
  }
}
