import ConstructorChampion from './constructorWDC';
import DriverWDC from './driverWDC';

export default class ConstructorWDC {
    constructor(constructorParser: any) {
        this.season = constructorParser.season;
        this.round = constructorParser.round;
        this.Constructor = constructorParser.Constructor;
        this.Driver = constructorParser.Driver;
    }

    season: string
    round: string
    Constructor: ConstructorChampion
    Driver: DriverWDC
}