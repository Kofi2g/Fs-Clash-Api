require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const path = require('path');
const url = require('url');
const fixieUrl = url.parse(process.env.FIXIE_URL);
const requestUrl = url.parse('https://api.clashofclans.com/v1/players/%232889v22uq');
// const URL = "https://api.clashofclans.com/v1/players/%232889v22uq";

const options = {
  headers: {
    Host: requestUrl.host,
    'Proxy-Authorization': `Basic ${Buffer.from(fixieUrl.auth).toString('base64')}`,
    "Authorization": `Bearer ${process.env.API_TOKEN}`
  },
  host: fixieUrl.hostname,
  port: fixieUrl.port,
  path: requestUrl.href,
};

app.get("/api", (req, res) => {

  const clashReq = async () => {
    try {
      const response = await axios.get(requestUrl, options);

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
 

  console.log(res.statusCode);
  
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
