import { Injectable, Pipe } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'decoratetypepipe'
})
@Injectable()
export class Decoratetypepipe {
  transform(value, args) {
    var ret = ''
    switch(value){
      case 'mp':ret = '毛坯';break;
      case 'jz':ret = '简单装修';break;
      case 'zz':ret = '中等装修';break;
      case 'jz':ret = '精装修';break;
      case 'hz':ret = '豪华装修';break;
      default:ret = '未知';
    }
    return ret;
  }
}
