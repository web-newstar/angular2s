import { Injectable, Pipe } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'dateformatpipe'
})
@Injectable()
export class Dateformatpipe {
  transform(value, args) {
    console.log(args)
    console.log(value)
    if(typeof args == 'undefined' || args == null){
        return value;
    }
    try{
        return moment(value).format(args)
    }
    catch(e){
        console.log("error")
        return value
    }
  }
}
