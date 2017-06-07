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
        SpeechListComponent
    ],
    imports: [BrowserModule,FormsModule,routing,ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
