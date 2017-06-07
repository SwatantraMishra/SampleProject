import {Routes,RouterModule} from '@angular/router';
import {MessagesComponent} from './message/messages.component'
import {AuthenticationComponent} from './user/authentication.component'

import {AUTH_ROUTES} from './user/auth.router'
import {SpeechesComponent} from "./speech/speeches.component";

const APP_ROUTE:Routes=[
    {path:'',redirectTo:'/messages',pathMatch:'full'},
    { path:'messages',component:MessagesComponent},
    { path:'speech',component:SpeechesComponent},
    {path:'auth',component:AuthenticationComponent,children:AUTH_ROUTES}

]

export const routing=RouterModule.forRoot(APP_ROUTE);




