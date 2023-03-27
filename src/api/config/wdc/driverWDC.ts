import WorldDriversChampionship from '../../data/WorldDriversChampion.json';
import Driver from '../drivers/driver';


export default class DriverWDC {

    constructor(driverParser: any) {
        this.season = driverParser.season;
        this.round = driverParser.round;
        this.Driver = driverParser.Driver;
    }
    
    season: string
    round: string
    Driver: Driver
}