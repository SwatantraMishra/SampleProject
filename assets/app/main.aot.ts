import './polyfills';
import { platformBrowser } from "@angular/platform-browser";
import { enableProdMode } from "@angular/core";

import { AppModuleNgFactory } from './app.module.ngfactory';

GET / 200 644.370 ms - 464
GET /js/app/bundle.js 200 4.855 ms - 3486
GET /stylesheets/style.css 200 9.766 ms - 324
GET /favicon.ico 200 2.928 ms - 464
GET /stylesheets/style.css 304 1.782 ms - -


enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
