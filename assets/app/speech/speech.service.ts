
import {Speech} from "./speech.model";
export class SpeechService{
    private speech:Speech[]=[];

    getSpeech(){
        return this.speech;
    }
}