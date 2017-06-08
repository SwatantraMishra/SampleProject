import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Router, ActivatedRoute, Params} from '@angular/router'; 

import { UserService } from "./user.service";
import { Users } from "./user.model";

@Component({
    selector:'app-user-input',
    templateUrl:'user-input-component.html'
})

@Injectable()
export class UserEditComponent implements OnInit{

    public name : String = "";
    public email : String = "";
    public user_id : Number = -1;

    public userDetail : any;


    constructor( private userService: UserService,private activatedRoute: ActivatedRoute,private router: Router){
    }


    ngOnInit(): void {
        // console.log("Edit => ngOnInit");
        setTimeout(()=>{ this.showData(); },1000);
            
    }

    showData(){
        this.userDetail = this.userService.getLatestUserData();
        // console.log("Show Data : ",this.userDetail)
        this.name = this.userDetail.name;
        this.email = this.userDetail.email;
        this.user_id = this.userDetail.user_id;
        // console.log( this.name,'   ',this.email );
    }

    onSubmit(f: NgForm) {
        if(f.valid){
            // console.log( "JSON : ",f.value );
            f.value["user_id"] = this.user_id;
            this.userService.updateUser(f.value,f);
        }
    }


}