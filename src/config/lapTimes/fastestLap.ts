import AverageSpeed from "./averageSpeed";
import Time from "./time";

export default class FastestLap {
    constructor(fastestLapParser: any) {
        this.rank = parseInt(fastestLapParser.rank)
        this.lap = parseInt(fastestLapParser.lap)
        this.time = new Time(fastestLapParser.Time)
        this.averageSpeed = new AverageSpeed(fastestLapParser.AverageSpeed)
    }

    rank: number
    lap: number
    time: Time
    averageSpeed: AverageSpeed
}