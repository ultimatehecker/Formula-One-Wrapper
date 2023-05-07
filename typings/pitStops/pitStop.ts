export default class PitStop {

    public driverId: any;
    public lap: any;
    public stop: any;
    public time: any;
    public duration: any;

    constructor(pitStopParser: any) {
        this.driverId = pitStopParser.driverId
        this.lap = parseInt(pitStopParser.lap);
        this.stop = parseInt(pitStopParser.stop);
        this.time = pitStopParser.time
        this.duration = pitStopParser.duration
    }
}