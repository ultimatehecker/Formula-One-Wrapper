import Parser from './parser.js';
import { Circuit } from '../utils/types.js';
import LocationParser from './location.js';

export default class CircuitParser extends Parser {

    private static instance: CircuitParser;

    public static getInstance() {
        if(!this.instance) {
            this.instance = new CircuitParser();
        }

        return this.instance
    }

    public parse(data: any): any {
        const locationParser = LocationParser.getInstance();
        const { circuitID, circuitName, Location: location } = data;

        const circuit: Circuit = {
            id: circuitID,
            name: circuitName,
            location: locationParser.parse(location),
        };

        return circuit;
    }
}