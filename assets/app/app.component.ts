import { Component } from '@angular/core';
import { MessageService } from './message/message.service';
import { UserService } from './user/user.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers:[ MessageService,
                UserService
              ]
})

export class AppComponent {
 
}