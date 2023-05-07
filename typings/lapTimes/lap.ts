export default class Lap {

    public driverId: any;
    public pos: any;
    public time: any;

    constructor(lapParser: any) {
        this.driverId = lapParser.driverId
        this.pos = parseInt(lapParser.pos)
        this.time = lapParser.time
    }
}