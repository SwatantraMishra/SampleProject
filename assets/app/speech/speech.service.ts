import { Injectable, Input } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/operator/add/map';
import { NgForm } from '@angular/forms';
import {Speech} from "./speech.model";

@Injectable()
export class SpeechService{

    constructor(private http : Http){
    }

    public users:any;
    public userDetails:any;

    addSpeech(speech: Speech,form: NgForm){
        console.log( 'DATA MODEL =>',speech  );
        let data = {
            title : speech.title,
            description:speech.description,
            author: speech.author,
            user_id: speech.user_id,
            date:speech.date,
            file:speech.file

        };

        console.log( 'SEND JSON =>',data  );

        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        var body = JSON.stringify(data);

        this.http.post('/speeches',body, options).subscribe(data => {
            alert('speech data saved successfully.');
            console.log("speech() =>",data);
            form.resetForm();
        }, error => {
            alert("An error occurred! Please try again later.");
            console.log("Error=>",JSON.stringify(error.json()));
        });
    }

    updateSpeech(data: any){
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        var body = JSON.stringify(data);

        this.http.post('/update',body, options).subscribe(data => {
            alert('User details updated successfully.');
            console.log("updateUser() =>",data);
        }, error => {
            alert("An error occurred! Please try again later.");
            console.log("Error=>",error.json());
        });

    }

    getAllSpeech(){
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

    deleteSpeech(user_id: Number){
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        return this.http.get('/delete/'+user_id, options).subscribe(data => {
            console.log("deleteUser() =>",data);
        }, error => {
            alert("An error occurred! Please try again later.");
            console.log(" Error=>",JSON.stringify(error.json()));
            return [];
        });
    }

    getSpecificUserDetails(user_id:String){
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        return this.http.get('/users/'+user_id, options).subscribe(data => {
            this.setUserDetails(data['_body']);
        }, error => {
            alert("An error occurred! Please try again later.");
            console.log("(getSpecificUserDetails): Error=>",JSON.stringify(error.json()));
        });

    }

    getLatestUserData(){
        return this.userDetails;
    }

    setData(data){
        this.users = data['_body'];
    }

    setUserDetails(data){
        this.userDetails = data;
        console.log("Data set successfully for user =>",this.userDetails );
    }

    getAllLocalData(){
        return this.users;
    }

}