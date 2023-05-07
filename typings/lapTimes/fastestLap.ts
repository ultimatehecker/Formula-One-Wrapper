import AverageSpeed from "./averageSpeed";
import Time from "./time";

export default class FastestLap {

    public rank: any;
    public lap: any;
    public time: Time;
    public averageSpeed: AverageSpeed;

    constructor(fastestLapParser: any) {
        this.rank = parseInt(fastestLapParser.rank)
        this.lap = parseInt(fastestLapParser.lap)
        this.time = new Time(fastestLapParser.Time)
        this.averageSpeed = new AverageSpeed(fastestLapParser.averageSpeed)
    }
}