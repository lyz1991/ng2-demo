import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { routing } from './app.routing';
import {app} from './app.components'
import {details} from './components/details/details'
import {login} from './components/login/login'
import {config} from './components/config/config'


@NgModule({
    imports: [ BrowserModule, HttpModule,  routing, login, config],
    declarations: [details, app, login, config],
    bootstrap: [app]
})
export class AppModule { }
