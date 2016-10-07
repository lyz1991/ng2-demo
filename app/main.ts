/**
 * Created by lyz on 2016-10-06.
 */
require('reflect-metadata/Reflect.js')
require('zone.js/dist/zone.js')
require('../lib/flexible.js')
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
