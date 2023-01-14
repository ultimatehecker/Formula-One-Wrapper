import Parser from "./parser";
import DriverStandingParser from "./driverStanding";

export default class DriverStandingsParser extends Parser {

    private static instance: DriverStandingsParser

    public static getInstance() {
        if(!this.instance) {
            this.instance = new DriverStandingsParser();
        }

        return this.instance;
    }

    public parse(data: any): any {
        const driverStandingParser = DriverStandingParser.getInstance();
        const driverStandings: any[] = [];

        if((!data || !data.length) && (!data?.StandingsList || !data?.StandingsList.length)) {
            return driverStandings;
        }

        const dataList = data?.length ? data : data?.StandingsList[0].DriverStandings;

        for(const driverStandingData of dataList || []) {
            driverStandings.push(driverStandingParser.parse(driverStandingData));
        }

        return driverStandings;
    }
}