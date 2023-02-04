export default class Lap {
    constructor(lapParser: any) {
        this.driverId = lapParser.driverId
        this.pos = parseInt(lapParser.pos)
        this.time = lapParser.time
    }

    driverId: string
    pos: number
    time: number
}