import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Message} from './message.model';

@Component({
selector:'app-message',
templateUrl:'./message.component.html',
    styles:[
    `
.author{
width:80%;
display:inline-block;
font-size:12px;
font-style:italic;
}
.config{
width:19%;
display:inline-block;
text-align:right;
font-size:12px;
}

    `
    ]
})

export class MessageComponent{
@Input() message:Message;
@Output() editClicked=new EventEmitter<string>();
color="red";
onEdit(){
    this.editClicked.emit('the new value');
}

}