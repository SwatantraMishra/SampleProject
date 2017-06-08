import {Component, Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {NgForm} from "@angular/forms";
import {SpeechService} from "./speech.service";
import {FileItem, FileUploader} from 'ng2-file-upload';

import {Speech} from "./speech.model";
import {getResponseURL} from "@angular/http/src/http_utils";
@Component({
    selector:'app-speech-input',
    templateUrl:'speech-input.component.html',
    styles:[
        `
        .marginLeft10{
            margin-left:10px;
        }
        
        `
    ]
})
@Injectable()
export class SpeechInputComponent{

    constructor(http:Http, private speechService:SpeechService){}
    file;

    onSubmit(f: NgForm){

        if(f.valid)
        {
          var fileName=  this.uploader.uploadAll();

            this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
                var responsePath = JSON.parse(response);
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Path", responsePath.err_desc.path);// the url will be in the response
                console.log( "f.value =>",f.value );
                var user_data = new Speech(f.value.title,f.value.author,1,new Date(),[responsePath.err_desc.path],f.value.description);
                this.speechService.addSpeech(user_data,f);
            };
        }
    }

    onChange(event){
        console.log("event>>",event);
         this.file = event.srcElement.files;
        console.log(this.file.file);


    }
    public uploader:FileUploader = new FileUploader({url:'http://localhost:3001/upload'});
}