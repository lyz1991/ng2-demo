/**
 * Created by lyz on 2016-10-06.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {details} from './components/details/details';
import {login} from './components/login/login';
import {config} from './components/config/config';
const appRoutes: Routes = [
    {path: '',
      component: config
    },
    {
        path: 'login',
        component: login
    },
    {
        path: 'details',
        component: details
    },
    {
        path: 'config',
        component: config
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);