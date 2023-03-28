export default class Time {
    constructor(timeParser: any) {
        this.millis = parseInt(timeParser.millis)
        this.time = timeParser.time
    }

    millis: number
    time: number
}