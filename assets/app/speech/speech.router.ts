import{Routes} from '@angular/router';
import {SpeechInputComponent} from "./speech-input.component";


export const SPEECH_ROUTES:Routes=[
    {path:'',redirectTo:'speechdetails',pathMatch:'full'},
    {path:'speechdetails',component:SpeechInputComponent},
    {path:'Add',component:SpeechInputComponent},
    {path:'Edit',component:SpeechInputComponent}
]