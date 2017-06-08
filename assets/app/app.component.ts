import { Component } from '@angular/core';
import { MessageService } from './message/message.service';
import { UserService } from './user/user.service';
import {SpeechService} from "./speech/speech.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers:[ MessageService,
                UserService,SpeechService
              ]
})

export class AppComponent {
 
}