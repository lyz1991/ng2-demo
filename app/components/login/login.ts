import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Component} from '@angular/core'
import {login_top} from './child/login_top';
@Component({
    selector: 'login',
    template:"<login_up [demo]='demo'></login_up>"
})
@NgModule({
    imports: [CommonModule],
    declarations:[login_top],
    exports :[login_top]
})
export class login {
    demo = {
        name: '张三',
        sex: '男'
    }
}
