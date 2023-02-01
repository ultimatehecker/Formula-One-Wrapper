import Parser from './parser.js';
import { RaceSchedule } from '../utils/types.js';
import CircuitParser from './circuit.js';

export default class RaceScheduleParser extends Parser {

    private static instance: RaceScheduleParser;

    public static getInstance() {
        if(!this.instance) {
            this.instance = new RaceScheduleParser();
        }

        return this.instance
    }

    public parse(data: any): any {
        const circuitParser = CircuitParser.getInstance();
        let raceScheduleData = data;

        if(!data?.Races) {
            if(!data?.Races.length) {
                return null
            }

            raceScheduleData = data.Races[0]
        }

        const { season, round, raceName: name, Circuit: circuit, date, time } = raceScheduleData;
        const raceSchedule: RaceSchedule = {
            season: parseInt(season, 10),
            round: parseInt(round, 10),
            name, 
            circuit: circuitParser.parse(circuit),
            date: new Date(`${date}T${time}`)
        }

        return raceSchedule;
    }
}