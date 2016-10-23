import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Component} from '@angular/core'
import {myconfig_top} from './child/personal';
@Component({
    selector: 'myconfig',
    template:"<myconfig_top [demo]='demo'></myconfig_top>"
})
@NgModule({
    imports: [CommonModule],
    declarations:[myconfig_top],
    exports :[myconfig_top]
})
export class config {
    demo = {
        name: '张而',
        sex: '男'
    }
}