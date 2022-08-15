require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();

const url = "https://api.clashofclans.com/v1/players/%232889v22uq";
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
};

app.get("/api", (req, res) => {
  const clashReq = async () => {
    try {
      const response = await axios.get(url, config);

      const {
        name,
        townHallLevel,
        trophies,
        bestTrophies,
        builderHallLevel,
        league: {
          name: leagueName,
          iconUrls: { medium: mediumIcon },
        },
        legendStatistics: {
          previousSeason: { trophies: previousTrophies},
          bestSeason: { trophies: bestSeasonTrophies},
          currentSeason: { trophies: currentTrophies},
        },
      } = response.data;

      res.json({

          name,
          townHallLevel,
          trophies,
          bestTrophies,
          builderHallLevel,
          leagueName,
          mediumIcon,
          previousTrophies,
          bestSeasonTrophies,
          currentTrophies
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  clashReq();
});

app.listen(5000, () => {
  console.log("listening on 5k");
});
