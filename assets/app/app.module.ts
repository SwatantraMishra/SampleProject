import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { MessageComponent } from "./message/message.component";
import { MessageListComponent } from "./message/message-list.component";
import { MessageInputComponent } from "./message/message-input.component";
import {HeaderComponent} from './header.component'
import {MessagesComponent} from './message/messages.component'
import {AuthenticationComponent} from './user/authentication.component'
import {routing} from './app.routing'
import {LogoutComponent} from './user/logout.component'
import {SigninComponent} from './user/signin.component'
import {SignupComponent} from './user/signup.component'
import {SpeechesComponent} from "./speech/speeches.component";
import {SpeechListComponent} from "./speech/speech-list.component";
import {UserListComponent} from "./user/user-list.component";
import {UserMiddlePartComponent} from "./user/user-middle-part.component";
import {UsersComponent} from "./user/users.component";
import {UserInputComponent} from "./user/user-input.component";
import {SpeechMiddlePartComponent} from "./speech/speech-middle-part.component";
import {SpeechInputComponent} from "./speech/speech-input.component";
@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        HeaderComponent,
        MessagesComponent,
        AuthenticationComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent,
        SpeechesComponent,
        SpeechListComponent,
        UserListComponent,
        UserMiddlePartComponent,
        UsersComponent,
        UserInputComponent,
        SpeechMiddlePartComponent,
        SpeechInputComponent
    ],
    imports: [BrowserModule,FormsModule,routing,ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
