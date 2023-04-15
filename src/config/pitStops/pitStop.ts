export default class PitStop {

    public driverId: string;
    public lap: number;
    public stop: number;
    public time: number;
    public duration: number;

    constructor(pitStopParser: any) {
        this.driverId = pitStopParser.driverId
        this.lap = parseInt(pitStopParser.lap);
        this.stop = parseInt(pitStopParser.stop);
        this.time = pitStopParser.time
        this.duration = pitStopParser.duration
    }
}