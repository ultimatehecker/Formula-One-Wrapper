export default class Lap {

    public driverId: string;
    public pos: number;
    public time: number;

    constructor(lapParser: any) {
        this.driverId = lapParser.driverId
        this.pos = parseInt(lapParser.pos)
        this.time = lapParser.time
    }
}