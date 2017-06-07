import {Component} from "@angular/core";
@Component({
    selector:'app-users',
    template:
            `
        <div class="row" style="margin-top: 10px">
            <div class="col-sm-4"> <app-user-list></app-user-list> </div>
            <div class="col-sm-8"> <app-user-middle-part></app-user-middle-part> </div>
           
            <div class="col-sm-4"> </div>
            <div class="col-sm-8">
                <hr/>
            <input class="btn btn-primary pull-right marginLeft10" type="button" [routerLink]="['Add']" value="Add" />
            <input class="btn btn-primary pull-right" type="button" [routerLink]="['Edit']" value="Edit" />
            </div>
        </div>
    
            `,
    styles:[
        `
        .marginLeft10{
            margin-left: 10px;
        }
        
        
        `
    ]
})
export class UsersComponent{}