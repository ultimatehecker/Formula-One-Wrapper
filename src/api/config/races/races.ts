import Circuit from "../circuits/circuit.js";

export default class Race {
    constructor(raceParser: any) {
        this.season = parseInt(raceParser.season);
        this.round = parseInt(raceParser.round);
        this.url = raceParser.url
        this.raceName = raceParser.raceName
        this.circuit = new Circuit(raceParser.Circuit);
        this.date = raceParser.date
        this.time = raceParser.time
    }

    season: number
    round: number
    url: string
    raceName: string
    circuit: Circuit
    date: any
    time: any
}