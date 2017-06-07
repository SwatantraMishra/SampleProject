export class Users{
    name: String;
    email: String;
    user_id: Number;

    constructor(name:String, email: String, user_id?:Number){
        this.name = name;
        this.email = email;
        this.user_id = user_id;
    }

}