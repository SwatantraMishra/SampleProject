import {Routes,RouterModule} from '@angular/router';
import {MessagesComponent} from './message/messages.component'
import {AuthenticationComponent} from './user/authentication.component'

import {AUTH_ROUTES} from './user/auth.router'
import {SpeechesComponent} from "./speech/speeches.component";
import {UsersComponent} from "./user/users.component";
import {USER_ROUTES} from "./user/user.router";
import {SPEECH_ROUTES} from "./speech/speech.router";


const APP_ROUTE:Routes=[
    { path:''           , redirectTo:'/user',               pathMatch:'full'        },
    { path:'messages'   , component:MessagesComponent                                   },
    { path:'speech'     , component:SpeechesComponent,          children:SPEECH_ROUTES  },
    { path:'user'       , component:UsersComponent,             children:USER_ROUTES    },
    { path:'auth'       , component:AuthenticationComponent,    children:AUTH_ROUTES    }
]

export const routing=RouterModule.forRoot(APP_ROUTE);