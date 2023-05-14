export default class Lap {

    public driverId: string;
    public pos: number; // TODO: figure out why this is a number
    public time: string;

    constructor(lapParser: any) {
        this.driverId = lapParser.driverId
        this.pos = parseInt(lapParser.pos)
        this.time = lapParser.time
    }
}