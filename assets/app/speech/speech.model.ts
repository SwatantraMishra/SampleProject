export class Speech{
    
    title   : String;
    author  : String;
    user_id : Number;
    date    : Date;
    file    : [{}];
    description : String;

    constructor( title : String,author:String, user_id : Number, date : Date, file : [{}], description : String){
        this.title       = title;
        this.author      = author;
        this.user_id     = user_id;
        this.date        = date;
        this.file        = file;
        this.description = description;
    }
}