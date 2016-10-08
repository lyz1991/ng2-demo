import {Component, Input} from '@angular/core'
@Component({
    selector: 'login_up',
    template: '<p>姓名:{{demo.name}}<br>性别: {{demo.sex}}</p>',
    styles: [String(require('./login_top.less'))]

})
export class login_top {
    @Input()
    demo:{};

}