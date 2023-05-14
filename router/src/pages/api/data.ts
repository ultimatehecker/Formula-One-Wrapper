import fs from 'fs';
import csv from 'csv-parser';
import parse from 'csv-parser';
import transform from 'stream-transform';

async function readCSVFile(filePath: string, batchSize = 1000): Promise<object[]> {
  const results: object[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath).pipe(parse()).pipe(transform((data, callback) => {
        results.push(data);

        if (results.length % batchSize === 0) {
            callback(null, results);
            results.length = 0;
        } else {
            callback();
        }
        })).on('finish', () => {
            if (results.length > 0) {
                resolve([...results]);
            } else {
                resolve(results);
            }
        }).on('error', (error: any) => {
            reject(error);
        });
    });
}

async function readDSVFile(filePath: string, delimiter = ';'): Promise<object[]> {
    const results: object[] = [];
  
    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath) /*
        .pipe(csv({ delimiter }))
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (error) => reject(error)); */
    });
}

export { readCSVFile, readDSVFile };