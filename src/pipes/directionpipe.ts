import { Injectable, Pipe } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'directionpipe'
})
@Injectable()
export class Directionpipe {
  transform(value, args) {
    var ret = ''
    switch(value){
      case 'd':ret = '朝东';break;
      case 'x':ret = '朝西';break;
      case 'n':ret = '朝南';break;
      case 'b':ret = '朝北';break;
      default:ret = '未知';
    }
    return ret;
  }
}
