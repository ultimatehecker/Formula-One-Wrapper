export default class PitStop {
    constructor(pitStopParser: any) {
        this.driverId = pitStopParser.driverId
        this.lap = parseInt(pitStopParser.lap);
        this.stop = parseInt(pitStopParser.stop);
        this.time = pitStopParser.time
        this.duration = pitStopParser.duration
    }

    driverId: string
    lap: number
    stop: number
    time: number
    duration: number
}