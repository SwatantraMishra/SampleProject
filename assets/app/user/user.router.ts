import{Routes} from '@angular/router';

import {UserMiddlePartComponent} from "./user-middle-part.component";
import {UserInputComponent} from "./user-input.component";


export const USER_ROUTES:Routes=[
    {path:'',redirectTo:'users',pathMatch:'full'},
    {path:'user',component:UserInputComponent},
    {path:'Add',component:UserInputComponent},
    {path:'Edit',component:UserInputComponent}

]