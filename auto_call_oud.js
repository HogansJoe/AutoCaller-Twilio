// const axios = require("axios");
const http = require("http");

//Node dependencies
const express = require("express");
const router = express.Router();
const app = express();

//twilio
const accountSid = "ACff639de1e86b36acf5c0842d6f2a7669";
const authToken = "ae96cf02d1614f830209bc6687d6adbc";
const client = require("twilio")(accountSid, authToken);

const port = 9994;

app.listen(port, function() {
  console.log("Caller online: ", port);
  console.log(` 

  ._______..__...__.._______.._______....__...__.._______..___..._______.
  |..._...||..|.|..||.......||.......|..|..|.|..||.......||...|.|.......|
  |..|_|..||..|.|..||_....._||..._...|..|..|_|..||..._...||...|.|...._..|
  |.......||..|_|..|..|...|..|..|.|..|..|.......||..|.|..||...|.|...|_|.|
  |.......||.......|..|...|..|..|_|..|..|.......||..|_|..||...|.|....___|
  |..._...||.......|..|...|..|.......|...|.....|.|.......||...|.|...|....
  |__|.|__||_______|..|___|..|_______|....|___|..|_______||___|.|___|....
  
  Automaticly call your clients within miliseconds by Hogans 2020
  
  `);
});

app.get("/call", (req, res, next) => {
  let querys = {
    caller: req.query.callto, //query vanuit URL
    regioncode: req.query.region,
    name: req.query.name,
    callFrom: req.query.callFrom
  };

  console.log("region:", querys.regioncode, "Call to", querys.caller)

  //Nummer omzetten
  let numberNine = querys.caller.substr(querys.caller.length - 9);
  let newestNumber = querys.regioncode + numberNine;

  console.log("Number to dial:", newestNumber)


  client.calls.create(
    {
      url: "https://twimlets.com/forward?PhoneNumber=%2B31850207422&Timeout=1&",
      // to: req.query.callto, //newestNumber
      to: newestNumber,
      from: "+3197014201699"

      //  to: '+13345648639',
      //  from: '+31618220382'
    },
    function(err, call) {
      if (err) {
        console.log(err);
      } else {
        console.log(call.sid);
        console.log(newestNumber);
      }
    }
  );

  res.status(200).send(`Execute ...`);
});

// joe's nummer= 'https://twimlets.com/forward?PhoneNumber=%2B31644994529&Timeout=2&'

// hogans fix nummer = https://twimlets.com/forward?PhoneNumber=%2B310850207422&Timeout=1&
