import Circuit from "../circuits/circuit";

export default class Race {

    public season: any;
    public round: any;
    public url: any;
    public raceName: any;
    public circuit: Circuit;
    public date: any;
    public time: any;


    constructor(raceParser: any) {
        this.season = parseInt(raceParser.season);
        this.round = parseInt(raceParser.round);
        this.url = raceParser.url
        this.raceName = raceParser.raceName
        this.circuit = new Circuit(raceParser.circuit);
        this.date = raceParser.date
        this.time = raceParser.time
    }
}