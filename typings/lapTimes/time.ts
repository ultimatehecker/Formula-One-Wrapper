export default class Time {

    public millis: number; // TODO: figure out why this is a number
    public time: string;

    constructor(timeParser: any) {
        this.millis = parseInt(timeParser.millis)
        this.time = timeParser.time
    }
}