import {Component} from "@angular/core";
@Component({
    selector:'app-speeches',
    template:
        `
    <div class="row" style="margin-top: 10px">
        <div class="col-sm-4"> <app-speech-list></app-speech-list> </div>
        <div class="col-sm-8"><app-speech-middle-part></app-speech-middle-part> </div>
        <div class="col-sm-4">  </div>
        <div class="col-sm-8">
            
            <hr/>
            <input type="button" [routerLink]="['Add']" value="Add" class="btn btn-primary pull-right marginLeft10">
            <input type="button" [routerLink]="['Edit']" value="Edit" class="btn btn-primary pull-right">
        </div>

           </div>
    
    `
})

export class SpeechesComponent{}