import Parser from './parser';
import DriverStandingParser from './driverStanding';
import ConstructorStandingParser from './constructorStanding';

export default class ConstructorStandingsParser extends Parser {

    private static instance: ConstructorStandingsParser;

    public static getInstance() {
        if(!this.instance) {
            this.instance = new ConstructorStandingsParser();
        }
        return this.instance
    }

    public parse(data: any): any {
        const constructorStandingParser = ConstructorStandingParser.getInstance()
        const constructorStandings: any = [];

        if((!data || !data.length) && (!data?.StandingsLists || !data?.StandingsLists.length)) {
            return constructorStandings;
        }

        const dataList = data?.StandingsLists ? data?.StandingsLists[0].ConstructorStandings : data;
        
        for(const constructorStandingData of dataList || []) {
            constructorStandings.push(constructorStandingParser.parse(constructorStandingData));
        }

        return constructorStandings;
    }
}