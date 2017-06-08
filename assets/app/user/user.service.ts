import { Injectable, Input } from "@angular/core";
import { Http, Headers, Response, RequestOptions, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Users } from "./user.model";
import { NgForm } from '@angular/forms';

@Injectable()
export class UserService{

    constructor(private http : Http,private jsonp: Jsonp){
    }

    public users:any;
    public userDetails:any;
    
    addUser(user: Users,form: NgForm){
        console.log( 'DATA MODEL =>',user  );
        var data = { 
                        name : user.name, 
                        email: user.email
                   };

        console.log( 'SEND JSON =>',data  );

        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        var body = JSON.stringify(data);

        this.http.post('/users',body, options).subscribe(data => {
                    alert('User data saved successfully.');
                    console.log("addUser() =>",data);
                    form.resetForm();
            }, error => {
                alert("An error occurred! Please try again later.");
                console.log("Error=>",JSON.stringify(error.json()));
        });
 
    }

    getJsonResp(term: string){

        let headers = new Headers({'X-Mashape-Key':'Ns0SkjyRRomshq3PgEnGoz2Zkc71p1CYnWajsnphGctvrGt46W'});
    headers.append( 'Accept', 'application/json');


        // var search = new URLSearchParams()
        // search.set('action', 'opensearch');
        // search.set('search', term);
        // search.set('format', 'json');
        // return this.jsonp
        //             .get('http://localhost:3000/users?callback=JSONP_CALLBACK',{  headers: headers })
        //             .toPromise()
        //             .then((response) => { console.log("Response ==>",response); response.json();})
        //             .catch( (error =>  { console.log("Error ==> ",error); }) );

        return this.http.get('/users')
        .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log("Body ==> ",body);
        return body;
    } 

    updateUser(data: any,f: NgForm){
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        var body = JSON.stringify(data);

        this.http.post('/update',body, options).subscribe(data => {
                    alert('User details updated successfully.');
                    console.log("updateUser() =>",data);
                    f.resetForm();
                    window.location.href = "user";
            }, error => {
                alert("An error occurred! Please try again later.");
                console.log("Error=>",error.json());
        });

    }

    getAllUsers(){
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        this.http.get('/users', options).subscribe(data => {
                    console.log("getAllUsers() =>",data);
                    this.setData(data);
            }, error => {
                alert("An error occurred! Please try again later.");
                console.log(" Error=>",JSON.stringify(error.json()));
                return [];              
        });
        return [];
    }

    getSpecificUserDetails(user_id:Number){
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        return this.http.get('/users/'+user_id, options).subscribe(data => {
                    console.log("getSpecificUserDetails() => ",data );
                    this.setUserDetails( JSON.parse(data['_body']));
            }, error => {
                alert("An error occurred! Please try again later.");
                console.log("(getSpecificUserDetails): Error=>",JSON.stringify(error.json()));
        });
       
    }

    getLatestUserData(){
        console.log("USER DETAILS : ",this.userDetails);
        return this.userDetails;
    }

    setData(data){
        data = JSON.parse(data['_body']);
        this.users = data;
    }

    setUserDetails(data){
        this.userDetails = data;
        console.log("Data set successfully for user =>",this.userDetails );
    }

    getAllLocalData(){
        return this.users;
    }

}