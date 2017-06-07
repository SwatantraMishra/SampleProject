export class Speech
{
    title:string;
    author:string;
    date:string;
    file:[string];
    description:string;

    constructor(title:string,author:string,date:string,file:[string],description:string)
    {
    this.title=title;
    this.author=author;
    this.date=date;
    this.file=file;
    this.description=description;

    }
}