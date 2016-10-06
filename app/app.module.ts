import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { routing } from './app.routing';
import {app} from './app.components'
import {details} from './components/details/details'
import {login} from './components/login/login'


@NgModule({
    imports: [ BrowserModule, HttpModule,  routing],
    declarations: [login, details, app],
    bootstrap: [app]
})
export class AppModule { }
