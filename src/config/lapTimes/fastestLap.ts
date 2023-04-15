import AverageSpeed from "./averageSpeed";
import Time from "./time";

export default class FastestLap {

    public rank: number;
    public lap: number;
    public time: Time;
    public averageSpeed: AverageSpeed;

    constructor(fastestLapParser: any) {
        this.rank = parseInt(fastestLapParser.rank)
        this.lap = parseInt(fastestLapParser.lap)
        this.time = new Time(fastestLapParser.Time)
        this.averageSpeed = new AverageSpeed(fastestLapParser.averageSpeed)
    }
}