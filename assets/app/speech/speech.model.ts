export class Speech{
    
    title   : String;
    user_id : Number;
    date    : Date;
    file    : [String];
    description : String;

    constructor( title : String, user_id : Number, date : Date, file : [String], description : String){
        this.title       = title;
        this.user_id     = user_id;
        this.date        = date;
        this.file        = file;
        this.description = description;
    }
}