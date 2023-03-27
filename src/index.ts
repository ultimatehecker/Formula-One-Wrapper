import F1Client from "./api/api.js";

const f1Client = new F1Client();

f1Client.getSeason(2017, function(err: any, season: any) {
  if (err) {
    console.error(err);
  } else {
    console.log(season);
  }
});