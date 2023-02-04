import { DriverStanding } from '../utils/types.js.js';
import Parser from './parser.js';
import DriverParser from './driver.js';
import ConstructorsParser from './constructors.js';

export default class DriverStandingParser extends Parser {

    private static instance: DriverStandingParser;

    public static getInstance() {
        if(!this.instance) {
            this.instance = new DriverStandingParser();
        }

        return this.instance
    }

    public parse(data: any): any {
        const constructorsParser = ConstructorsParser.getInstance()
        const driverParser = DriverParser.getInstance();

        const { position, points, wins, Driver: driverData, Constructors: constructors } = data;
        const driverStanding: DriverStanding = {
            position: parseInt(position, 10),
            points: parseFloat(points),
            wins: parseInt(wins, 10),
            driver: driverParser.parse(driverData),
            constructors: constructorsParser.parse({
                Constructors: [...constructors],
            }),
        };

        return driverStanding
    }
}