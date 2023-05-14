export default class AverageSpeed {

    public units: string;
    public speed: number; // TODO: figure out why this is a number

    constructor(averageSpeedParser: any) {
        this.units = averageSpeedParser.units;
        this.speed = parseFloat(averageSpeedParser.speed)
    }
}