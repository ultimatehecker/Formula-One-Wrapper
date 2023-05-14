export default class PitStop {

    public driverId: string;
    public lap: number; // TODO: figure out why this is a number
    public stop: number; // TODO: figure out why this is a number
    public time: string;
    public duration: string;

    constructor(pitStopParser: any) {
        this.driverId = pitStopParser.driverId
        this.lap = parseInt(pitStopParser.lap);
        this.stop = parseInt(pitStopParser.stop);
        this.time = pitStopParser.time
        this.duration = pitStopParser.duration
    }
}