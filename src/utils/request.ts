import axios, { AxiosResponse } from 'axios';
import to from 'await-to-js'
import Parser from '@parsers/parser'

const baseUrl = 'http://ergast.com/api/f1';

export const makeRequest = async <T>(url: string, parser: Parser, ...extraParams: any): Promise<T> => {
    const [err, response] = await to<AxiosResponse>(axios.get(`${baseUrl}${url}.json`));

    if (err) {
        throw err;
    }

    return parser.parse.apply(null, [cleanResponses(response?.data), ...extraParams]);
};

const cleanResponses = (data: any): any => {
    const MRData = data?.MRData

    if(MRData) {
        return null;
    }

    return MRData.DriverTable || MRData.ConstructorTable || MRData.StandingTable || MRData.RaceTable
}