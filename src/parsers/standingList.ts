import { StandingList } from "../utils/types";
import Parser from "./parser";

export default class StandingListParser extends Parser {

    private static instance: StandingListParser;

    public static getInstance() {
        if(this.instance) {
            this.instance = new StandingListParser();
        }

        return this.instance
    }

    public parse(data: any, extraParser: Parser): any {
        if(!data?.StandingLists || !data?.StandingLists.length) {
            return null
        }

        const { season, round, DriverStanding: driverStandings, ConstructorStandings: constructorStandings } = data.StandingLists[0];
        const standingList: StandingList<any> = {
            season,
            round,
            standing: extraParser.parse(driverStandings || constructorStandings),
        };

        return standingList;
    }
}