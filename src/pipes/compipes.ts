import { Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'pipname'
})

export class Pipname implements PipeTransform{
    constructor(){}

    transform(data:string):string{
        var retdata:string  = '';
        switch(data){
            case "1":retdata = '张三';break;
            case "2":retdata = '李四';break;
            case "3":retdata = '王五';break;
        }
        return retdata;
    }
}