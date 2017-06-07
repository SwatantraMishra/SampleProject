import {Component} from "@angular/core";
@Component({
    selector:'app-speeches',
    template:
        `
    <div class="row" style="margin-top: 10px">
        <div class="col-sm-4"> <app-speech-list></app-speech-list> </div>
        <div class="col-sm-8">Hi Mifddle </div>
    </div>
    
    `
})

export class SpeechesComponent{}