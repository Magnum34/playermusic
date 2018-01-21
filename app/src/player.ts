import $ = require("jquery");

export class Player {

    private file : JQuery;

    private audio : HTMLAudioElement;

    constructor(file: string, audio: string){
        this.file = $(file);
        this.audio =  <HTMLAudioElement>document.getElementById(audio);
    }

    public LoadFile(){
        let _this = this;
        this.file.on('change', null, (e) => {
            let input = <HTMLInputElement>e.target;
            _this.audio =  <HTMLAudioElement>document.getElementById("player");
            _this.audio.src = URL.createObjectURL(input.files[0]);
            _this.audio.load();
            _this.Visualizer(_this.audio);
        });
    }

    public Visualizer(audio: HTMLAudioElement){
        var context = new AudioContext();
        var src = context.createMediaElementSource(audio);
        var analyser = context.createAnalyser();

        var canvas = <HTMLCanvasElement>document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var ctx = canvas.getContext("2d");

        src.connect(analyser);
        analyser.connect(context.destination);

    }
}