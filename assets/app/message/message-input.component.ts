import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MessageService} from './message.service';

@Component({
    selector:'app-message-input',
    templateUrl:'./message-input-component.html'
})

export class MessageInputComponent{

    constructor(private messageService:MessageService){}
onSubmit(form:NgForm){
   
    let message={
        content:form.value.content,
        username:"Swatantra"
    }
    this.messageService.addMessage(message);
    form.resetForm();
}
}