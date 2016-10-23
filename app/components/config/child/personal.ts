import {Component, Input} from '@angular/core'
@Component({
    selector: 'myconfig_top',
    templateUrl: 'app/components/config/child/personal.html',
    styles: [String(require('./personal.less'))]

})
export class myconfig_top {
    @Input()
    demo:{};

}