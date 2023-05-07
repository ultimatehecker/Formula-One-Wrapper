export default class Time {

    public millis: any;
    public time: any;

    constructor(timeParser: any) {
        this.millis = parseInt(timeParser.millis)
        this.time = timeParser.time
    }
}