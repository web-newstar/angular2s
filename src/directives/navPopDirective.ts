import { Directive, ElementRef, Input,HostListener } from '@angular/core';
import { NavController, NavParams ,App} from 'ionic-angular';
import { TabsPage } from '../pages/main/tabs/tabs';
import {_} from 'underscore'

@Directive({ selector: '[goMain]' })
export class goMainDirective {
    constructor(el: ElementRef,public navctrl:NavController,public appctrl:App) {
       //el.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('click') onClick() {
        console.log("123")
        this.appctrl.getRootNav().setRoot(TabsPage);
        // this.navctrl.popToRoot()
        // this.navctrl.getViews()
    }
}