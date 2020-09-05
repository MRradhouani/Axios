const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => {
  res.send("Weather Application");
});

let london = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=c8bc692851284ff1288a866cdaa74a33'
let france = 'https://api.openweathermap.org/data/2.5/weather?q=france,fr&APPID=c8bc692851284ff1288a866cdaa74a33'
let tunisie ='https://api.openweathermap.org/data/2.5/weather?q=tunis&APPID=c8bc692851284ff1288a866cdaa74a33'
const LondonWeather = axios.get(london);
const FranceWeather = axios.get(france);
const TunisieWeather = axios.get(tunisie);

axios
  .all([LondonWeather,FranceWeather,TunisieWeather])
  .then(axios.spread((London,France,Tunis) => {
    console.log(London.data,France.data,Tunis.data);
  })
  )
  .catch(errors => {
    console.error(errors);
  });


app.get("/London", (req, res) => {
  LondonWeather
    .then((data) => {
      res.json(data.data);
    })
    .catch((err) => { });
});

app.get("/London", (req, res) => {
  FranceWeather
    .then((data) => {
      res.json(data.data);
    })
    .catch((err) => { });
});

app.get("/London", (req, res) => {
  TunisieWeather
    .then((data) => {
      res.json(data.data);
    })
    .catch((err) => { });
});





app.listen(3000, function (err) {
  if (err) console.log("server not running");
  else console.log("server is running....")
});