export default class Time {

    public millis: number;
    public time: number;

    constructor(timeParser: any) {
        this.millis = parseInt(timeParser.millis)
        this.time = timeParser.time
    }
}