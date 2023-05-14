import AverageSpeed from "./averageSpeed";
import Time from "./time";

export default class FastestLap {

    public rank: number; // TODO: figure out why this is a number
    public lap: number; // TODO: figure out why this is a number
    public time: Time;
    public averageSpeed: AverageSpeed;

    constructor(fastestLapParser: any) {
        this.rank = parseInt(fastestLapParser.rank)
        this.lap = parseInt(fastestLapParser.lap)
        this.time = new Time(fastestLapParser.Time)
        this.averageSpeed = new AverageSpeed(fastestLapParser.averageSpeed)
    }
}