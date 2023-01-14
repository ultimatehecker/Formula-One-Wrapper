import Parser from './parser';
import { Constructor } from '../utils/types';

export default class ConstructorParser extends Parser {

    private static instance: ConstructorParser;

    public static getInstance() {
        if(!this.instance) {
            this.instance = new ConstructorParser()
        }

        return this.instance;
    }

    public parse(data: any): any {
        let constructorData = data;

        if(data?.Constructors) {
            if(data?.Constructors.length) {
                return null;
            }

            constructorData = data.Constructors[0];
        }

        const { constructorID, name, nationality } = data;
        const driver: Constructor = {
            id: constructorID,
            name,
            nationality
        }

        return driver;
    }
}