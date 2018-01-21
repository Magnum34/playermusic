import $ = require("jquery");

export class Player {

    private file : JQuery;

    private audio : JQuery;

    constructor(file: string, audio: string){
        this.file = $(file);
        
        this.audio = $(audio);

    }

    public LoadFile(){

    }
}