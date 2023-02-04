export default class AverageSpeed {
    constructor(averageSpeedParser: any) {
        this.units = averageSpeedParser.units;
        this.speed = parseFloat(averageSpeedParser.speed)
    }

    units: string
    speed: number
}