import Circuit from "../circuits/circuit";

export default class Race {

    public season: number;
    public round: number;
    public url: string;
    public raceName: string;
    public circuit: Circuit;
    public date: number;
    public time: number;


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