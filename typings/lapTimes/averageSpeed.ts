export default class AverageSpeed {

    public units: any;
    public speed: any;

    constructor(averageSpeedParser: any) {
        this.units = averageSpeedParser.units;
        this.speed = parseFloat(averageSpeedParser.speed)
    }
}