import {Component, OnInit, Input } from "@angular/core";
import { UserService } from "./user.service";

@Component({
    selector:'app-user-list',
    templateUrl:'user-list.component.html'
})
export class UserListComponent implements OnInit{

    public users:any[]=[];

    user_id:Number;
    items:any;
    data:any;
    errorMessage:any;

    constructor( private userService: UserService){ }

    ngOnInit(): void {

        this.users = this.userService.getAllUsers();

        setTimeout(()=>{
             this.users = this.userService.getAllLocalData();
             console.log( "LOCAL DATA : ",this.users );

        },1000);

        // Experiment Data
        // setTimeout(()=>{
        //     this.items = this.userService.getJsonResp("India");
        //     console.log("SUBS : ",this.items);
        //     this.items.subscribe(
        //                             data =>{ this.items = data;console.log("Got Data : ",this.items)},
        //                             err => console.log('Error ==> ',err),
        //                             () => console.log('get actual visits complete')
        //                         );

        //     console.log("Expreiment data: ",this.data);
        //     console.log("Error Msg : ",this.errorMessage);
        // },1000)
    }

    onClick(id: Number): void{
        // alert("Clicked!");
        console.log( "ID : ",id );
        this.user_id = id;
        this.userService.getSpecificUserDetails( id );
    }

}