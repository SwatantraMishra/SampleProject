import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { UserService } from "./user.service";
import { Users } from "./user.model";


@Component({
    selector:'app-user-input',
    templateUrl:'user-input-component.html'
})

@Injectable()
export class UserInputComponent{

    public name:String="";
    public email:String="";

    constructor(private http : Http, private userService: UserService){
    }

    onSubmit(f: NgForm) {
        if(f.valid){
            // console.log( "f.value =>",f.value );
            var user_data = new Users(f.value.name, f.value.email);
            this.userService.addUser(user_data,f);
        }
    }
}