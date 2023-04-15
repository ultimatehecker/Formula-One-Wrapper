export default class AverageSpeed {

    public units: string;
    public speed: number;

    constructor(averageSpeedParser: any) {
        this.units = averageSpeedParser.units;
        this.speed = parseFloat(averageSpeedParser.speed)
    }
}