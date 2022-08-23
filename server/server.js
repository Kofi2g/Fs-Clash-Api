require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const path = require('path');
const cors = require("cors")


const ogURL = "https://api.clashofclans.com/v1/players/%232889v22uq/";
const URL = "https://api.clashofclans.com/v1/players/4xbk9mpw";


const options = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.API_TOKEN}`,
      'User-Agent': 'node.js',
    },

    proxy: process.env.QUOTAGUARDSTATIC_URL,
    url: 'https://clash-backend.herokuapp.com/api',
};

// 3.250.252.133, 63.32.41.221
// http://ponsnqq0fgfyfo:i8uw1wk82u9ujwkanqv4ndbxuvq@eu-west-static-05.quotaguard.com:9293

app.use(cors({
  origin: "3.250.252.133"
}))

app.get("/api", (req, res) => {
  const clashReq = async () => {
    try {
      const response = await axios.get(ogURL, options);

      console.log(response)

      // const {
      //   name,
      //   townHallLevel,
      //   trophies,
      //   bestTrophies,
      //   builderHallLevel,
      //   league: {
      //     name: leagueName,
      //     iconUrls: { medium: mediumIcon },
      //   },
      //   legendStatistics: {
      //     previousSeason: { trophies: previousTrophies},
      //     bestSeason: { trophies: bestSeasonTrophies},
      //     currentSeason: { trophies: currentTrophies},
      //   },
      // } = response.data;

      // console.log(response.data);

      // res.json({
      //     name,
      //     townHallLevel,
      //     trophies,
      //     bestTrophies,
      //     builderHallLevel,
      //     leagueName,
      //     mediumIcon,
      //     previousTrophies,
      //     bestSeasonTrophies,
      //     currentTrophies
      //   }
      // );
    } catch (error) {
      console.log(error);
    }
  };
  clashReq();
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
  });
}

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running`);
});
