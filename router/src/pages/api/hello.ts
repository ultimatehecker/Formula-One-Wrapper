// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Driver = {
    driverId: string;
    permanentNumber: number; // TODO: figure out why this is a number
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
}

type Constructor = {
    constructorId: string;
    url: string;
    name: string;
    nationality: string;
}

type Data = {
  Drivers: Driver[]
  Constructor: Constructor[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
  res.status(200).json({ Drivers: 
    [
      { 
        driverId: "alonso", 
        permanentNumber: 14, 
        code: "ALO", 
        url:"https://en.wikipedia.org/wiki/Fernando_Alonso", 
        givenName: "Fernando", 
        familyName: "Alonso", 
        dateOfBirth: "1981-07-29", 
        nationality: "Spanish" 
      },
      {
        driverId: "ocon",
        permanentNumber: 31,
        code: "OCO",
        url: "https://en.wikipedia.org/wiki/Esteban_Ocon",
        givenName: "Esteban",
        familyName: "Ocon",
        dateOfBirth: "1996-09-17",
        nationality: "French"
      },
      {
        driverId: "bottas",
        permanentNumber: 77,
        code: "BOT",
        url: "https://en.wikipedia.org/wiki/Valtteri_Bottas",
        givenName: "Valtteri",
        familyName: "Bottas",
        dateOfBirth: "1989-08-28",
        nationality: "Finnish"
      },
      {
        driverId: "hamilton",
        permanentNumber: 44,
        code: "HAM",
        url: "https://en.wikipedia.org/wiki/Lewis_Hamilton",
        givenName: "Lewis",
        familyName: "Hamilton",
        dateOfBirth: "1985-01-07",
        nationality: "British"
      }
    ],

    Constructor: [
      {
        constructorId: "alfa",
        url: "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
        name: "Alfa Romeo",
        nationality: "Swiss"
      },
      {
        constructorId: "alphatauri",
        url: "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
        name: "AlphaTauri",
        nationality: "Italian"
      },
      {
        constructorId: "alpine",
        url: "http://en.wikipedia.org/wiki/Alpine_F1_Team",
        name: "Alpine",
        nationality: "French"
      },
      {
        constructorId: "aston_martin",
        url: "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
        name: "Aston Martin",
        nationality: "British"
      },
      {
        constructorId: "ferrari",
        url: "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
        name: "Ferrari",
        nationality: "Italian"
      },
      {
        constructorId: "haas",
        url: "http://en.wikipedia.org/wiki/Haas_F1_Team",
        name: "Haas F1 Team",
        nationality: "American"
      },
      {
        constructorId: "mclaren",
        url: "http://en.wikipedia.org/wiki/McLaren",
        name: "McLaren",
        nationality: "British"
      },
      {
        constructorId: "mercedes",
        url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
        name: "Mercedes",
        nationality: "German"
      },
      {
        constructorId: "red_bull",
        url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
        name: "Red Bull",
        nationality: "Austrian"
      },
      {
        constructorId: "williams",
        url: "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
        name: "Williams",
        nationality: "British"
      }
    ]

  });
}